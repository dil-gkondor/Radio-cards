import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import '../../tokens/atlas-tokens.css';
import '../../tokens/radio-card.css';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
