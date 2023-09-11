import { useState, useEffect } from "react";
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export default function Employee() {

  const [faculty, setFaculty] = useState([]);
  const [name, setName] = useState("");
  const [major, setMajor] = useState("");
  const [description, setDescription] = useState("");
  const [role, setRole] = useState("")
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
    axios.get('http://localhost:8080/faculty').then((response) => {
      setFaculty(response.data);
    })

  }, []);
  const addfaculty = async (event) => {
    event.preventDefault();
    let url = ""
    if (image) {
      url = await uploadImg(image)
    } else {
      url = null
    }
    await axios.post('http://localhost:8080/faculty/add', {
      image: url,
      role,
      name,
      major,
      description,
    },).then((res) => {
      setFaculty([...faculty, res.data])
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
  const HandleClickDelete = (faculty) => {
    console.log(faculty)

    axios.post('http://localhost:8080/faculty/delete', { id: faculty._id })
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

    <div className="group pt-[60px]">

      <form name='form' className="border rounded-md shadow-md max-w-[580px] mx-auto mt-10">
        <label>{role}</label>
        <select onChange={(event) => setRole(event.target.value)}>
          <option value='principal'>Principal</option>
          <option value='teacher' >Teacher</option>
          <option value='staff' >Staff</option>
        </select>
        <div className="flex flex-col">
          <input className="border h-14" type="text" placeholder="Enter name" onChange={(event) => { setName(event.target.value) }} />
          <input className="border h-14" type="text" placeholder="Major" onChange={(event) => { setMajor(event.target.value) }} />
          <input className="border h-14" type="text" placeholder="Description" onChange={(event) => { setDescription(event.target.value) }} />
          <input type="file" onChange={validateImg} />
          <label htmlFor='img' className='fileUpload'>
            <img className="mx-auto" src={imagePreview || ""} alt="" width='100px' height='100px' />
          </label>

          <button id='btn' className="border w-20 rounded-md bg-blue-600 p-2 ml-auto" onClick={addfaculty}>Post</button>
        </div>
      </form>

      <div className='flex flex-col max-w-screen-sm mx-auto items-center'>
        {faculty && faculty.map((faculty) => {
          return (
            <div key={faculty._id} class="flex flex-col p-5 ">

              <img src={faculty.image} style={{ width: "100%", height: "20ch", objectFit: "contain", objectPosition: "center" }} alt="" />
              {faculty.role}
              {faculty.name}
              {faculty.major}
              {faculty.description}
              <button className="bg-red-500 w-[14%] p-1 border rounded-md ml-auto" id='btn' onClick={() => HandleClickDelete(faculty)}>delete</button>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
  )
}
