import React from 'react';
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import App from './App.jsx'
import { AppContext } from './lib/context.jsx';


createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <AppContext>
    <App/>
  </AppContext>
  </BrowserRouter>
);
