import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {HashRouter} from 'react-router-dom';
import './scss/init.scss';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename={process.env.PUBLIC_URL}>
    <App />
  </HashRouter>
 );


