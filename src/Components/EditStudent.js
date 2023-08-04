import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import StoreData from './Store';

const EditStudent = () => {
  const ContextData=useContext(StoreData);
  console.log(ContextData)

const Navi=useNavigate();

const IndexValue= useLocation().state.data; 
console.log(IndexValue)

const updateObj={
  Name: ContextData.stuname[IndexValue].Name,
  Age: ContextData.stuname[IndexValue].Age,
  Course:ContextData.stuname[IndexValue].Course ,
  Batch:ContextData.stuname[IndexValue].Batch 
}

const handleChange=(event)=>{
   updateObj[event.target.name]=event.target.value; 
}
const handleClick=()=>{
  ContextData.stuname[IndexValue]=updateObj;
  Navi('/student')
}


  return (
    <>

    <h1>Edit Student</h1> 
    {/* <form>
    <label htmlFor='name'>Name</label>
      <input type='text' id='name' placeholder={ContextData.stuname[IndexValue].Name} name="Name"onChange={handleChange} ></input>
      <label htmlFor='age'>Age</label>
      <input type='text' id='age' placeholder={ContextData.stuname[IndexValue].Age} name="Age" onChange={handleChange} ></input>

      <label htmlFor='course'>Course</label>
      <input type='text' id='Course' placeholder={ContextData.stuname[IndexValue].Course} name="Course" onChange={handleChange} ></input>

      <label htmlFor='batch'>Batch</label>
      <input type='text' id='Batch' placeholder={ContextData.stuname[IndexValue].Batch} name="Batch" onChange={handleChange} ></input>

      <button type='button' onClick={handleClick}>Update</button> 
      <button type='button' onClick={()=>Navi('/student')}>Cancel</button> 
      </form> */}
       <form className='formbox'>
     <div id='name1'>
      <label htmlFor='name'>Name</label>
      <input type='text' id='name'  placeholder={ContextData.stuname[IndexValue].Name} name='Name'onChange={handleChange} ></input>
      </div>
      <div id='age1'>
      <label htmlFor='age'>Age</label>
      <input type='text' id='age' placeholder={ContextData.stuname[IndexValue].Age} name='Age' onChange={handleChange} ></input>
      </div>
   <div id='Course1'>
      <label htmlFor='course'>Course</label>
      <input type='text' id='Course' placeholder={ContextData.stuname[IndexValue].Course} name='Course'onChange={handleChange} ></input>
      </div>
      <div id='Batch1' >
          <label htmlFor='batch'>Batch</label>
      <input type='text' id='Batch' placeholder={ContextData.stuname[IndexValue].Batch} name='Batch'onChange={handleChange} ></input>
      </div>
      </form>
      <button type='button' id='submitBtn' onClick={handleClick}>Update</button>
      <button type='button' id='CancelBtn' onClick={()=>Navi('/student')}>Cancel</button> 
    </>
  )
}

export default EditStudent
