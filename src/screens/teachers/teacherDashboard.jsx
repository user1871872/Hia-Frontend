import React from 'react'
import { Link } from 'react-router-dom'

export default function teacherDashboard() {
  return (
    <div className='pt-[80px] flex flex-row'>
      <div className='w-[300px] h-[600px] flex flex-wrap bg-slate-950 text-white'>
        {/* <div className='container flex pt-5 items-center bg-yellow-400'>
          <p className=''>Arben Joseph M. Felisarta</p>
          <p className=''>Teacher</p>
          <img className='w-[80px] mt-2 rounded-full' src='orig.jpg' alt='' />
        </div> */}

        <button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Personal Info</button>
       <Link to='/classrecords'><button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Class Records</button></Link>
        <button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Students</button>
        <button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Schedule</button>
        <button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Class Records</button>
        <button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Example</button>
        <button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Example</button>
        <button className='rounded-sm border p-5 w-full hover:bg-yellow-400 duration-100 ease-linear cursor-pointer'>Example</button>

      </div>
    </div>
  )
}
