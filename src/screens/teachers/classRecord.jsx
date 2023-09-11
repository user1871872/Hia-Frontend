import React from 'react'
import axios from 'axios'
import { useState } from 'react';
export default function ClassRecord() {

    const [classrecord, setclassRecord] = useState([]);
    const [fullName, setfullName] = useState();
    const [subject, setSubject] = useState();
    const studentArray = [];

    async function handleclassrecord(){
        classrecord.map((student) => studentArray.push(student._id))

        const config = {
            Headers: {'Content-type': 'application/json'}
          }
          axios.post('http://localhost:8080/classrecords',{
            fullName,
            subject,
            item: JSON.stringify(studentArray)
          },config)
          setclassRecord([])
    }

  return (
    <div className='pt-[100px]'>
        <form className='border rounded-md shadow-md max-w-[580px] mx-auto mt-10'>
       <div className='flex flex-col'>
       <label htmlFor='name'>Full name</label>
        <input className='border p-2 rounded' type='text' name='name' autoComplete='off' placeholder='' onChange={(event) => {setfullName(event.target.value)}}/>
        <label htmlFor='name'>Subject</label>
        <input className='border p-2 rounded' type='text' name='subject' autoComplete='off' placeholder='' onChange={(event) => {setSubject(event.target.value)}}/>
       </div>
        </form>

        {classrecord.map((e) => (
          <div key={classrecord._id}>
                {e.firstname}
                {e.lastname}
            </div>
        ))}
        <button className='bg-slate-300 rounded-md p-2' onClick={() => handleclassrecord()}></button>
    </div>
  )
}
