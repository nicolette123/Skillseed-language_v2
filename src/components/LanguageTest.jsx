import React from 'react';
import { useTranslation } from 'react-i18next';

function LanguageTest() {
  const { t, i18n } = useTranslation();

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', margin: '20px' }}>
      <h3>Language Test Component</h3>
      <p><strong>Current Language:</strong> {i18n.language}</p>
      <p><strong>Available Languages:</strong> {i18n.languages?.join(', ')}</p>
      <p><strong>Is Initialized:</strong> {i18n.isInitialized ? 'Yes' : 'No'}</p>
      
      <h4>Translation Tests:</h4>
      <ul>
        <li><strong>common:nav.home:</strong> "{t('common:nav.home')}"</li>
        <li><strong>common:nav.about:</strong> "{t('common:nav.about')}"</li>
        <li><strong>common:nav.contact:</strong> "{t('common:nav.contact')}"</li>
        <li><strong>home:welcome:</strong> "{t('home:welcome')}"</li>
        <li><strong>home:description:</strong> "{t('home:description')}"</li>
      </ul>
      
      <h4>Loaded Resources:</h4>
      <pre style={{ fontSize: '12px', background: '#f5f5f5', padding: '10px' }}>
        {JSON.stringify(i18n.store?.data, null, 2)}
      </pre>
    </div>
  );
}

export default LanguageTest;
