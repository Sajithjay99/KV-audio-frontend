import React from 'react'
import './App.css'

import { MdDashboard } from "react-icons/md";
import { FaBookmark } from "react-icons/fa6";
import { BsFillSpeakerFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";

 

function App() {
  return (
    <div className='flex w-full h-screen'>
      
      <div className='w-[350px] h-full bg-green-200' >

      <button className='w-full h-[40px] text-xl font-semibold  flex justify-center items-center'>
      <MdDashboard />
        Dashboard
      </button>

      <button className='w-full h-[40px] text-xl font-semibold flex justify-center items-center'>
      <FaBookmark />
      Bookings
      </button>

      <button className='w-full h-[40px] text-xl font-semibold flex justify-center items-center'>
      <BsFillSpeakerFill />
      Items
      </button>

      <button className='w-full h-[40px] text-xl font-semibold flex justify-center items-center'>
      <FaUserCircle />
        Users
      </button>

      

      

        
      </div>

      
     
     <div className='w-full h-full bg-red-900'>


     
     </div>
      </div>
      
      
   
  )
}

export default App
