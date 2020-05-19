import React, { useContext } from "react";

import "./gameDisplay.css";
<<<<<<< HEAD
import GameContext from "../../utils/GameContext";
// import gamesAPI from "../../utils/GamesAPI";
=======

import GameContext from "../../utils/GameContext";
import gamesAPI from "../../utils/GamesAPI";
>>>>>>> 077bb533716320b9f185f2cb6b2c7e290877db07

function GameDisplay(props) {
  const { testsData } = useContext(GameContext);

  return (
    <div className="row grey darken-2 game-style">
      <div className="col s12 m6">
        <div className="card">
          <div className="card-image">
            <img src={props.image} alt="hello"></img>
          </div>
        </div>
      </div>
      <div className="col s12 m6  ">
        <div className="card z-depth-0 black-text game-style grey darken-2">
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
          <div>
            <a
              className="waves-effect waves-light green accent-3 black-text btn-large"
              onClick={() => props.addCart(props.game)}
            >
              Purchase
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GameDisplay;
