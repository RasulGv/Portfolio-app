import React from 'react'
import './Services.css'
import data from '../../assets/Data'
// import { FaArrowRight } from "react-icons/fa";

const Services = () => {
  return (
    <div className='services'>
    <div className='services-title'>
     <h1>My services</h1>
    </div>
    <div className="services-container">
  {data.map((service, index) => {
    return (
      <div key={index} className="services-format">
        <h3>{service.title}</h3>
        <h2>{service.duration}</h2>
        <p>{service.description}</p>
        <details className="services-readmore">
          <summary>Read More </summary>
          <p>{service.details}</p>
        </details>
      </div>
    );
  })}
</div>
    </div>
  )
}

export default Services