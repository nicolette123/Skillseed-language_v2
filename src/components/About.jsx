import React from 'react';
import { useTranslation } from 'react-i18next';
import './About.css';
function About() {
  const { t } = useTranslation('about');

  return (
    <div className="page about-page">
      <h2>{t('title')}</h2>
      <div className="card-container">
        <div className="card">
          <h3>{t('who.title')}</h3>
          <p>{t('who.description')}</p>
        </div>
        <div className="card">
          <h3>{t('mission.title')}</h3>
          <p>{t('mission.description')}</p>
        </div>
        <div className="card">
          <h3>{t('vision.title')}</h3>
          <p>{t('vision.description')}</p>
        </div>
      </div>
    </div>
  );
}

export default About;
