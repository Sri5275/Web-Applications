
import { useState } from 'react';
import './App.css';
import Fetchdata from './Fetchdata';
import './Styles.css'

function App() {
  let [Count,setCount]=useState(0)
  let changeA=()=>{
    setCount(Count+1)
  }
  return (
    <div className="App">
     <h1>Count:{Count}</h1>
<Fetchdata data={changeA}/>

    </div>
  );
}

export default App;
