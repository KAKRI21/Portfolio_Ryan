import React from 'react';
import ReactDOM from 'react-dom/client';
import Portfolio from './portfolio'; // On importe ton fichier portfolio.js

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
