
import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Aside from './Aside'

const DashboardLayout = () => {
  return (
    <div className='w-screen h-screen fixed bg-white/10  top-0 left-0'>
      <Navbar/>
      <div className="mainContent flex bg-[#EEEEF4] lg:relative">
        <div className='fixed  bg-white/10 bottom-0 w-full lg:w-  lg:top-0  lg:left-0'>
         <Aside/>
         </div>
        
         <Outlet/> 
         
      </div>
    </div>
  )
}

export default DashboardLayout