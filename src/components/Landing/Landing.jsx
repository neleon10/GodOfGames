
import React from 'react'
import { Link } from 'react-router-dom'
import './landing.css'
function Landing() {
  return (
    <>
     <div className='mainContainer'>
     <div className='bg-image'>
        <h1>God Of Games</h1>
      <Link to = "/videogames">
        <button className='landButton'>Visit</button>
      </Link>
     </div>
     </div>
    </>    
  )
}

export default Landing