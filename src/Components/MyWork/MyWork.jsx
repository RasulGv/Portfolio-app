import React from 'react';
import './MyWork.css';
import WorkData from '../../assets/WorkData';
import { useTranslation } from 'react-i18next';

const MyWork = () => {
  const { t } = useTranslation(); // Tərcümə funksiyasını çağırırıq

  const redirectToGithub = () => {
    window.location.href = "https://github.com/RasulGv?tab=repositories";
  };

  return (
    <div id='work' className='mywork'>
      <div className='mywork-title'>
        <h1>{t('My works')}</h1> 
      </div>
      <div className='mywork-container'>
        {WorkData.map((work, index) => (
          <img key={index} src={work.image} alt='' />
        ))}
      </div>
      <details className='mywork-showmore'>
        <summary onClick={redirectToGithub}>
          {t('Show More')} 
        </summary>
      </details>
    </div>
  );
};

export default MyWork;
