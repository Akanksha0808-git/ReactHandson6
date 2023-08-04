import React, { useState } from 'react'
import { BrowserRouter, Routes, NavLink, Route } from 'react-router-dom';
import Home from './Home'
import Student from './Student'
import Contact from './Contact'
import AddNewStudent from './AddNewStudent';
import StoreData from './Store';
import EditStudent from './EditStudent';


const RouteFiles = () => {
  const [studentData, setStudentData] = useState([
    {
      Name: "Akanksha",
      Age: 21,
      Course: "MERN",
      Batch: "March",
      // Change: "Edit"
    },
    {
      Name: "Priyanka",
      Age: 20,
      Course: "MERN",
      Batch: "March",
      // Change: "Edit"
    },
    {
      Name: "Bhoomi",
      Age: 22,
      Course: "MERN",
      Batch: "March",
      // Change: "Edit"
    },
    {
      Name: "Shweta",
      Age: 20,
      Course: "MERN",
      Batch: "March"
      // Change: "Edit"
    },
    {
      Name: "Alima",
      Age: 23,
      Course: "MERN",
      Batch: "March"
      // Change: "Edit"
    },
    {
      Name: "Riya",
      Age: 21,
      Course: "MERN",
      Batch: "March",
      // Change: "Edit"
    },
    {
      Name: "Vipul",
      Age: 21,
      Course: "MERN",
      Batch: "March",
      // Change: "Edit"
    },
    {
      Name: "Sarthak",
      Age: 24,
      Course: "MERN",
      Batch: "March",
      // Change: "Edit"
    },
    {
      Name: "Kailash",
      Age: 23,
      Course: "MERN",
      Batch: "March",
      // Change: "Edit"
    }
  ])
  return (
    <>
      <BrowserRouter>
        <div id='navbar'>

          <NavLink style={({isActive})=>({color :isActive? "black":"white"})} to='/' className='link'>Home</NavLink>

          <NavLink style={({isActive})=>({color :isActive? "black":"white"})} to='/student' className='link'>Student</NavLink>
          <NavLink
            style={({isActive})=>({color :isActive? "black":"white"})} to='/contact' className='link'>Contact</NavLink>
        </div>

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/student' element={
          <StoreData.Provider value={{ stuname: studentData, updateStu: setStudentData }}>
            <Student />
          </StoreData.Provider>} />

          <Route path='/contact' element={<Contact />} />

          <Route path='/addnewstudent' element={
          <StoreData.Provider value={{ stuname: studentData, updateStu: setStudentData }}>
            <AddNewStudent />
          </StoreData.Provider>}></Route>
          
          <Route path='/editStudent' element={<StoreData.Provider value={{ stuname: studentData, updateStu: setStudentData }}>
            <EditStudent />
          </StoreData.Provider>}></Route>
        </Routes>
       
      </BrowserRouter>

    </>
  )
}
export default RouteFiles