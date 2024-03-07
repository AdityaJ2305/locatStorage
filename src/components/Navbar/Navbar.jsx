import React from 'react'
import "../Navbar/Navbar.css"
import { Link } from 'react-router-dom'


function Navbar() {
    
  return (
    <div className='navbar'>
        <div className='navlinks'>
      <ul>
        <li className="navitem">Home</li>
        <li className="navitem">About Us</li>
      </ul>
      </div>
    </div>
  )
}

export default Navbar