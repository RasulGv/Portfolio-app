import React from 'react';
import './Footer.css';
import logo from '../../assets/logo.jpg';
import { FaLinkedin } from "react-icons/fa";
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className='footer'>
      <div className='footer-top'>
        <div className='footer-top-left'>
          <img src={logo} alt="logo" />
          <p>{t('footer_contact_message')}</p>
        </div>
        <div className='footer-top-right'>
          <a href="https://www.linkedin.com/in/rasul-garavaliyev-90183620b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className='footer-linkedin-icon' />
          </a>
        </div>
      </div>
      <hr />
      <div className='footer-bottom'>
        <p className='footer-bottom-left'>© 2024 Rasul Garavaliyev. {t('footer_rights_reserved')}</p>
        <div className='footer-bottom-right'>
          <p>{t('footer_terms')}</p>
          <p>{t('footer_privacy')}</p>
          <p>{t('footer_connect')}</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
