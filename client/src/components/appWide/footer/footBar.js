import React from 'react';

import './footBar.css'

function FootBar() {
    return (
      <div>
        <footer className="page-footer green accent-3" id="the-foot">
          <div className="container">
          </div>
          <div className="footer-copyright">
            <div className="container black-text">
            © 2020 Tyler Boyd, Jacob Borgen, Kyle Clark, Sheri Rhoades
            </div>
          </div>
        </footer>
      </div>
    )
}

export default FootBar;