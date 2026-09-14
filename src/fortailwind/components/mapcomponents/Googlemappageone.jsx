import React, { useEffect, useState, useRef } from 'react'
import GoogleMapReact from 'google-map-react'

const Googlemappageone = () => {

    const [errmap , setErrmap] = useState(null);
    // const [watchId, setWatchId] = useState(0);
    const watchId = useRef(null);


    const mynavigator = () => {
      watchId.current =  navigator.geolocation.watchPosition((position) => {
        console.log("position.coords.latitude",position.coords.latitude)
        console.log("position.coords.longitude",position.coords.longitude)
        setErrmap(position.coords.latitude)
    }, (err) => {
        console.log("err code",err.code)
        console.log("err message",err.message)
        setErrmap(err.message)
    }, {enableHighAccuracy : true,
    });

    
    } 

    useEffect(() => {
       return () => {
                if (watchId.current !== null) {
                    console.log("watchId.current is cleared")
      navigator.geolocation.clearWatch(watchId.current);
    }
        }
    },[])

  return (
    <div>Googlemappageone
        <button className='bg-amber-600 p-2 ml-2 rounded-2xl' onClick={mynavigator}>click

        </button>
        {errmap && <h1>{`error is showing ${errmap}`}</h1>}
        <div className='h-96 w-screen'>
    <GoogleMapReact
        // bootstrapURLKeys={{
        //   key: "YOUR_GOOGLE_MAPS_API_KEY",
        // }}
        defaultCenter={{
          lat: 10.873724,
          lng: 78.729831,
        }}
        
        defaultZoom={12}
      >
        <div
          lat={10.873724}
          lng={78.729831}
        >
          📍 Trichy
        </div>
      </GoogleMapReact>
        </div>
    </div>
  )
}

export default Googlemappageone

// Your current location is at latitude 10.8286 and longitude 78.6908, right in Tiruchirappalli, Tamil Nadu, India. 10.873724, 78.729831