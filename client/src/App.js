import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1 className='kanit'>Coffee Up</h1>

      <p>I want the home page just directing people</p>
      <p>kinda saying welcome and to order a coffee</p>
      <p>Two Buttons</p>
      <Link to="/order-coffee" className='btn btn-outline-success'>Order Coffee</Link>
    </div>
  );
}

export default App;
