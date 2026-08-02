import React from 'react'
import ChildTwo from './ChildTwo';

const ChildOne = ({adds, addFunctions}) => {
    console.log("ChildOne runs",adds);
  return (
    <div>
        <h1>ChildOne</h1>
        <h1>{adds}</h1>
        <ChildTwo/>

        <button onClick={addFunctions}>+</button>
    </div>
  )
}

export default ChildOne