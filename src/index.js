import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Home from './components/pages/HomePage';
import SwalkersDetail from './components/pages/Swalkers'
import IndysDetail from './components/pages/Indys'
import Projects from './components/pages/Projects'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import { Suspense, lazy } from 'react';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
// const Home  = lazy(() => import('./components/pages/HomePage'));
root.render(
  <React.StrictMode>

  <BrowserRouter>
    <div className='main' id='content-page'>
      
      <Routes> 
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/swalkers" element={<SwalkersDetail />} />
        <Route path="/projets/indys" element={<IndysDetail />} />
      </Routes>
    </div>
  </BrowserRouter>

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
