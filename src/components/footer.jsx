import React from 'react'
import { Link } from 'react-router-dom'
import { BsFillArrowUpCircleFill } from 'react-icons/bs'

export default function footer() {

  const scrolltoTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  return (
    <div className='bg-yellow-500 text-white items-center'>
      <div className='p-10 flex flex-wrap justify-between  mx-10'>

        <div className='justify-items-cente justify-items-center text-center text-lg'>
          <img className='w-36 h-40 rounded-md' src='https://res.cloudinary.com/dzdlxfeee/image/upload/v1692798372/dbp8ppsofkd73cigmbr0.jpg' alt='' />
          <p>Ella Mae Felisarta</p>
          <p>Director</p>
        </div>

        <div className='flex flex-col gap-5'>
          <p className='text-4xl font-bold'>Quick Links</p>
          <Link to='/'><p onClick={() => scrolltoTop()} className='hover:underline text-white'>Home</p></Link>
          <Link to='missionvision'><p className='hover:underline text-white'>Mission & Vision</p></Link>
          <Link to='academics'><p className='hover:underline text-white'>Academics</p></Link>
          <Link to='Hiahymn'><p className='hover:underline text-white'>Hia Hymm</p></Link>
          <p className='hover:underline text-white'>Terms & Conditions</p>
        </div>


        <div className='container w-[4%] mr-52 flex flex-col gap-5'>

          <p className='text-center text-4xl font-bold'>SocialLinks</p>

          <div className='flex items-center gap-1'>

            <img src='./icons/facebook.png' alt='' />
            <a className='hover:text-blue-700 hover:underline' href='https://web.facebook.com/HIAAnda63'>https://web.facebook.com/HIAAnda63</a>
          </div>
          <div className=' flex items-center gap-1'>
            <img src='./icons/instagram.png' alt='' />
            <p>facebook.com/holyinfantacademy</p>
          </div>
          <div className='flex items-center gap-1'>
            <img src='./icons/tik-tok.png' alt='' />
            <p>facebook.com/holyinfantacademy</p>
          </div>
          <div className='flex items-center gap-1'>
            <img src='./icons/twitter.png' alt='' />
            <p>facebook.com/holyinfantacademy</p>
          </div>
        </div>

        <div id='contactUS' className='flex flex-col text-sm items-center gap-5'>
          <p className='font-bold text-4xl'>Contact US</p>
          <p> HOLY INFANT ACADEMY</p>
          <p > Poblacion street purok 3 Anda 6311</p>
          <p >Anda,Bohol,Philippines</p>
          <p>Telephone #</p>
          <p>87612312344</p>
          <p>Mobile #</p>
          <p>09182784728</p>
        </div>

        {/* <div className='w-36'>
          <img src='./icons/Hia.png' alt='' />
        </div> */}

      </div>


      <div className='bg-black p-10 m-auto text-center flex  justify-between items-center'>
        <div className='container'>
          <p>@HOLY INFANT ACADEMY</p>
          <p>Anda,Bohol,Philippines</p>
        </div>
        <BsFillArrowUpCircleFill className='hover:scale-[1.1] ease-in delay-100 hover:bg-yellow-500 rounded-full' size={50} onClick={scrolltoTop} />
      </div>
    </div>
  )
}
