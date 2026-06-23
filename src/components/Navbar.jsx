import React from 'react'
import { useLocation } from 'react-router-dom' // 1. Import the GPS hook!

const Navbar = () => {
  // 2. Call the hook to get the current URL data
  const location = useLocation();
  const pageTitles = {
    "/": "Dashboard",
    "/Transcation": "Transactions",
    "/ContactUs": "Contact Us"
  };
  const currentTitle = pageTitles[location.pathname] || "Dashboard";

  return (
    <div>
      <nav className='flex justify-around items-center h-14 w-screen bg-white shadow-sm'>
        <div className='text-3xl font-extralight text-gray-800'>
          {currentTitle}
        </div>
        <button className='hover:cursor-pointer rounded-full '>
        <img 
          className='w-10 h-10 border border-gray-300 rounded-full p-1 ' 
          src="/profile2.svg" 
          alt="User Profile" 
        />
        </button>
        
      </nav>
    </div>
  )
}

export default Navbar