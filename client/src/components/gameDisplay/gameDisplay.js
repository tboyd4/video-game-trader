import React from "react";

import "./gameDisplay.css";

function GameDisplay(props) {

  return (
    <div className="row grey darken-2 game-style">
      <div className="col s12 m12  ">
        <div className="card z-depth-0 black-text game-style grey darken-2">
          <div className="card-content green accent-3 text-content">
            <p className="card-title text-spacing" id="title">
              {props.title}
            </p>
          </div>
          <div className="card-content green accent-3 text-content">
            <p className="text-spacing" id="para">
              Price: {props.price}
            </p>
            <p className="text-spacing" id="para">
              Console: {props.console}
            </p>
          </div>
          <div>
            <a
              className="waves-effect waves-light green accent-3 black-text btn-large"
              onClick={() => props.addCart(props.game)}
            >
              Add to Cart
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDisplay;
