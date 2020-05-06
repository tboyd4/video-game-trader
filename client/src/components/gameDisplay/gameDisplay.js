import React from "react";
import Pic1 from "../../images/test-img.jpg";
import Pic2 from "../../images/dis-pic.jpg";
import Pic3 from "../../images/resi-pic.jpg";

import "./gameDisplay.css";

function GameDisplay() {
  const data = [
    {
      title: "Game1",
      released: "2001",
      image: Pic1,
      price: "$15.00",
    },
    {
      title: "Game2",
      released: "2005",
      image: Pic2,
      price: "$45.00",
    },
    {
      title: "Game3",
      released: "2011",
      image: Pic3,
      price: "$16.00",
    },
  ];

  return (
    <div>
      {data.map((game, i) => {
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
                    <a href="/buysell" className="waves-effect waves-light green accent-3 black-text btn">Purchase</a>
                  </div>
                </div>
              </div>
          </div>
        );
      })}
    </div>
  );
}

export default GameDisplay;
