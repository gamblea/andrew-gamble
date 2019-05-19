import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="myHeader row h-100 justify-content-center align-items-center ">
      <div className="col-*">
        <h1 className="title "><Link className="nav-link" to="/">Andrew Gamble</Link></h1>

        <nav className="navbar navbar-expand-lg navbar-light justify-content-center align-items-center align-self-center mx-auto">
          <div className="navbar-expand" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link-bigger nav-item nav-link" to="/">About</Link>
              <Link className="nav-link-bigger nav-item nav-link" to="/Academics">Academics</Link>
              <Link className="nav-link-bigger nav-item nav-link" to="/Code">Code</Link>
              <Link className="nav-link-bigger nav-item nav-link" to="/Creative">Creative</Link>
              <Link className="nav-link-bigger nav-item nav-link" to="/Blog">Blog</Link>
            </div>
          </div>
        </nav>
        <hr className="header-break" />
      </div>
    </div>
  );
}
