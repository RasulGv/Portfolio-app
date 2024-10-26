import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
import profile from '../../assets/profile.jpg';

const About = () => {
  const { t } = useTranslation();

  return (
    <div id='about' className='about'>
      <div className='about-title'>
        <h1>{t('about.title')}</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile} alt="profile" />
        </div>
        <div className='about-right'>
          <div className=" about-para">
            <p>{t('about.paragraph1')}</p>
            <p>{t('about.paragraph2')}</p>
          </div>
          <div className='about-skills'>
            <div className="about-skill"><p>{t('about.skills.html_css')}</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>{t('about.skills.react')}</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>{t('about.skills.javascript')}</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>{t('about.skills.tailwind_bootstrap')}</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>{t('about.skills.github')}</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>{t('about.skills.redux')}</p><hr style={{ width: '50%' }} /></div>
            <div className="about-skill"><p>{t('about.skills.qgis')}</p><hr style={{ width: '50%' }} /></div>
          </div>
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>+4</h1>
          <p>{t('about.achievements.engineering_years')}</p>
        </div>
        <hr />
        <div className='about-achievement'>
          <h1>7</h1>
          <p>{t('about.achievements.mapping_months')}</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>2</h1>
          <p>{t('about.achievements.projects')}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
