import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpg';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <div id='home' className='hero'>
      <img src={profile} alt="" />
      <h1><span>{t('hero.intro')}</span></h1>
      <p>{t('hero.description')}</p>
      <div className="hero-action">
        <div className="hero-contact">
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            {t('Contact with me')}
          </AnchorLink>
        </div>
        <div className="hero-cv">
          <a 
            href="https://docs.google.com/document/d/16ktlTajjwoSANR2IEHRqY8w8KpzwWpXv/edit" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            {t('My cv')}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
