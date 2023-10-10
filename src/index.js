import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import ApiProvider from './context/ApiContext';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navbar from './components/Navbar';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ApiProvider>


      <BrowserRouter>
        <Navbar />

      <Routes>
        {/* Homepage route */}
        <Route path="/" element={<Homepage />} />

        {/* Gamepage route */}
        {/* <Route path="/gamepage" element={<Gamepage />} /> */}
      </Routes>
      
      </BrowserRouter>
      
    </ApiProvider>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
