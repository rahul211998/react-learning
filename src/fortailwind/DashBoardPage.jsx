import React, { useState } from 'react'
// import Companies from './components/workingLeners/Companies'

const DashBoardPage = () => {
    
  return (
    <div className='px-2 py-1 mb-2'>
        <h1 className='text-2xl font-bold mb-2'>AI Course</h1>

        {/* responsive */}
        <div className='bg-blue-950 rounded md:flex md:flex-col md:justify-center md:items-center'>
            <h1 className='text-3xl mx-2 mb-1 text-white lg:text-5xl  '>Indian Institute of Technology Pathna and sastra university</h1>
            <h2 className='mx-2 text-2xl font-medium text-white'>Productive Course</h2>
            <button className='bg-blue-500 mx-2 my-2 text-white px-4 py-2 rounded mt-4 md:text-xl'>Details</button>
        </div>

        <div className='mt-3'>
            <h3 className='text-2xl md:text-center'>
                6 Months Course in Generative AI and Work Shop
            </h3>
        </div>

{/* responsive */}
    <div className="grid grid-cols-2 gap-1 mt-2">

  <div className="bg-gray-800 py-0.5 px-2 text-white rounded 2xl:p-5">
    <h3 className='font-light text-center 2xl:text-4xl'>2 Day IIT Campus Internship</h3>
  </div>

  <div className="bg-gray-800 py-0.5 px-2 text-white rounded 2xl:p-5">
    <h3 className='font-light text-center 2xl:text-4xl'>1000+ Professional Trainers</h3>
  </div>

  <div className="bg-gray-800 py-0.5 px-2 text-white rounded col-span-2 2xl:p-5">
    <h3 className='font-light text-center 2xl:text-4xl'>4.5/5 Program Rating</h3>
  </div>

  </div>

  {/* <Companies/> */}
    </div>
  )
}

export default DashBoardPage

