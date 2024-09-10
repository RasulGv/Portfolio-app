import React from 'react'
import './Footer.css'
import logo from '../../assets/logo.jpg'
import { FaUser } from "react-icons/fa";

const Footer = () => {
  return (
  <div className='footer'>
    <div className='footer-top'>
      <div className='footer-top-left'>
       <img src={logo} alt="logo" />
       <p>You can click on the number and contact via whatsapp </p>
      </div>
      <div className='footer-top-right'>
         <div className='footer-email-input'>
         <FaUser />
         <input type="email" placeholder='Enter your email' />
         </div>
         <button type='subscribe' className='footer-subscribe'>Subscribe</button>
      </div>
    </div>
    <hr />
    <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2024 Rasul Garavaliyev. All rights reserved.</p>
        <div className='footer-bottom-right'>
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
        </div>
    </div>
  </div>
  )
}

export default Footer