import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import ClipLoader from "react-spinners/ClipLoader";

export default function Employee() {

    const [view, setView] = useState([])
    const [loading ,setLoading] =useState()

    useEffect (()  => {
         getDatas();
    },[]);

    const getDatas = async (response) => {
        setLoading(true)
                try {
                    const { data } = await axios.get('http://localhost:8080/faculty')
                    setView(data)
                    setLoading(false)
                } catch (error) {
                    console.log(error)
                    setLoading(false)
                }
            }

    return (
        <div className='m-10 max-w-screen-xl mx-auto'>
         <p className='text-3xl font-bold font-sans p-6'> Teacher's & Staff's</p>
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
             <div className=' text-xl font-sans m-10 flex flex-wrap justify-center gap-10 text-center'>
                {view && view.map((teacher) => {
                    return (
                        <div  key={teacher._id} className='text-white border shadow-md bg-black hover:text-black rounded-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-yellow-400 duration-300'>
                            <img src={teacher.image} style={{ height: "25ch", objectFit: "contain", objectPosition: "center" }} alt='img' />
                            <p>{teacher.role}</p>
                            <p>{teacher.name}</p>
                            <p>{teacher.major}</p>
                            <p>{teacher.description}</p>
                            </div>
                   
                    )
                })}
            </div>
             
             }
        </div>
    )
}
