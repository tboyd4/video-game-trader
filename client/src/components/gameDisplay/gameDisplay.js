import React from "react";
import Pic from "../../images/test-img.jpg";
import "./gameDisplay.css";

function GameDisplay() {
  const data = [
    {
      title: "Game1",
      released: "2001",
      image: Pic,
      price: "$15.00",
    },
    {
      title: "Game2",
      released: "2005",
      image: Pic,
      price: "$45.00",
    },
    {
      title: "Game3",
      released: "2011",
      image: Pic,
      price: "$16.00",
    },
  ];

  return (
    <div class="row">
      {data.map((game) => {
        return (
          <div class="col s12 m7 image-style">
            <div class="card">
              <div class="card-image">
                <img src={game.image} alt="hello"></img>
              </div>
              <div class="card-content">
                <span class="card-title">{game.title}</span>
                <p>Released: {game.released}</p>
                <p>Price: {game.price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default GameDisplay;
