import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function Enrolledstudents() {
    const [record, setRecord] = useState('')
    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [age, setAge] = useState('')
    const [address, setAddress] = useState('')
    const [birthdate, setBirthdate] = useState('')
    const [mother, setMother] = useState('')
    const [occupation, setOccupation] = useState('')
    const [father, setFather] = useState('')
    const [guardian, setGuardian] = useState('')
    const [emergencyNumber, setemergencyNumber] = useState()

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

    useEffect(() => {
        axios.get('http://localhost:8080/records').then((response) => {
            setRecord(response.data)
        })
    }, []);

    const addRecords = async (event) => {
        event.preventDefault()
        let url = ""
        if (image) {
            url = await uploadImg(image)
        } else {
            url = null
        }
        await axios.post('http://localhost:8080/records/add', {
            image: url,
            firstname,
            lastname,
            age,
            birthdate,
            address,
            mother,
            father,
            occupation,
            guardian,
            emergencyNumber
        },).then((res) => {
            setRecord([...record, res.data])
        });
        toast.success('Uploaded Successfuly!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    }
    const HandleClickDelete = (record) => {
        console.log(record)

        axios.post('http://localhost:8080/records/delete', { id: record._id })
            .then((response) => {
                console.log(response.data);
            })
        toast.error('Deleted Successfull', {
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
        <div className='pt-[100px]'>
        <h1 className='text-center font-bold text-3xl font-sans'>Student Records</h1>
            <form name='form' className="border rounded-md shadow-md max-w-[580px] mx-auto mt-10">
                <div className="flex flex-col">
                    <input className="border h-14" type="text" placeholder="Enter First name" onChange={(event) => { setFirstname(event.target.value) }} />
                    <input className="border h-14" type="text" placeholder="Enter Last name" onChange={(event) => { setLastname(event.target.value) }} />
                    <input className="border h-14" type="text" placeholder="Enter age" onChange={(event) => { setAge(event.target.value) }} />
                    <input className="border h-14" type="date" onChange={(event) => { setBirthdate(event.target.value) }} />
                    <input className="border h-14" type="text" placeholder="Enter Address" onChange={(event) => { setAddress(event.target.value) }} />
                    <input className="border h-14" type="text" placeholder="Enter mother's name" onChange={(event) => { setMother(event.target.value) }} />
                    <label>{occupation} </label>
                    <input className="border h-14" type="text" placeholder="Enter occupation" onChange={(event) => setOccupation(event.target.value)} />
                    <input className="border h-14" type="text" placeholder="Enter father's name" onChange={(event) => { setFather(event.target.value) }} />
                    <label>{occupation} </label>
                    <input className="border h-14" type="text" placeholder="Enter occupation" onChange={(event) => setOccupation(event.target.value)} />
                    <input className="border h-14" type="text" placeholder="Enter Guardian's name" onChange={(event) => { setGuardian(event.target.value) }} />
                    <input className="border h-14" type="text" placeholder="Enter emergency number" onChange={(event) => { setemergencyNumber(event.target.value) }} />
                    <input type="file" onChange={validateImg} />
                    <label htmlFor='img' className='fileUpload'>
                        <img className="mx-auto" src={imagePreview || ""} alt="" width='100px' height='100px' />
                    </label>

                    <button id='btn' className="border w-20 rounded-md bg-blue-600 p-2 ml-auto" onClick={addRecords}>Post</button>
                </div>
            </form>

            <div className='container'>
                {record && record.map((record) => {
                    return (
                        <div key={record._id} className='flex flex-col justify-center items-center'>
                            <table className='border items-center'>
                                <tr className='border'>
                                    <img className='w-[25ch] rounded-full' src={record.image} alt='' />
                                    <td>
                                        First Name:
                                        <p>{record.firstname}</p>
                                    </td>
                                    <td>
                                        Last Name:
                                        <p>{record.lastname}</p>
                                    </td>
                                    <td>
                                        Age:
                                        <p>{record.age}</p>
                                    </td>
                                    <td>
                                        Birthdate:
                                        <p>{record.birthdate}</p>
                                    </td>
                                    <td>
                                        Address:
                                        <p>{record.address}</p>
                                    </td>
                                    <td>
                                        Mother:
                                        <p>{record.mother}</p>
                                    </td>
                                    <td>
                                        Occupation:
                                        <p>{record.occupation}</p>
                                    </td>
                                    <td>
                                        Father:
                                        <p>{record.father}</p>
                                    </td>
                                    <td>
                                        Occupation:
                                        <p>{record.occupation}</p>
                                    </td>
                                    <td>
                                        Guardian:
                                        <p>{record.guardian}</p>
                                    </td>
                                    <td>
                                        Emergency Contact:
                                        <p>{record.emergencyNumber}</p>
                                    </td>
                                    <td>
                                    <button className="bg-green-500 rounded-md p-2 gap-2">Update</button>
                                        <button className="bg-red-500 rounded-md p-2 gap-2" id='btn' onClick={() => HandleClickDelete(record)}>delete</button>
                                    </td>
                                </tr>
                            </table>
                        </div>
                    )
                })}
            </div>
            <ToastContainer />
        </div>
    )
}

