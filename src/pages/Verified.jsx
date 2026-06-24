import React from 'react'

const Verified = () => {
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="card h-56 w-96  shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6">
         <div className='h-8 w-full flex justify-center items-center '>
                    <span className="material-symbols-outlined text-white  rounded-full bg-green-600 !text-5xl">check</span>
                </div>
                <div className='w-full h-10 flex justify-center items-baseline-last mt-2  text-2xl '>Successfull Registration</div>
                <div className='text-sm text-gray-500 mt-1.5'>Hurray! You have successfully created your account. Enter the app to explore all it’s features.</div>
                <button className='w-full h-10 rounded-2xl bg-violet-600 text-white mt-5 cursor-pointer hover:scale-102 transition-all duration-300'>Enter the App</button>
      </div>
    </div>
  )
}

export default Verified
