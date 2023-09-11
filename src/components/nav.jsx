import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import {Link} from 'react-scroll'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
export default function Nav() {

  const [nav, setNav] = useState("navBar");

  const HandleNav = () => {
    setNav(!nav)
  };

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // const handleClickHome = () => {
  //   const element  = document.getElementById("home");
  //   if(element){
  //     element.scrollIntoView({behavior: "smooth"})
  //   }
  // }
  const handleClickAbout = () => {
    const element = document.getElementById("history");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleClickAcademics = () => {
    const element = document.getElementById("academics");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleClickLogin = () => {
    const element = document.getElementById("adminLogin")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }
  const handleClickContactUs = () => {
    const element = document.getElementById("contactUS")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className='items-center sm:flex-wrap fixed w-[100%] z-10 top-0'>
      <header className='flex justify-between bg-yellow-500 text-white p-5 text-lg items-center'>
        <div className='flex items-center'
          initial={{ x: -500 }}
          animate={{ x: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          <Link to='/'><span className='sm:text-3xl font-bold' onClick={() => scrolltoTop()}>HOLY INFANT ACADEMY</span></Link>
          <img className='w-12 rounded-full' src='/HIALogo.jpg' alt='' />
        </div>

        <ul className='flex space-x-5 items-center'>
          <Link to='/'><li className='hover:underline md:flex hidden cursor-pointer' onClick={scrolltoTop}>Home</li></Link>
          <li className='hover:underline cursor-pointer md:flex hidden' onClick={handleClickAbout}>About</li>
          <li className='hover:underline md:flex hidden cursor-pointer' onClick={handleClickAcademics}>Academics</li>
          <Link to='login'><li className='hover:underline md:flex hidden cursor-pointer' onClick={handleClickLogin}>Login</li></Link>
          <li className='bg-black rounded-md py-2 p-2 hover:underline md:flex hidden cursor-pointer' onClick={handleClickContactUs}>Contact Us</li>
        </ul>
        {/* mobile nav */}
        <div onClick={HandleNav} className="block md:hidden m-auto">
          {!nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className={!nav ? "fixed left-0 top-[85px] w-[72%] h-full bg-yellow-500 ease-in-out duration-500" : "fixed left-[-100%]"}>
          <header className='text-white mt-5 mx-10'>

            {/* <div className='flex items-center'>
              <span className='text-sm'>HOLY INFANT ACADEMY</span>
              <img className='w-12 rounded-full' src='/HIALogo.jpg' alt='' />
            </div> */}

            <ul className='flex flex-col mt-5 gap-5 text-sm'>
              <Link to='/'><li className='underline'>Home</li></Link>
              <li id='about' className='underline'>About</li>
              <Link to='/academics'><li className='underline'>Academics</li></Link>
              <Link to='/login'><li className='underline'>Login</li></Link>
              <Link to='contact'><li className='underline'>Contact Us</li></Link>
            </ul>
          </header>
          {/* <li className="p-4 border-b border-gray-600">
            <div onClick={HandleNav}>
              <AiOutlineClose size={20} className="bg-gradient-to-t from-red-800 to-blue-800 text-black rounded" />
              <p className="mx auto">CLOSE</p>
            </div>
          </li> */}
        </div>

      </header>
    </div>
  )
}
