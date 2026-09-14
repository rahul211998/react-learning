import './App.css'
import Sidebar from './fortailwind/components/Sidebar'
import DashBoardPage from './fortailwind/DashBoardPage'
import Companies from './fortailwind/components/workingLeners/Companies'
import { useState } from 'react'
import Googlemappageone from './fortailwind/components/mapcomponents/Googlemappageone'
import Homepage from './components/pages/Homepage'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import Profilepage from './components/pages/Profilepage'

function App() {
  const [myHooks, setMyHooks] = useState("");
  const [main, setMain] = useState("")
  const [isMap , setIsMap] = useState(false);
  const location = window.location;

  console.log("location",location)
  return (
    <BrowserRouter>
    <div className='flex'>
      <Sidebar/>
      <div className='md:ml-64 flex-1'>

        <section className='flex justify-center cursor-pointer mt-1'>
          <div className='flex bg-amber-500 w-min rounded-2xl p-2'>
          <h1 onClick={() => setIsMap(true)} className=''>Google Map</h1>
          <div className='bg-black h-10 m-2 w-0.5 mx-10'></div>
          <h1 onClick={() => setIsMap(false)}>Dashboard
            /Companies</h1>
        </div>
        </section>
        {isMap ? <Googlemappageone/> : <section>

          
          <Routes>
            <Route path = "/homepage" element= {<Homepage name = {"hello"}>
              <Profilepage/>
            </Homepage>}/>
            <Route path = "/profilePage" element= {<Profilepage/>}/>
          </Routes>
          
          {/* <Homepage/> */}
        {/* <DashBoardPage/>
        <Companies/> */}
        </section>}
      </div>
    </div>
    </BrowserRouter>
  )
}

export default App












