import React from 'react';
import { useTranslation } from 'react-i18next';
import './Contact.css'; 

function Contact() {
  const { t } = useTranslation('contact');

  return (
    <div className="page contact-page">
       <h2>{t('title')}</h2>
     {/*} <p>{t('email')}</p>
      <p>{t('phone')}</p>
      <p>{t('address')}</p>*/}

      <form className="contact-form">
        <label htmlFor="name">{t('form.name')}</label>
        <input type="text" id="name" placeholder={t('form.namePlaceholder')} required />

        <label htmlFor="email">{t('form.email')}</label>
        <input type="email" id="email" placeholder={t('form.emailPlaceholder')} required />

        <label htmlFor="message">{t('form.message')}</label>
        <textarea id="message" placeholder={t('form.messagePlaceholder')} required></textarea>

        <button type="submit">{t('form.submit')}</button>
      </form>
    </div>
  );
}

export default Contact;
