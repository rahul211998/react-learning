import React, { useState } from 'react'
import ChildOne from './ChildOne';

const ParentPage = () => {
    const [add,setAdd] = useState(0);
    console.log("ParentPage runs");

    const addFunction = () => {
        setAdd(t => t +1)
        console.log("add is in function",add)
    }

    console.log("add is",add)
  return (
    <div>
        <h1>ParentPage</h1>
        <h2>{add}</h2>
        <ChildOne adds = {add} addFunctions = {addFunction}/>
        <button onClick={addFunction}>click</button>
    </div>
  )
}

export default ParentPage