import React, { useContext } from 'react'
import StoreData from './Store'
import { Link, useNavigate } from 'react-router-dom'
function Student() {
  const ContextData = useContext(StoreData)
  const Navi=useNavigate()
  console.log(ContextData)
  return (
    <>
    <h1>Student Data</h1>
    <button  id="mainbtn" onClick={()=> Navi('/addnewstudent')}>Add New Student</button>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Course</th>
          <th>Batch</th>
          <th>Change</th>
        </tr>
        <tbody>
        {ContextData.stuname.map((item, index) => {
          return (

            <tr key={index}>
              <td >{item.Name}</td>
              <td> {item.Age}</td>
              <td >{item.Course}</td>
              <td >{item.Batch}</td>
              <td><Link to='/editStudent' className='changelink' state={{data:index}}> Edit</Link></td>
            </tr>
          )
        })}
        </tbody>
      </table>
      
    </>
  )
}

export default Student