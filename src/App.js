import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './screens/home'
import Navbar from './components/nav'
import Footer from './components/footer'
import Newsevent from './screens/admin/newsEvent'
import Faculty from './screens/admin/facultyStaff'
// import Contact from './screens/contact'
// import Academics from './screens/academics'
// import About from './screens/about'
import Login from './screens/admin/adminLogin'
import Register from './screens/admin/register'
import Teacherlogin from './screens/teachers/teacherLogin'
import Teacherdash from './screens/teachers/teacherDashboard'
import Studentlogin from './screens/students/studentLogin'
import Studentdash from './screens/students/studenDashboard'
import Enrolledstudents from './screens/admin/enrollredStudents'
import ClassRecord from './screens/teachers/classRecord'
import Hymn from './screens/hymn'
import MissionVision from './screens/missionVision'
import Dashboard from './components/sidebar'
export default function App() {
  return (


    <div className='App'>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='about' element={<About/>}/>
        <Route path='academics' element={<Academics/>}/>
        <Route path='contact' element={<Contact/>}/> */}
        <Route path='login' element={<Login />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/register' element={<Register />} />
        <Route path='/news' element={<Newsevent />} />
        <Route path='/teacherlogin' element={<Teacherlogin />} />
        <Route path='/teacherdashboard' element={<Teacherdash />} />
        <Route path='/studentlogin' element={<Studentlogin />} />
        <Route path='/studentdashboard' element={<Studentdash />} />
        <Route path='/studentdashboard' element={<Studentdash />} />
        <Route path='/record' element={<Enrolledstudents />} />
        <Route path='/classrecords' element={<ClassRecord />} />
        <Route path='/missionvision' element={<MissionVision />} />
        <Route path='/hiahymn' element={<Hymn />} />
        <Route path='dashboard/:accountID' element={<Dashboard />} />
      </Routes>

      <Footer />
    </div>

  )
}