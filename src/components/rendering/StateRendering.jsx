import React from 'react'
import { useState } from 'react';

const StateRendering = () => {
      const [ps5Price, setPs5Price] = useState(0);
    
      const pricingFunction = () => {
        setPs5Price(ps5Price => ps5Price +1); 
    
        console.log("ps5Price inside function",ps5Price)
        console.log("rerender happens inside function")
    
        checkingRenderFunction();
      }
    
      const checkingRenderFunction = () => {
        console.log("ps5Price inside checkingRenderFunction",ps5Price)
        console.log("checkingRenderFunction running")
      }
    
      console.log("ps5Price outside function",ps5Price)
    
      console.log("rerender happens outside function")
    
      return (
        <>
        <h1>ps5 prices</h1>
    
        <h2>{ps5Price}</h2>
        <button onClick={pricingFunction}>click</button>
        
        </>
      )
    }


export default StateRendering