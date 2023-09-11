import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import ClipLoader from "react-spinners/ClipLoader";

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const navigate = useNavigate()
    const [loading, setLoading] = useState()

    const handSubmit = (e) => {
        setLoading(true)
        e.preventDefault()
        try {
            axios.post('http://localhost:8080/admin', { username, password })
                .then(result => {
                    console.log(result)
                    if (result.data === "Success") {
                        navigate('/dashboard/:accountID',{state: {id: username}})
                        setLoading(false)
                    }
                })
        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    return (
        <div className='pt-[150px] pb-[60px] justify-center flex w-[350px] mx-auto'>
            <form onSubmit={handSubmit} className='bg-yellow-500 text-black border rounded-md shadow-sm p-10 flex flex-col'>
                <img className='w-[30%] mx-auto' src='./icons/admin1.png' alt='' />
                <h1 className='text-2xl text-center'>Administration</h1>
                <label htmlFor='name'>Username:</label>
                <input className='hover:border-red-500  p-3 rounded-md mx-auto' type='text' name='name' autoComplete='off' required placeholder='HIA - your name'
                    onChange={(e) => { setUsername(e.target.value) }}
                />
                <label htmlFor='password'>Password:</label>
                <input className='p-3 rounded-md mx-auto' type='password' name='password' required placeholder='Enter your password'
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                {loading
                    ?
                    <ClipLoader
                        color={"#fbf204"}
                        loading={loading}
                        size={50}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                        className='mx-auto pt-1'
                    />
                    :
                    <button className='mt-5 border rounded-md bg-green-500 mx-auto p-2' type='submit'>Login</button>
                }
                <Link to='/register'><button className='flex mx-auto underline text-blue-600 mt-1'>Register</button></Link>
                <Link to='/teacherlogin'><button className='underline text-blue-600 flex mx-auto'>Teacher Login</button></Link>
                <Link to='/studentlogin'><button className='underline text-blue-600 flex mx-auto'>Student Login</button></Link>
            </form>
        </div>
    )
}

export default Login