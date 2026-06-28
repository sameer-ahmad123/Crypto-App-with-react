import React from 'react'
import { NavLink } from 'react-router-dom'

const Aside = () => {
  return (
    <div className='lg:h-screen lg:pt-7 lg:w-[13vw] h-24 w-full flex lg:flex-col flex-row justify-between items-center bg-white shadow-sm px-4'>
      
      <ul className='flex lg:flex-col flex-row gap-1.5 text-[16px] font-medium'>
        
        <NavLink 
          to="/" 
          className={(e) => e.isActive 
            ? "font-bold px-6 py-2 bg-black/10 rounded-full" 
            : "hover:cursor-pointer px-6 py-2 rounded-full hover:bg-black/5 transition-all"
          }
        >
          <li className='flex justify-center items-center gap-2'>
            <span className="material-symbols-outlined text-[20px]">dashboard</span> 
            <p>Dashboard</p>
          </li>
        </NavLink>

        <NavLink 
          to="/Transcation" 
          className={(e) => e.isActive 
            ? "font-bold px-6 py-2 bg-black/10 rounded-full" 
            : "hover:cursor-pointer px-6 py-2 rounded-full hover:bg-black/5 transition-all"
          }
        >
          <li className='flex justify-center items-center gap-2'>
            <span className="material-symbols-outlined text-[20px]">sync_alt</span> 
            <p>Transactions</p>
          </li>
        </NavLink>
        
      </ul>

      <NavLink 
        to="/ContactUs" 
        className={(e) => e.isActive 
          ? "font-bold px-6 py-2 bg-black/10 rounded-full mb-0 lg:mb-4" 
          : "hover:cursor-pointer px-6 py-2 rounded-full hover:bg-black/5 transition-all mb-0 lg:mb-4"
        }
      >
        <li className='flex justify-center items-center gap-2'>
          <span className="material-symbols-outlined text-[20px]">support_agent</span> 
          <p>Contact Us</p>
        </li>
      </NavLink>
      
    </div>
  )
}

export default Aside