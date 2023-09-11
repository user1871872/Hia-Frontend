import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios';

export default function StudenDashboard() {

  const [view, setView] = useState();

  useEffect(() => {
    getData();
  },[]);

  const getData = async (response) => {
   try {
    const { data } = await axios.get('http://localhost:8080/articles')
    setView(data)
    console.log(data)
   } catch (error) {
    console.log(error)
   }
  }

  return (
    <div className='pt-[100px]'>
      <div className='p-6 m-10 text-xl font-sans'>
       <p className='text-3xl font-bold font-sans flex'> test 123</p>
        {view && view.map((articles) => {
          return (
            <div className=' rounded shadow-md mt-10 items-center text-left w-[75%] mx-auto gap-10 justify-between sm:flex flex-col md:flex-row p-5' key={articles.id}>
              <p>{articles.description}</p>
              <img className='bg-contain bg-center h-[25ch] rounded-md w-[25ch]' src={articles.image} alt='img' /> {/* style={{ height: "25ch", objectFit: "contain", objectPosition: "center" }} */}
            </div>
          )
        })}
      </div>
    </div>
  )
}
