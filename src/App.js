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
import Login from './screens/auth/login'
import Register from './screens/admin/register'
import Teacherdash from './screens/teachers/teacherDashboard'
import Studentdash from './screens/students/studenDashboard'
import Enrolledstudents from './screens/admin/enrollredStudents'
import ClassRecord from './screens/teachers/classRecord'
import Hymn from './screens/hymn'
import MissionVision from './screens/missionVision'
import Dashboard from './components/sidebar'
import Logout from './screens/auth/logout';
import ClassManagement from './screens/teachers/classRecord'
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
        <Route path="/logout" element={<Logout />} />
        <Route path='/faculty' element={<Faculty />} />
        <Route path='/register' element={<Register />} />
        <Route path='/news' element={<Newsevent />} />
        <Route path='/staff-dashboard' element={<Teacherdash />} />
        <Route path='/class-management' element={<ClassManagement />} />
        <Route path='/student-dashboard' element={<Studentdash />} />
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