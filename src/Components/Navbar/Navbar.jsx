import React, { useState } from 'react'
import './Navbar.css'
import logo from '../../assets/R.jpg'

const Navbar = () => {

  const[menu,setMenu]=useState("home");

  return (
    <div className='navbar'>
      <img src={logo} alt="logo" />
      <ul className="nav-menu">
        <li><p>Home</p></li>
        <li><p>About me</p></li>
        <li><p>Services</p></li>
        <li><p>Portfolio</p></li>
        <li><p>Contact</p></li>
      </ul>
      <button className="nav-connect">
         Contact with me
      </button>
    </div>
  )
}

export default Navbar
