import React from "react";
import "./FeaturedDisplay.css";

function FeaturedDisplay(props) {
  return (
    <div className="featured container card">
    <div className="row grey darken-2 game-style">
      <div className="col s4 gameDisplay">
        <div className="card gameDisplay z-depth-0 black-text game-style grey darken-2">
          <div className="card-content green accent-3 text-content">
            <p className="card-title text-spacing" id="title">
              {props.title}
            </p>
          </div>
          <div className="card-content green accent-3 text-content">
            <p className="text-spacing" id="para">
              Released: {props.year}
            </p>
            <p className="text-spacing" id="para">
              Price: {props.price}
            </p>
            <p className="text-spacing" id="para">
              Console: {props.console}
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>

  );
}

export default FeaturedDisplay;
