import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router'
import Order  from "./components/Order"
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="order-coffee" element={<Order />} />
        {/* <App /> */}
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>
);
