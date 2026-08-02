import React from 'react'
import { useState, useEffect } from 'react'

const UEpageone = () => {

    const [data, setData] = useState("hello");
    const [count, setCount] = useState(0);

    // console.log("1",data)

        const functionRuns = () => {
        console.log("hello friends from functionRuns")
        setData("hello functionRuns");
    }

    useEffect(() => {

        console.log("use effect runs")
        
    },[])

    console.log("3",data)
    
  return (
    <div>
        {/* {console.log("4",data)} */}
        <h4>UEpageoness</h4>
        <h1>{data}</h1>

        <button onClick={functionRuns}>click</button>
        
        <div>{count}</div>
          <button onClick={() => setCount(count + 1)}>
    +
  </button>
    </div>
  )
}

export default UEpageone