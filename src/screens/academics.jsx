import React from 'react'

export default function academics() {
  return (
    <div id='academics' className='max-w-screen-xl mx-auto uppercase pt-[90px] text-3xl font-bold m-auto'>
      <p className='flex sm:mx-auto'>academics</p>
      <div className='flex gap-5 text-lg mt-10 sm:flex flex-col md:flex-row'>
        <div className='shadow-md flex flex-wrap justify-center gap-5 border'>
          <img className='w-[300px] rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='https://res.cloudinary.com/dzdlxfeee/image/upload/v1693549648/qt3sibdezmnzuxjlvjkx.png' alt='' />
          <p className='font-light text-center'>STEM stands for Science, Technology, Engineering, and Mathematics strand. Through the STEM strand, senior high school students are exposed to complex mathematical and science theories and concepts which will serve as a foundation for their college courses.</p>
        </div>

        <div className='shadow-md flex flex-wrap justify-center gap-5 border'>
          <img className='w-[300px] rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110' src='https://res.cloudinary.com/dzdlxfeee/image/upload/v1693549650/pwdzrcvl15kgd1ffm4vd.png' alt='' />
          <p className='font-light text-center'>General Academic Strand caters students who are not yet sure of what course or degree they want to take in college. This strand was designed so that indecisive learners can proceed with any college program.</p>
        </div>

      </div>
    </div>
  )
}
