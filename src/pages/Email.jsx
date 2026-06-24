import React from 'react'

const Email = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <div className='card h-56 w-96  shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6'>
                <div className='h-8 w-full flex justify-center items-center'>
                    <span className="material-symbols-outlined text-violet-600 !text-5xl">mail</span>
                </div>
                <div className='w-full h-10 flex justify-center items-baseline-last text-2xl'>Email Verification</div>
<p className='text-sm text-gray-500'>We have sent you an email verification to <span className='text-black'> jenny.wilson@gmail.com</span>. If you didn’t receive it, click the button below.</p>
         <button className='w-full p-2 mt-4  rounded-lg  bg-slate-200 text-black font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Resend Email</button>

            </div>
        </div>
    )
}

export default Email
