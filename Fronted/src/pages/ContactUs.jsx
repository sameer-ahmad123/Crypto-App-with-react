import React from 'react'

const ContactUs = () => {
  return (
    <div className="h-auto lg:w-[70vw]  m-auto  mt-5 ">
      <div className="upper lg:h-[75%] h-auto  w-full flex flex-col lg:flex-row rounded-2xl overflow-hidden ">
        <div className="left lg:w-[40%] w-full lg:h-full h-[45%]  p-6">
          <div className="icon">
            <span class="material-symbols-outlined text-violet-600">
              mail
            </span>
          </div>
          <div className='text-2xl !font-extrabold'>
            Contact Us
          </div>
          <div className='text-gray-600'>
            Have a question or just want to know more? Feel free to reach out to us.
          </div>
        </div>
        <div className="right lg:w-[60%] w-full lg:h-full h-[45%] p-5 bg-white rounded-2xl">
          <div className='text-sm'>You will receive response within 24 hours of time of submit.</div>
          <div className="name grid xl:grid-cols-2 grid-cols-1 mt-2.5">
            <div className='name'><p className='text-sm'>Name</p><input className='border border-gray-300 px-2 py-1.5 rounded-2xl' type="text" /></div>
            <div className='surname'><p className='text-sm'>Surname</p><input className='border border-gray-300 px-2 py-1.5 rounded-2xl' type="text" /></div>
          </div>

          <div className='email w-full '><p className='text-sm'>Email</p><input className='border w-full border-gray-300  py-1.5 rounded-2xl' type="text" /></div>



          <div className='message w-full'>
            {/* Added a tiny bit of margin-bottom (mb-1) to separate the label from the box */}
            <p className='text-sm  mb-1'>Message</p>

            {/* Swapped input for textarea! */}
            <textarea
              placeholder='Your Message'
              rows="3"
              className='border border-gray-300 w-full p-4 rounded-2xl resize-none outline-none'
            />
          </div>
          <p>I agree with <span className='text-violet-600'>Terms & Conditions</span></p>
          <button className='w-full h-8 bg-black/20 hover:bg-black/25 hover:cursor-pointer rounded-2xl text-gray-600 font-semibold mt-1.5'>Send a message</button>
          <button className='w-full h-8 bg-black/10 hover:bg-black/15 hover:cursor-pointer rounded-2xl font-semibold mt-1.5'>Book a meeting</button>

        </div>
      </div>
      <div className="lower lg:h-[25%] h-auto w-full flex flex-col lg:flex-row mt-3.5">
        <div className="left lg:w-[40%] lg:h-full w-full h-[45%]  p-6">
          <div className="icon">
            <span class="material-symbols-outlined text-violet-600">
              chat
            </span>
          </div>
          <div className='text-2xl !font-extrabold'>
            Live Chat
          </div>
          <div className='text-gray-600'>
            Don’t have time to wait for the answer? Chat with us now.
          </div>
        </div>
        <div className="right p-5 lg:w-[60%] lg:h-full w-full h-[45%] rounded-2xl mt-6 flex justify-center overflow-hidden items-start flex-col bg-violet-600 relative">
          <img className='absolute z-0 w-full h-full object-cover' src="/Visual.png" alt="Promo Visual" />
          <button className='relative z-10 ml-5 flex justify-center items-center px-4 py-1.5 bg-white text-black hover:cursor-pointer transition-all duration-200 hover:scale-105 rounded-2xl text-sm'>Chat Bot</button>
          <div className='relative z-10 mt-2 ml-5 text-white text-sm pr-4'>Chat with us now!</div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs