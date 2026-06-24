import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="box w-80 lg:w-96 h-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6  m-auto">
      <div className='text-2xl font-bold'>Welcome to Crypto App</div>
      <div>Enter your credentials to access the account</div>
            <div className='email mt-4.5'><p className='text-sm font-semibold'>Email</p><input placeholder='name@gmail.com' className='border py-0.5 px-1.5 lg:w-full w-80% border-gray-300  rounded-lg' type="text" /></div>
            <div className='password mt-4.5'><p className='text-sm font-semibold'>Password</p><input  className='border py-0.5 px-1.5 lg:w-full w-80% border-gray-300  rounded-lg' type="text" /></div>
              <div className='flex justify-between items-center mt-4'>
                <div className='flex'>
         <input className='cursor-pointer' type="checkbox" /> <p className='ml-1.5'>Remember me</p>
         </div>
         <div className='text-violet-600 text-sm cursor-pointer'>Forget Password?</div>
          </div>
         <button className='w-full p-2 mt-4  rounded-lg  bg-slate-200 text-gray-700 font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Login</button>
         <button className='w-full p-2 mt-4  rounded-lg  bg-black/5 text-black font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Create new Account</button>

</div>
    </div>
  )
}

export default Login
