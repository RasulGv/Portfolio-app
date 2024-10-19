import React from 'react'
import './About.css'
import sign from '../../assets/sign.jpg'
import profile from '../../assets/profile.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
    <div className='about-title'>
    <h1>About me</h1>
    {/* <img src={sign} alt="sign" /> */}
    </div>
    <div className="about-sections">
        <div className="about-left">
            <img src={profile} alt="" />
        </div>
        <div className='about-right'>
         <div className=" about-para">
            <p>Frontend development is not just a job for me, it's a passion. This passion inspires me to learn new things and become better every day. I'm at the forefront of technology, creating experiences that users expect and love.</p>
            <p>Being a frontend developer requires more than just writing code. It's about creating a visually appealing and functional experience for every user. This work is a craft where my creativity and technical knowledge work in harmony.</p>
         </div>
          <div className='about-skills'>
          <div className="about-skill"><p>HTML5 & CSS</p><hr style={{width:'50%'}} /></div>
          <div className="about-skill"><p>React JS</p><hr style={{width:'50%'}} /></div>
          <div className="about-skill"><p>Javascript</p><hr style={{width:'50%'}} /></div>
          <div className="about-skill"><p>Tailwind Css & Bootstrap</p><hr style={{width:'50%'}} /></div>
          <div className="about-skill"><p>Github</p><hr style={{width:'50%'}} /></div>
          <div className="about-skill"><p>Redux toolkit</p><hr style={{width:'50%'}} /></div>
          <div className="about-skill"><p>QGis</p><hr style={{width:'50%'}} /></div>
         </div>
        </div>
    </div>
    < div className="about-achievements">
        <div className="about-achievement">
          <h1>+4</h1>
          <p>Years of experience in environmental engineering</p>
        </div> 
        <hr />
        <div className='about-achievement'>
        <h1>7</h1>
        <p>Month of experience in mapping operator</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>Projects</p>
        </div> 
    </div>
  </div>
  )
}

export default About