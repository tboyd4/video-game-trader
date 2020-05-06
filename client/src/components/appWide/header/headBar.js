import React from 'react';
import { Link } from "react-router-dom";

function HeadBar() {
  return (
    <nav>
      <div className="nav-wrapper green accent-3">
        <a href="#" className="brand-logo black-text">FINDYERGAME</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><Link className="black-text" to="/home">home</Link></li>
          <li><Link className="black-text" to="/">login</Link></li>
          <li><Link className="black-text" to="/buysell">buy/sell</Link></li>
          <li><Link className="black-text" to="/user">user</Link></li>
        </ul>
      </div>
    </nav>

  )
}

export default HeadBar;