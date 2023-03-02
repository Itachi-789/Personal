import React from 'react'
import Navbar from './Navbar.js'
import './style.css'

const HomeComponent = () => {

  return (
    <div className='container'>
        <Navbar/>
        <div className='main-content'>
            <h1><b>Speak without fear</b></h1>
            <p>With Speaky you can improve your pronunciation which will overall help <br/> you develop your public speaking skills</p>
            <button> Get Started</button>
        </div>
    </div>
  )
}

export default HomeComponent
