import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'
import ClipLoader from "react-spinners/ClipLoader";

export default function News() {

  const [view, setView] = useState([]);
  const [visible, setVisible] = useState([3])
  const [loading, setLoading] = useState()

  useEffect(() => {
    getData();
  }, []);

  const getData = async (response) => {
    try {
      setLoading(true)
      const { data } = await axios.get('http://localhost:8080/articles')
      setView(data)
      setLoading(false)
      console.log(response.data)
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }
  const More = () => {
    if (More) {
      setVisible((showMore) => showMore + 3)
    } else {
      setVisible((showMore) => showMore - 3)
    }
  }

  return (

    <div className='max-w-screen-xl p-6 auto text-xl font-sans mx-auto'>
      <p className='text-3xl font-bold font-sans flex'> News & Events</p>

    {loading 
    ?
    <div className='flex justify-center pt-[300px] pb-[300px]'>
               <ClipLoader
                    color={"#fbf204"}
                    loading={loading}
                    size={150}
                    aria-label="Loading Spinner"
                    data-testid="loader"
                />
               </div>
     :
     <div>
{view && view.slice(0, visible).map((articles) => {
        return (
          <motion.div className='font-light rounded shadow-md mt-10 items-center text-left w-[75%] mx-auto gap-10 justify-between sm:flex flex-col md:flex-row p-5' key={articles.id}
            initial="hidden"
            animate={{ y: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            whileInView={{y: "1vw"}}
            viewport={{ once: true }}
          >
            <p>{articles.description}</p>
            <img className='bg-contain bg-center h-[25ch] rounded-md w-[30ch]' src={articles.image} alt='img' /> {/* style={{ height: "25ch", objectFit: "contain", objectPosition: "center" }} */}
          </motion.div>
        )

      })}
</div>
     }
      <button className='bg-yellow-400 rounded-sm p-3 w-full mt-5' onClick={More}>Show More</button>
    </div>
  )
}
