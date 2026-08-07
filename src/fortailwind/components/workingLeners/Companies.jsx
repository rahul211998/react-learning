import React from 'react'
import { useState ,useEffect } from 'react'

const Companies = () => {

        const [companyImages, setCompanyImages] = useState({
            ibm1 : "https://www.ibm.com/brand/experience-guides/developer/8f4e3cc2b5d52354a6d43c8edba1e3c9/02_8-bar-reverse.svg",
    
            ibm2 : "https://www.ibm.com/brand/experience-guides/developer/b1db1ae501d522a1a4b49613fe07c9f1/01_8-bar-positive.svg",
    
            infosis : "https://toppng.com/uploads/preview/infosys-limited-vector-logo-11574259008tncnrnxj7c.png"
            
        })
  return (
    <div className='px-2 py-1 mb-2'>

        {/* companies */}
  <div className='bg-blue-950 my-2 px-2 py-3 rounded-2xl relative'>
    <div>
        <h2 className='text-white text-center font-medium '>OUR LEARNERS WORK AT</h2>
    </div>

    <div className='grid grid-cols-4 gap-2 mt-1'>

    <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm1} alt="IBM" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm2} alt="IBM" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.infosis} alt="Infosys" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm2} alt="IBM" className="max-h-full object-contain" />
  </div>


            <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm1} alt="IBM" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm2} alt="IBM" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.infosis} alt="Infosys" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm2} alt="IBM" className="max-h-full object-contain" />
  </div>



            <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm1} alt="IBM" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm2} alt="IBM" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.infosis} alt="Infosys" className="max-h-full object-contain" />
  </div>

  <div className="h-16 flex items-center justify-center md:h-30 lg:h-30 2xl:40">
    <img src={companyImages.ibm2} alt="IBM" className="max-h-full object-contain" />
  </div>
    </div>

    

    <div className=' flex justify-center mt-2 absolute -bottom-4 left-1/2 -translate-x-1/2'>
        <button className='bg-blue-500 mt-1 px-3 py-1.5 rounded font-medium md:text-xl text-white lg:px-5 lg:py-3'>Apply Now</button>
    </div>
    
  </div> 
  {/* -bottom-4 left-1/2 -translate-x-1/2 */}

    </div>
  )
}

export default Companies