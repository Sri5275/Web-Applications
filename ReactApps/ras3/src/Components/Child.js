
import React from 'react'
import { useState } from 'react'
import './Ras3.css'
function Child(props) {

  let [vari,setA]=useState(props.data)

  let increment=()=>{
 setA(vari+1)
  }
  let decrement=()=>{
    setA(vari-1)
     }

return (
  <div>
    <div class='parent'>
      <h3>Parent</h3>
  <h3> {vari}</h3>
  </div>
   
    <button className="one" onClick={increment}>Increment</button>
    <button className="two"onClick={decrement}>Decrement</button>
  
  </div>
)
}

export default Child;