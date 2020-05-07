import React, { useContext } from "react";

import "./gameDisplay.css";
import GameContext from '../../utils/GameContext'

function GameDisplay(props) {

  const { userCart } = useContext(GameContext);

  let cartPrice = 0
  userCart.forEach((game) => {
    console.log(cartPrice);
    cartPrice = cartPrice + game.price;
  })

  return (
    <div>
      {userCart.map((game, i) => {
        return (
          <div className="row grey darken-2 game-style" key={i}>
              <div className="col s12 m6">
                <div className="card">
                  <div className="card-image">
                    <img src={game.image} alt="hello"></img>
                  </div>
                </div>
              </div>
              <div className="col s12 m6  ">
                <div className="card z-depth-0 black-text game-style grey darken-2">
                  <div className="card-content green accent-3 text-content">
                    <p className="card-title text-spacing" id="title">
                      {game.title}
                    </p>
                  </div>
                  <div className="card-content green accent-3 text-content">
                    <p className="text-spacing" id="para">Released: {game.released}</p>
                    <p className="text-spacing" id="para">Price: {game.price}</p>
                    <p className="text-spacing" id="para">Game Details</p>
                    <p className="text-spacing" id="para">Game Details</p>
                  </div>
                  <div>
                  </div>
                </div>
              </div>
          </div>
        );
      })}
      <h1>TOTAL COST: ${cartPrice}</h1>
    </div>
  );
}

export default GameDisplay;