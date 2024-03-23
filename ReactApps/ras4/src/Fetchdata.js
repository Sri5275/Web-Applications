import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function Fetchdata(props) {
    let [todos,setTodos]=useState([])
useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(todosData=>setTodos(todosData))
    .catch(err=>console.log("err is ",err))
},[]);
  return (
    <div className="container">

    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
       {
      todos.map((todoObj)=><div className="col" key={todoObj.id}>
        <div className="card card-body text-primary one">
        <h2>{todoObj.id}</h2>
        <h3>{todoObj.userId}</h3>
    
        <h3>{todoObj.name}</h3>
        <h3>{todoObj.email}</h3>
        <h3>{todoObj.address.street}</h3>
        <h3>{todoObj.address.suite}</h3>
        <h3>{todoObj.address.city}</h3>
        <button onClick={props.data}> ADD</button>
        {/* <h3>{todoObj.address.zipcode}</h3>
        <h3>{todoObj.address.geo.lat}</h3>
        <h3>{todoObj.address.geo.lng}</h3> */}
        {/* <h3>{todoObj.phone}</h3>
        <h3>{todoObj.website}</h3> */}
        {/* <h3>{todoObj.company}</h3> */}
        </div>
         </div>)
       }

    </div>
    </div>
  )
}

export default Fetchdata