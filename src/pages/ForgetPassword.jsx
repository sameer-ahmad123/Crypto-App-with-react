import React from 'react'

const ForgetPassword = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div  className="card h-72 w-96  shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6">
         <div className=' w-full  '>
                    <button className="material-symbols-outlined p-2 hover:bg-black/10 rounded-full cursor-pointer">keyboard_backspace</button>
                </div>
                <div className='text-2xl '>Forget Password</div>
                <div className='text-sm text-gray-500 mt-1.5'>Enter your email address for which account you want to reset your password.</div>
            <div className='email mt-4.5'><p className='text-sm font-semibold'>Email</p><input placeholder='name@gmail.com' className='border py-0.5 px-1.5 w-full  border-gray-300  rounded-lg' type="text" /></div>
         <button className='w-full p-2 mt-4  rounded-lg  bg-black/5 text-gray-600 font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Reset Password</button>

      </div>
    </div>
  )
}

export default ForgetPassword
