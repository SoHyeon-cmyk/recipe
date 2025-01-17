import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouterr} from 'react-router-dom';
import './scss/init.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouterr basename={process.env.PUBLIC_URL}>
    <App />
  </BrowserRouterr>
 );


