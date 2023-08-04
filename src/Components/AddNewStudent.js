import React, { useContext } from 'react'
import StoreData from './Store';
import { useNavigate } from 'react-router-dom';
const AddNewStudent = () => {
  const ContextData = useContext(StoreData);
  console.log(ContextData)
  const Navi = useNavigate()
  const newStu = {
    Name: '',
    Age: '',
    Course: '',
    Batch: ''
  }
  const handleChange = (e) => {
    newStu[e.target.name] = e.target.value;
  }
  const handleClick = () => {
    ContextData.stuname.push(newStu);
    Navi('/student')
  }
  return (
    <div>
      <h1>
        New student
      </h1>
    <form className='formbox'>
     <div id='name1'>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name'  placeholder='Enter Name' name='Name'onChange={handleChange} ></input>
      </div>
      <div id='age1'>
      <label htmlFor='age'>Age</label>
      <input type='text' id='age' placeholder='Enter Age' name='Age' onChange={handleChange} ></input>
      </div>
   <div id='Course1'>
      <label htmlFor='course'>Course</label>
      <input type='text' id='Course' placeholder='Enter Course' name='Course'onChange={handleChange} ></input>
      </div>
      <div id='Batch1' >
          <label htmlFor='batch'>Batch</label>
      <input type='text' id='Batch' placeholder='Enter Batch' name='Batch'onChange={handleChange} ></input>
      </div>
</form>
      <button type='button' id='submitBtn' onClick={handleClick}>Submit</button>
      <button type='button' id='CancelBtn' onClick={()=>Navi('/student')}>Cancel</button> 
      

    </div>
  )
}

export default AddNewStudent
