import React from 'react'
import Child from './Child';
import './Ras3.css'
 
function Parent() {
    let a=100;
   
  return (
    <div >
    <div class="child">
       <Child data={a} />
       <h4>Child</h4>
       </div>
    </div>
  )
}

export default Parent