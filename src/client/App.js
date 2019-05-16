import React, { Component } from 'react';

// import './bootstrap.css';
import './app.scss';
import Header from './Header';
import Main from './Main';
/*
 <div>
      <div className="frontImage">
        <div className="frontText">
          <h1>-- ANDREW&nbsp; GAMBLE --</h1>
        </div>
      </div>
*/

export default function App() {
  return (
    <div className="container">
      <Header />
      <Main />
    </div>
  );
}
