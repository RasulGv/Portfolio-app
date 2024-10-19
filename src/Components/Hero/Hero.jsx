import React from 'react'
import './Hero.css'
import profile from '../../assets/profile.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
     <img src={profile} alt="" />
     <h1> <span>I'm Rasul Garavaliyev,</span> junior frontend developer based in Azerbaijan </h1>
     <p>I specialize in building dynamic and user-friendly interfaces using modern web technologies. I am proficient in HTML, CSS, and JavaScript, with strong expertise in frameworks like React .</p>
     <div className="hero-action">
        <div className="hero-contact">
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
            Contact with me
            </AnchorLink>
            </div>
            <div className="hero-cv">
                My cv
            </div>
        
     </div>
    </div>
  )
}

export default Hero