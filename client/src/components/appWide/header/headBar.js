import React from 'react';
import { Link } from "react-router-dom";

import './headBar.css';
// import Logo from '../../../images/proj3log.png';

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
          <li><Link className="black-text" to="/cart">Cart</Link></li>
        </ul>
      </div>
    </nav>

  )
}

export default HeadBar;