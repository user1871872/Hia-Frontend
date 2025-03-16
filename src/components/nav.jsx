import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

export default function Nav() {
  const [nav, setNav] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if the token exists in local storage
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/logout');
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleClickAbout = () => {
    const element = document.getElementById('history');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickAcademics = () => {
    const element = document.getElementById('academics');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickLogin = () => {
    const element = document.getElementById('adminLogin');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleClickContactUs = () => {
    const element = document.getElementById('contactUS');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='items-center sm:flex-wrap fixed w-[100%] z-10 top-0'>
      <header className='flex justify-between bg-yellow-500 text-white p-5 text-lg items-center'>
        <div className='flex items-center'>
          <Link to='/'><span className='sm:text-3xl font-bold' onClick={scrollToTop}>HOLY INFANT ACADEMY</span></Link>
          <img className='w-12 rounded-full' src='/HIALogo.jpg' alt='' />
        </div>

        <ul className='flex space-x-5 items-center'>
          <Link to='/'><li className='hover:underline md:flex hidden cursor-pointer' onClick={scrollToTop}>Home</li></Link>
          <li className='hover:underline cursor-pointer md:flex hidden' onClick={handleClickAbout}>About</li>
          <li className='hover:underline md:flex hidden cursor-pointer' onClick={handleClickAcademics}>Academics</li>
          {isLoggedIn ? (
            <li className='hover:underline md:flex hidden cursor-pointer' onClick={handleLogout}>Logout</li>
          ) : (
            <Link to='/login'><li className='hover:underline md:flex hidden cursor-pointer' onClick={handleClickLogin}>Login</li></Link>
          )}
          <li className='bg-black rounded-md py-2 p-2 hover:underline md:flex hidden cursor-pointer' onClick={handleClickContactUs}>Contact Us</li>
        </ul>
        {/* mobile nav */}
        <div onClick={handleNav} className="block md:hidden m-auto">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>

        <div className={nav ? "fixed left-0 top-[85px] w-[72%] h-full bg-yellow-500 ease-in-out duration-500" : "fixed left-[-100%]"}>
          <header className='text-white mt-5 mx-10'>
            <ul className='flex flex-col mt-5 gap-5 text-sm'>
              <Link to='/'><li className='underline'>Home</li></Link>
              <li id='about' className='underline' onClick={handleClickAbout}>About</li>
              <Link to='/academics'><li className='underline' onClick={handleClickAcademics}>Academics</li></Link>
              {isLoggedIn ? (
                <li className='underline' onClick={handleLogout}>Logout</li>
              ) : (
                <Link to='/login'><li className='underline' onClick={handleClickLogin}>Login</li></Link>
              )}
              <li className='underline' onClick={handleClickContactUs}>Contact Us</li>
            </ul>
          </header>
        </div>
      </header>
    </div>
  );
}
