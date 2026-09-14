import React, { useState } from 'react'

const Dummyform = () => {
  const [selectGender, setSelectGender] = useState("");
  const [skills, setSkills] = useState([]);
  const [language, setLanguage] = useState([]);
  const [country, setCountry] = useState("");
  console.log("selectGender",selectGender)

    const [clientDetails, setClientDetails] = useState({
    name : "",
    phnumber : "",
    email : "",
  })

  const handleChange = (e) => {
    const {value, checked} = e.target;

    if(checked){
      console.log("value",value)
      setSkills([...skills,value]);
    }
    else{
      setSkills(skills.filter((skill) => skill !== value));
    }
  }
  
  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log("Form submitted",clientDetails);

    setClientDetails({...clientDetails,
    gender : selectGender,
    skills : skills,
    country : country
    });

    console.log("Form submitted",clientDetails);

    localStorage.setItem("user",JSON.stringify(clientDetails))
  }
  return (
    <div className='m-2 bg-blue-500 h-max p-2 flex flex-col justify-center items-center align-middle'>
      <div className='p-2'>
        <h1>my dummy form</h1>
      </div>
      
      <div className='bg-orange-300'>
        <form action="" onSubmit={handleSubmit} className='p-2'>
          <input type="text" placeholder='name' name='name' className='text-white w-xl p-2' value={clientDetails.name} onChange={(e) => setClientDetails({...clientDetails,[e.target.name] : e.target.value})}/>
          <hr />
          <input type="number" placeholder='phnumber' name='phnumber' className='text-white w-xl p-2 ' value={clientDetails.phnumber} onChange={(e) => setClientDetails({...clientDetails,[e.target.name] : e.target.value})}/>
          <hr />
          <input type="email" placeholder='email' name='email' className='text-white w-xl p-2 ' 
          value={clientDetails.email} onChange={(e) => setClientDetails({...clientDetails,[e.target.name] : e.target.value})}/>
          <hr />
          <div  className='w-xs px-2 py-1 m-1 flex gap-2'>
          <input type="radio" id="" value={'male'} checked = {selectGender === 'male'} onChange={(e) => setSelectGender(e.target.value)}/> Malee
          <input type="radio" value={'female'}   id="" checked = {selectGender === 'female'} onChange={(e) => setSelectGender(e.target.value)}/> Femalee

          <h1 className='mx-10'>{selectGender}</h1>
          </div>
          <hr />
          <br />
          <div className='flex gap-x-1'>
            <label htmlFor="">
              <input type="checkbox" value={"React js"} onChange={handleChange}/> React js
            </label>
            <label htmlFor="">
              <input type="checkbox" value={"Node js"} onChange={handleChange}/> Node js
            </label>
            <label htmlFor="">
              <input type="checkbox" value={"Mongo DB"} onChange={handleChange}/> Mongo DB
            </label>
            <label htmlFor="">
              <input type="checkbox" value={"AI/ML"} onChange={handleChange}/> AI/ML
            </label>
          </div>
          <div>
              {/* {skills.join(",")} */}
              {skills.map((skill,index) => (
              <ul key={index}>
                <li>{skill}</li>
              </ul>
              ) )}
            </div>
            <hr />
            <br />
            <select value={country} name="" id="" onChange={(e) => setCountry(e.target.value)}>
              <option value="">Select Country</option>
              <option value="India">India</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>

            <p>Selected country: {country}</p>

            <hr />
            <br />
            <button type='submit' className='bg-blue-500 p-2 rounded-2xl'>submit</button>
        </form>
      </div>

    </div>
  )
}

export default Dummyform