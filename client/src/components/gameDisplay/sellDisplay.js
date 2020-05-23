import React from "react";

import "./gameDisplay.css";

function SellDisplay(result) {

  return (
    <div className="row grey darken-2 game-style">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={result.image} alt="hello"></img>
          </div>
        </div>
      </div>
      <div className="col s12 m6  ">
        <div className="card z-depth-0 black-text game-style grey darken-2">
          <div className="card-content green accent-3 text-content">
            <p className="card-title text-spacing" id="title">
              {result.title}
            </p>
          </div>
          <div className="card-content green accent-3 text-content">
            <p className="text-spacing" id="para">
              Released: {result.year}
            </p>
            <p className="text-spacing" id="para">
              Trade in : {result.price * -.5}
            </p>
            <p className="text-spacing" id="para">
              Console: {result.console}
            </p>
          </div>
          <div>
            <a
              className="waves-effect waves-light green accent-3 black-text btn-large"
              onClick={() => result.addCart(result.game)}
            >
              Trade in Game
              </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SellDisplay;
