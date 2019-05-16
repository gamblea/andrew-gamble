import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div className="row h-100 justify-content-center align-items-center">
      <div className="col-*">
        <h1><Link to="/">Andrew Gamble</Link></h1>
        <div>
          <ul className="list-inline">
            <li className="list-inline-item"><Link to="/">About</Link></li>
            <li className="list-inline-item"><Link to="/Academics">Academics</Link></li>
            <li className="list-inline-item"><Link to="/Code">Code</Link></li>
            <li className="list-inline-item"><Link to="/Creative">Creative</Link></li>
            <li className="list-inline-item"><Link to="/Blog">Blog</Link></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
