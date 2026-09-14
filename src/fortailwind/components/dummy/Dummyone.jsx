import React, { useContext } from 'react'
import { mycreateContext } from '../../../components/pages/Homepage'

const Dummyone = () => {
  console.log("Dummyone rendering")
  const value = useContext(mycreateContext)
  return (
    <div>Dummyone
      <h1>{value.onlyforDummy}</h1>
      <h1>{value.onlyforDummys}</h1>
    </div>
  )
}

export default Dummyone