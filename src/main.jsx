import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx'
import './scss/vars/vars.scss';
import './scss/index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
