import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {

    const [name, setname] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()

    const handSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8080/admin', { name, password })
            .then(result => {
                console.log(result)
                if (result.data === "Success") {
                    navigate('/studentdashboard')
                }
            })
            
            .catch(err => console.log(err))
            toast.success('Loggin Sucessfull', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
    }
    
    return (
        <div className='pt-[150px] pb-[60px] justify-center flex'>
            <form onSubmit={handSubmit} className='bg-yellow-500 text-black border rounded-md shadow-sm p-10 flex flex-col w-[25%]'>
            <img className='w-[30%] mx-auto' src='./icons/admin1.png' alt=''/>
                <h1 className='text-2xl text-center'>Student</h1>
                <label htmlFor='name'>Username:</label>
                <input className='w-[75%] p-3 rounded-md mx-auto' type='text' name='name' autoComplete='off' required placeholder='HIA - your name'
                    onChange={(e) => { setname(e.target.value) }}
                />
                <label htmlFor='password'>Password:</label>
                <input className='w-[75%] p-3 rounded-md mx-auto' type='password' name='password' required placeholder='Enter your password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <button className='mt-5 border rounded-md bg-green-500 mx-auto p-2' type='submit'>Login</button>
             
                <ToastContainer/>
            </form>
        </div>
    )
}

export default Login