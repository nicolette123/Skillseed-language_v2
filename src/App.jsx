import React from 'react';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import LanguageTest from './components/LanguageTest';

function App() {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (e) => {
    console.log('Changing language to:', e.target.value);
    i18n.changeLanguage(e.target.value);
    console.log('Current language:', i18n.language);
  };

  

  return (
    <Router>
      <div className="app">
        <nav className="navbar">
          <h1 className="logo">Skillseed</h1>
          <div className="nav-links">
            <Link to="/">{t('common:nav.home') || 'Home'}</Link>
            <Link to="/about">{t('common:nav.about') || 'About'}</Link>
            <Link to="/contact">{t('common:nav.contact') || 'Contact'}</Link>
          </div>
          <select onChange={handleLanguageChange} value={i18n.language} className="language-select">
            <option value="en">English</option>
            <option value="fr">Français</option>
            <option value="sw">Kiswahili</option>
            <option value="rw">Kinyarwanda</option>
          </select>
        </nav>

        {/* <LanguageTest /> */}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
