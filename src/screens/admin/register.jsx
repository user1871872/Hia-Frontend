import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Register() {

    const [name, setname] = useState()
    const [username, setUsername] = useState()
    const [idnumber, setidNumber] = useState()
    const [password, setPassword] = useState()

    const [imagePreview, setImagepreview] = useState(null)
    const [image, setImage] = useState("")

    const validateImg = (e) => {
        const file = e.target.files[0]
        setImage(file)
        setImagepreview(URL.createObjectURL(file))
    }
    const uploadImg = async () => {

        const data = new FormData()
        data.append('file', image)
        data.append("upload_preset", "upload");

        let res = await fetch("https://api.cloudinary.com/v1_1/dzdlxfeee/image/upload/",
            {
                method: 'POST',
                body: data
            })

        const urlData = await res.json()
        return urlData.url
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let url = ""
        if (image) {
            url = await uploadImg(image)
        } else {
            url = null
        }
        await axios.post('http://localhost:8080/register/signUp', { image: url,username, name, idnumber, password })
            .then(result => console.log(result))
            .catch(err => console.log(err))
        toast.success('Registered', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }
    return (
        <div className='pt-[200px] pb-[60px] justify-center flex'>
            <form onSubmit={handleSubmit} className='bg-blue-300 border rounded-md shadow-sm p-10 flex flex-col w-[25%] gap-1'>
                <h1 className='text-2xl text-center'>Register</h1>
                <label htmlFor='id'>ID:</label>
                <input className='w-[75%] p-3 rounded-md mx-auto' type='text' name='id' autoComplete='off' required placeholder='enter your Id number'
                    onChange={(event) => { setidNumber(event.target.value) }}
                />
                  <label htmlFor='name'>Name:</label>
                <input className='w-[75%] p-3 rounded-md mx-auto' type='text' name='name' autoComplete='off' required placeholder='HIA - your name'
                    onChange={(event) => { setname(event.target.value) }}
                />
                 <label htmlFor='id'>username:</label>
                <input className='w-[75%] p-3 rounded-md mx-auto' type='text' name='id' autoComplete='off' required placeholder='enter your Id number'
                    onChange={(event) => { setUsername(event.target.value) }}
                />
                <label htmlFor='password'>Password:</label>
                <input className='w-[75%] p-3 rounded-md mx-auto' type='password' name='password' required placeholder='Enter your password'
                    onChange={(event) => { setPassword(event.target.value) }}
                />
                <input type="file" onChange={validateImg} />
                <label htmlFor='img' className='fileUpload'>
                    <img className="mt-4 mx-auto" src={imagePreview || "HIALogo.jpg"} alt="" width='100px' height='100px' />
                </label>
                <button className='mt-5 border rounded-md bg-green-500 mx-auto p-2' type='submit'>Register</button>
            </form>
            <ToastContainer />
        </div>
    )
}

export default Register;