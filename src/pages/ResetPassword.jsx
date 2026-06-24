import React from 'react'

const ResetPassword = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="box w-96 h-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6  m-auto">
        <div className='text-2xl'>Reset</div>
        <div className='text-sm text-gray-500 mt-3'>Enter your new password</div>
            <div className='email mt-4.5'><p className='text-sm font-semibold'>New Password</p><input  className='border py-0.5 px-1.5 w-full  border-gray-300  rounded-lg' type="text" /></div>
            <div className='email mt-4.5'><p className='text-sm font-semibold'>Reset Password</p><input  className='border py-0.5 px-1.5 w-full  border-gray-300  rounded-lg' type="text" /></div>
         <button className='w-full p-2 mt-4  rounded-lg  bg-black/5 text-gray-600 font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Reset Password</button>

      </div>
    </div>
  )
}

export default ResetPassword
