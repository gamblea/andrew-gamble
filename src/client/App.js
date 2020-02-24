import React, { Component } from "react";

// import './bootstrap.css';
import "./app.scss";
import Header from "./Header";
import Main from "./Main";

export default function App() {
  return (
    <div className="container topApp">
      <Header />
      <Main />
    </div>
  );
}
