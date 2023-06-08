import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import './components/styles/reset/reset.scss'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </HashRouter>
);

