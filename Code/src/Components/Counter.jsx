import React from 'react'
import { useState } from 'react'

function Counter() {
    const [count ,setCount]=useState(0);
    function handleinincerement(){
        setCount(count+1)
    }
    function handleindecrement(){
        setCount(count-1)
        if(count<=0){
            setCount(count)
        }
    }
  return (
    <div>
      <h1>Count:{count}</h1>
      <div className='Button'>
        <button onClick={handleinincerement}>Increase</button>
        <button onClick={handleindecrement}>Decrease</button>
      </div>
    </div>
  )
}

export default Counter
