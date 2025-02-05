import React from 'react'
import { useState } from 'react'

export default function Testing() {

    const [value,setvalue] = useState(0)

    const increment =()=>{
        setvalue(value+1)
    }

    const decrement =()=>{
        setvalue(value-1)
    }


  return (
    <div className='flex flex-col items-center justify-center h-screen'>

      <h1>{value}</h1>

      <br />
      

        <button style={{
            backgroundColor: 'red',
            color: 'white',
            fontSize: '20px',
            padding: '10px',
            borderRadius: '10px',
            paddingRight: '10px'
        }} onClick={increment}>+</button>

        
        <button 
        style={{
            backgroundColor: 'blue',
            color: 'white',
            fontSize: '20px',
            padding: '10px',
            borderRadius: '10px',
            paddingRight: '10px'
            
        }}
        
        onClick={decrement}>-</button>

    </div>
  )
}
