import React from 'react'
import { Link } from 'react-router-dom'

export default function Error() {
  return (
    <div>

        <h1>Error Page</h1>

        <Link to = "/"  className='bg-red-300 ' >back to Home Page</Link>


      
    </div>
  )
}
