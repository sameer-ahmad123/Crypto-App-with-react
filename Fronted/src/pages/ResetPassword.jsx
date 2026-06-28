import React from 'react'
import { useForm } from 'react-hook-form'

const ResetPassword = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  return (
    <div className='w-screen h-screen flex justify-center items-center'>
      <form action={""} onSubmit={handleSubmit(onSubmit)}>

        <div className="box w-96 h-auto shadow-[0_0_15px_rgba(0,0,0,0.1)] rounded-2xl p-6  m-auto">
          <div className='text-2xl'>Reset</div>
          <div className='text-sm text-gray-500 mt-3'>Enter your new password</div>
          <div className='password mt-4.5'><p className='text-sm font-semibold'>New Password</p><input {...register("password", { required: true, minLength: { value: 3, message: "Min length is 8" } })} className='border py-0.5 px-1.5 w-full  border-gray-300  rounded-lg' type="text" />
            {errors.password && <div className='text-red-500 text-sm'>Please Enter your new Password</div>}</div>
          <div className='newpassword mt-4.5'><p className='text-sm font-semibold'>Reset Password</p><input {...register("resetPassword", { required: true, minLength: { value: 3, message: "Min length is 8" } })} className='border py-0.5 px-1.5 w-full  border-gray-300  rounded-lg' type="text" />
            {errors.resetPassword && <div className='text-red-500 text-sm'>Please Enter your Password again</div>}</div>
          <button className='w-full p-2 mt-4  rounded-lg  bg-black/5 text-gray-600 font-semibold hover:scale-102 cursor-pointer transition-all duration-300'>Reset Password</button>

        </div>
          </form>
    </div>
  )
}

export default ResetPassword
