import './App.css'
import Sidebar from './fortailwind/components/Sidebar'
import DashBoardPage from './fortailwind/DashBoardPage'
import Companies from './fortailwind/components/workingLeners/Companies'
import { useState } from 'react'

function App() {
  const [myHooks, setMyHooks] = useState("");
  const [main, setMain] = useState("")
  return (
    <div className='flex'>
      <Sidebar/>

      <div className='md:ml-64 flex-1'>
        <DashBoardPage/>
        <Companies/>
      </div>
    </div>
  )
}

export default App












