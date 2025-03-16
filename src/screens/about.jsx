import React from 'react'
import { motion } from 'framer-motion'



export default function about() {

  return (

    <div id='history' className='max-w-screen-xl mx-auto'>
      <motion.h1 className='text-3xl font-bold m-12 sm:flex text-center'
        initial={{ x: -250 }}
        animate={{ x: -10 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      >History</motion.h1>

      <motion.div id='history' className='m-10 items-center gap-10 sm:flex flex-row'
        initial={{ x: '-100vw' }}
        animate={{ x: 0 }}
        transition={{ delay: 1, duration: 1.5 }}
        whileInView={{ opacity: 1, x: 1 }}
        viewport={{ once: true }}
      >

        <img className='w-[380px]' src='HIALogo.jpg' alt='' />
        <p className='font-light mt-10'>
          Welcome to Holy Infant Academy of Anda Inc! , a premier private school dedicated to fostering academic excellence, character development, and lifelong learning. We offer a nurturing and challenging environment where students thrive intellectually, socially, and emotionally. Learn more about our rigorous curriculum, dedicated faculty, and vibrant community.

          As the only private school in Anda, Holy Infant Academy offers a unique educational experience rooted in our close-knit community. We integrate learning with local resources and opportunities, providing students with a distinct advantage and a strong sense of belonging. Our innovative approach to education fosters both academic excellence and a deep connection to our town.

          Holy Infant Academy is proud of its high-achieving students who consistently demonstrate exceptional academic performance, creativity, and leadership skills. Our students are actively involved in a wide range of extracurricular activities, enriching their learning experience and developing well-rounded personalities. Our dedicated faculty are passionate educators committed to fostering intellectual curiosity and personal growth in each student. They bring a wealth of experience and expertise to the classroom, creating a supportive and challenging learning environment that inspires students to reach their full potential.
        </p>
      </motion.div>
    </div>
  )
}
