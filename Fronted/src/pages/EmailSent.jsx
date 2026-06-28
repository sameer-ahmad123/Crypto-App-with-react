import React from 'react'

const Verified = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="card h-56 w-96  shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6">
         <div className='h-8 w-full flex justify-center items-center '>
                    <span className="material-symbols-outlined text-white  rounded-full bg-green-600 !text-5xl">check</span>
                </div>
                <div className='w-full h-10 flex justify-center items-baseline-last mt-2  text-2xl '>Email Sent Successfully</div>
                <div className='text-sm text-gray-500 mt-1.5'>We have sent instructions on how to reset your password to <span className='text-black'>jenny.wilson@gmail.com.</span> Please follow the instructions from the email.</div>
      </div>
    </div>
  )
}

export default Verified
