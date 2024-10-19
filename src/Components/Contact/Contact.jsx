import React from 'react'
import './Contact.css'
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";



const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "373c70cb-ad69-4c20-a58e-4729feadc7b5");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id='contact' className='contact'>
     <div className='contact-title'>
        <h1>Your Next Project Starts Here</h1>
     </div>
     <div className='contact-section'>
      <div className='contact-left'>
      <h1>Ready for Contact?</h1>
      <p>I am ready to create a beautiful and functional web experience for you. I'm here to make your ideas come true and take your brand to a new level. Let's discuss your project together and discover creative solutions. I'm just a click away to see how I can help you.</p>
      <div className='contact-details'>
      <div className='contact-detail'>
      <CiMail className='icons' /> <p>garavaliyevrasul531@gmail.com</p>
      </div>
      <div className='contact-detail'>
      <IoLocationOutline className='icons' /> <p>Azerbaijan, Baku </p>
      </div>
      <div className='contact-detail'>
      <IoCallOutline className='icons' />  <a href="https://wa.me/+994506719676?text=Hello%20dear%20customer,%20you can%20contact me%20on this%20number%20or%20write%20on%20WhatsApp." target="_blank">+994506719676</a>
      </div>
      </div>
      </div>
      <form onSubmit={onSubmit} className='contact-right'>
       <label htmlFor="">Your Name</label>
       <input type="text" placeholder='Enter your name' name='name' />
       <label htmlFor="">Email</label>
       <input type="email" placeholder='Enter your email' name='email' />
       <label htmlFor="">Write your message here</label>
       <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
       <button type='submit' className='contact-submit'>Submit</button>
      </form>
     </div>
    </div>
  )
}

export default Contact