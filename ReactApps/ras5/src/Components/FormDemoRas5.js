import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm } from 'react-hook-form';
function FormDemoRas5() {

  let {
    register,
    handleSubmit,
    formState:{errors},
  }=useForm()

  let submitForm=(userObj)=>{
    //make HTPP POST request to store userObj in local API
  fetch("http://localhost:4000/users",{
    method:"POST",
    headers:{
      "content-Type":"application/json",
    },
    body:JSON.stringify(userObj),
  })
  .then((res)=>res.json())
  .then((message)=>console.log(message))
  .catch((err)=>console.log("err is",err));
  };

  return (
    <div className="container">
    
            <h1 className="text-primary display-2 mt-4 mb-4">User Registration</h1>
      <h1 className="text-success display-2 mt-4 mb-4">Form</h1>
      <div className="row">
        <div className="col-11 col-sm-8 col-md-6 mx-auto">
       <form onSubmit={handleSubmit(submitForm)}>
        <input 
        type="text" 
        id='username'
        className='form-control mb-3'
        placeholder='Username'
        {...register('username',{required:true,minLength:"4",maxLength:"8"})}
        />
        {/* {username validations error msgs } */}
        
        {errors.username?.type=="required" && <p className='text-danger'>*Username is required</p>}
        {errors.username?.type=="minLength" && <p className='text-danger'>*Min Length is 4</p>} 
        {errors.username?.type=="maxLength" && <p className='text-danger'>*Max Length is 8</p>} 
          <input 
        type="date" 
        className='form-control mb-3'
        {...register('dateOfBirth',{required:true})}
        />
                {errors.dateOfBirth?.type=="required" && <p className='text-danger'>*DOB is required</p>}
            <input 
        type="text"
        className='form-control mb-3'
        placeholder='City'
        {...register('city',{required:true})}
         
        />
                {errors.city?.type=="required" && <p className='text-danger'>*City is required</p>}
        <button type="submit" className="btn btn-success mb-5">Add User</button>
      </form>
    </div>
    </div>
    </div>


    
  )
}

export default FormDemoRas5