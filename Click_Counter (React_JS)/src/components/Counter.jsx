import React, { useState } from 'react'
import "./Counter.css"
import wheel from "../assets/wheel.png"

const Counter = () => {
    const [count,setCount] = useState(0);
  return (
    <div className='container'>
        <div className='counter-container'>
            <p id="text">You Have clicked {count} times</p>
            <button id='btn' onClick={()=>{
                setCount(count+1)
            }}>Click Me!</button>
            <button id="btn" onClick={()=>{
                setCount(0)
            }} > Reset</button>
        </div>
    </div>
  )
}

export default Counter
