import React from 'react'
import { useForm } from 'react-hook-form'

const Login = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
       <form action={""} onSubmit={handleSubmit(onSubmit)}>
      <div className="box w-80 lg:w-96 h-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6  m-auto">
        <div className='text-2xl font-bold'>Welcome to Crypto App</div>
        <div>Enter your credentials to access the account</div>
        <div className='email mt-4.5'><p className='text-sm font-semibold'>Email</p><input {...register("email",{required:true})} placeholder='name@gmail.com' className='border py-0.5 px-1.5 lg:w-full w-80% border-gray-300  rounded-lg' type="text" />
        {errors.email && <div className='text-red-500 text-sm'>Please Enter your email</div>}</div>
        <div className='password mt-4.5'><p className='text-sm font-semibold'>Password</p><input {...register("password",{required:true,minLength: {value : 3,message : "Min length is 8"}})} className='border py-0.5 px-1.5 lg:w-full w-80% border-gray-300  rounded-lg' type="text" />
         {errors.password && <div className='text-red-500 text-sm'>Please Enter your Password</div>}</div>
        <div className='flex justify-between items-center mt-4'>
          <div className='flex'>
            <input className='cursor-pointer' type="checkbox" /> <p className='ml-1.5'>Remember me</p>
          </div>
          <div className='text-violet-600 text-sm cursor-pointer'>Forget Password?</div>
        </div>
        <button className='w-full p-2 mt-4  rounded-lg  bg-slate-200 text-gray-700 font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Login</button>
        <button className='w-full p-2 mt-4  rounded-lg  bg-black/5 text-black font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Create new Account</button>

      </div>
       </form>
    </div>
  )
}

export default Login
