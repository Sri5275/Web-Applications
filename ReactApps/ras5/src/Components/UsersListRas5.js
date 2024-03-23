import React, { useState } from 'react'
import { useEffect } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

function UsersListRas5(props) {
    let [todos,setTodos]=useState([])
useEffect(()=>{
    fetch("http://localhost:4000/users")
    .then(res=>res.json())
    .then(todosData=>setTodos(todosData))
    .catch(err=>console.log("err is ",err))
},[]);
  return (
    <div className="container">
        <h1 className="text-success display-2 mt-4 mb-4">List Of Users</h1>
     <table className="table table-bordered table-dark">
        <thead>
            <tr>
          
                <th>Username</th>
                <th>DateOfBirth</th>
                <th>City</th>
          
            </tr>
        </thead>
        <tbody>
            {todos.map((obj,index)=>(
               <tr key={index}>
               <td>{obj.username}</td>
                <td>{obj.dateOfBirth}</td>
                <td>{obj.city}</td></tr>
            )
            )

            }
        </tbody>
     </table>
    </div>
  )
}

export default UsersListRas5