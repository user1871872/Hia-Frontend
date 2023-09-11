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
        initial={{x: '-100vw' }}
        animate={{ x: 0}}
        transition={{ delay: 1, duration: 1.5 }}
        whileInView={{opacity: 1, x: 1 }}
        viewport={{ once: true }}
      >

        <img className='w-[380px]' src='HIALogo.jpg' alt='' />
        <p className='font-light mt-10'>

          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lorem elit, faucibus eget vestibulum imperdiet, finibus ac sapien. Praesent a est magna.
          Curabitur sapien nibh, eleifend ut nisi sed, hendrerit tempus mauris. Vivamus vulputate justo lorem, vel eleifend nibh iaculis ut. Integer commodo eros diam,
          et molestie metus sodales id. Sed faucibus consequat massa vel mollis. Donec condimentum purus pharetra ultrices tincidunt. Vivamus viverra, purus suscipit
          convallis venenatis, lacus magna posuere eros, at cursus risus leo sit amet sem. Morbi tincidunt ac metus vitae vestibulum. Proin vitae mauris sed odio auctor
          ultrices id a erat. Etiam tortor eros, fermentum id arcu vel, consectetur euismod lorem. Aliquam lacinia nunc ut sem consectetur, at blandit odio maximus. Nunc viverra cursus sollicitudin.
          Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nunc ac volutpat nibh.
          Curabitur ac cursus odio, ac facilisis lacus. Aliquam at euismod justo. Aenean in vestibulum nisi. Nam malesuada ut urna nec semper.
          Nunc enim est, fringilla et commodo eu, convallis eu ipsum. Aenean a velit magna. Curabitur erat diam, dapibus eu auctor eu, tristique sit amet nisl.
        </p>
      </motion.div>
    </div>
  )
}
