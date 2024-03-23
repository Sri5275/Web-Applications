import React from 'react'
import './Child.css'
function Child(props) {
  return (
    <div>
        <div class="user">
           <img class="i" src={props.data.image} alt="Loading" width="350px"/>
           <h2 class="n">Name:{props.data.name}</h2>
           <h3 class="s">Salary:{props.data.Salary}</h3>
           <h4 class="y">Year Of Birth:{props.data.year}</h4>
        </div>
    </div>
  )
}

export default Child