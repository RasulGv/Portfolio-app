import React from 'react'
import './MyWork.css'
import WorkData from '../../assets/WorkData'

const MyWork = () => {
 
  const redirectToGithub = () => {
    window.location.href = "https://github.com/RasulGv?tab=repositories";
  };

  return (
    <div className='mywork'>
      <div className='mywork-title'>
        <h1>My works</h1>
      </div>
      <div className='mywork-container'>
        {WorkData.map((work, index) => {
          return <img key={index} src={work.image} alt='' />;
        })}
      </div>
      <details className='mywork-showmore'>
        <summary onClick={redirectToGithub}>
          Show More
        </summary>
      </details>
    </div>
  );
};

export default MyWork;