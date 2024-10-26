import React from 'react';
import './Contact.css';
import { CiMail } from 'react-icons/ci';
import { IoLocationOutline, IoCallOutline } from 'react-icons/io5';
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();

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
        Accept: "application/json",
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
    }
  };

  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>{t('contact_title')}</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>{t('ready_for_contact')}</h1>
          <p>{t('contact_description')}</p>
          <div className="contact-details">
            <div className="contact-detail">
              <CiMail className="icons" /> <p>garavaliyevrasul531@gmail.com</p>
            </div>
            <div className="contact-detail">
              <IoLocationOutline className="icons" /> <p>Azerbaijan, Baku</p>
            </div>
            <div className="contact-detail">
              <IoCallOutline className="icons" />
              <a
                href="https://wa.me/+994506719676?text=Hello%20dear%20customer,%20you%20can%20contact%20me%20on%20this%20number%20or%20write%20on%20WhatsApp."
                target="_blank"
                rel="noopener noreferrer"
              >
                +994506719676
              </a>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>{t('your_name')}</label>
          <input type="text" placeholder={t('your_name')} name="name" />
          <label>{t('email')}</label>
          <input type="email" placeholder={t('email')} name="email" />
          <label>{t('message_placeholder')}</label>
          <textarea name="message" rows="8" placeholder={t('message_placeholder')}></textarea>
          <button type="submit" className="contact-submit">
            {t('submit')}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
