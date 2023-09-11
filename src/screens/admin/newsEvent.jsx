import { useState, useEffect } from "react";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom'
import Sidebar from "../../components/sidebar";


export default function App() {

  const [view, setView] = useState([]);
  const [description, setDescription] = useState("");

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
    axios.get('http://localhost:8080/articles').then((response) => {
      setView(response.data);
    })
  }, []);
  const HandeClickAdd = async (event) => {
    event.preventDefault();
    let url = ""
    if (image) {
      url = await uploadImg(image)
    } else {
      url = null
    }
    await axios.post('http://localhost:8080/articles/add', {
      image: url,
      description,
    },).then((res) => {
      setView([...view, res.data])
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
  const HandleClickDelete = (article) => {
    console.log(article)

    axios.post('http://localhost:8080/articles/delete', { id: article._id })
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
    <>
    <Sidebar/>
    <div className="justify-center mx-auto">
      <form className="h-[300px] p-10 border rounded-md shadow-md max-w-[580px] mx-auto mt-10">
        <div className="flex flex-col">
          <input className="border h-14" type="text" placeholder="What's on your mind?" onChange={(event) => { setDescription(event.target.value) }} />
          <input className="file:mr-4 file:py-2 file:px-4
          file:rounded-full file:border-0
          file:text-sm file:font-semibold
         file:bg-violet-50 file:text-violet-700
         hover:file:bg-violet-100" type="file" onChange={validateImg} />
          <label htmlFor='img' className='fileUpload'>
            <img className="mt-4 mx-auto" src={imagePreview || "HIALogo.jpg"} alt="" width='100px' height='100px' />
          </label>
          <button id='btn' className="p-2 w-[70px] ml-auto bg-blue-600 rounded-md" onClick={HandeClickAdd} >Post</button>

        </div>
      </form>
      {/* <Link to='/faculty'>add teacher/staff</Link>
      <Link to='/record'>add record</Link> */}

      <div className='container'>
        {view.map((article) => {
          return (
            <div key={article._id} className="p-6 mb-10 text-center ">
              {article.description}
              <img src={article.image} style={{ width: "100%", height: "20ch", objectFit: "contain", objectPosition: "center" }} alt="" />
              <button className="bg-green-500 rounded-md p-2 mr-auto gap-2">Edit</button>
              <button className="bg-red-500 rounded-md p-2 gap-2" id='btn' onClick={() => HandleClickDelete(article)}>delete</button>
            </div>
          );
        })}
      </div>
      <ToastContainer />
    </div>
    </>
  )

}