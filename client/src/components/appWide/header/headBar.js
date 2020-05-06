import React from 'react';
import { Link } from "react-router-dom";

import './headBar.css';

function HeadBar() {
  return (
    <nav>
      <div className="nav-wrapper green accent-3">
        <a href="/home" className="brand-logo black-text" id="header-title">Centaur Game Trading</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link className="black-text" to="/home">Home</Link></li>
          <li><Link className="black-text" to="/">Login</Link></li>
          <li><Link className="black-text" to="/buysell">Sell</Link></li>
          <li><Link className="black-text" to="/user">User Dashboard</Link></li>
        </ul>
      </div>
    </nav>

  )
}

export default HeadBar;