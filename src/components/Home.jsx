import React from 'react';
import { useTranslation } from 'react-i18next';
import './Home.css';

function Home() {
  const { t } = useTranslation('home');

  return (
    <div className="home-container">
      {/* Left Side: Text Content */}
      <div className="home-text">
        <h2>{t('welcome')}</h2>
        <p>{t('description')}</p>
        <p>{t('mission')}</p>
        <p>{t('impact')}</p>
        <button className="get-started-btn">{t('getStarted')}</button>
      </div>

      {/* Right Side: Background Image */}
      <div className="home-image" />
      
        <img src="/images/kids.jpg" alt="Home Background" />
    </div>
  );
}

export default Home;
