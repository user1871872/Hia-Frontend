import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link} from 'react-router-dom'

export default function Sidebar() {
    const [view, setView] = useState()

    const getData = async (response) => {
        try {

            const { data } = await axios.get(`http://localhost:8080/account`)
            .then((response) => {
                    setView(response.data);
                    console.log(view)
            })
            setView(data)

            console.log(response.data)
        } catch (error) {
            console.log(error)

        }
    }
    useEffect(() => {
        getData()
    })
    return (
        <section className='flex gap-6'>
            <div className='bg-black min-h-screen w-72 text-white'>
                <div className='py-3 flex justify-end'>

                </div>
                <div className='mt-4 flex flex-col gap-1 relative pt-[50px]'>
                    <h1 className='text-white text-2xl text-center'>Admin Dashboard</h1>
                    <Link to='/news'><p className='border hover:bg-yellow-500 p-5'>News & Events</p></Link>
                    <Link to='/faculty'><p className='border hover:bg-yellow-500 p-5'>Teaching Staff's</p></Link>
                    <Link to='/record'><p className='border hover:bg-yellow-500 p-5'>Student Records</p></Link>
                </div>
            </div>
        </section>
    )
}
