import React from 'react'
import { useForm } from 'react-hook-form'

const SignUp = () => {
  const { register, handleSubmit, watch, formState: { errors,isSubmitting } } = useForm();
 
  const onSubmit = async(data)=>{
    try{
let response = await fetch("http://localhost:3000/",{
  method : "POST",
  headers : {
    "Content-Type" : "application/json",

  },
  body : JSON.stringify(data),
})
let serverReply = await response.json();
console.log("OK",serverReply.message)
    }
    catch(error){
console.log("Bridge Failed ! Is Backend running",error)
    }
  }
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <div className="box w-80 lg:w-96 h-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6  m-auto">
        <div><p className='text-2xl  '>Welcome to Crypto App</p>
          <p className='text-sm text-gray-600 mt-1'>Create a free account by filling data below.</p></div>
        <form action={""} onSubmit={handleSubmit(onSubmit)}>
          <div className='flex justify-between  lg:w-full w-80%'>
            <div className='w-[45%] '><p>Name</p> <input placeholder='James' {...register("name",{required:true})} className='border w-full border-gray-300 py-0.5 px-1.5  rounded-lg' type="text" />
            {errors.name && <div className='text-red-500 text-sm'>Please Enter your name</div>}</div>
            <div className='w-[45%]'><p>SurName</p> <input placeholder='Author' {...register("Surname",{required:true})} className='border w-full border-gray-300 py-0.5 px-1.5 rounded-lg' type="text" />
             {errors.name && <div className='text-red-500 text-sm'>Please Enter your Surname</div>}</div>
          </div>
          <div className='email mt-4.5'><p className='text-sm font-semibold'>Email</p><input  {...register("email",{required:true})} placeholder='name@gmail.com' className='border py-0.5 px-1.5 lg:w-full w-80% border-gray-300  rounded-lg' type="text" />
          {errors.name && <div className='text-red-500 text-sm'>Please Enter your email</div>}</div>
          <div className='password mt-4.5'><p className='text-sm font-semibold'>Password</p><input {...register("password",{required:true,minLength: {value : 3,message : "Min length is 8"}})} className='border py-0.5 px-1.5 lg:w-full w-80% border-gray-300  rounded-lg' type="text" />
           {errors.password && <div className='text-red-500 text-sm'>Please Enter your Password</div>}</div>
           

          <div className='repeatpassword mt-4.5'><p className='text-sm font-semibold'>Repeat Password</p><input {...register("resetPassword",{required:true,minLength: {value : 3,message : "Min length is 8"}})}  className='border py-0.5 px-1.5 lg:w-full w-80% border-gray-300  rounded-lg' type="text" />
          {errors.resetPassword && <div className='text-red-500 text-sm'>Please Enter password again</div>}</div>
          <div className=' mt-4 '>
            <div className='flex'>
            <input  {...register("Agree",{required:true})} className='cursor-pointer' type="checkbox" /> <p className='ml-1.5'>I agree with <span className='text-violet-600 cursor-pointer'>Terms & Conditions</span></p>
            </div>
            {errors.Agree && <div className='text-red-500 text-sm'>Please Agree terms & services</div>}
          </div>
          
          <button disabled = {isSubmitting}  className='w-full p-2 mt-4  rounded-lg  bg-slate-200 text-gray-700 font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Create Account</button>
          </form>
          <div className='flex justify-center items-center'>
            <span>Already have an account?  </span><span className='text-violet-600 ml-1 cursor-pointer'> Log in</span>
          </div>
      </div>
    </div>
  )
}

export default SignUp
