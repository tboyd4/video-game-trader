import React, { useContext } from "react";

import "./gameDisplay.css";
import GameContext from '../../utils/GameContext'

function GameDisplay(props) {

  const { userCart } = useContext(GameContext);

  let cartPrice = 0
  userCart.forEach((game) => {
    cartPrice = cartPrice + game.price;
  })

  return (
    <div>
      {userCart.length > 0 ? userCart.map((game, i) => {
        return (
          <div class="col s12 m7">
            <div class="card horizontal small cart-games">
              <div class="card-image">
                <img src={game.image} alt="hello"></img>
              </div>
              <div class="card-stacked">
                <div class="card-content">
                  <h2 class="header black-text">{game.title}</h2>
                  <p className="text-spacing black-text" id="para">Price: ${game.price}</p>
                  <a className="waves-effect waves-light green accent-3 black-text btn" data-tag={game.id} onClick={props.removeCart} >Remove From Cart</a>
                </div>
              </div>
            </div>
          </div>
        );
      }) : <h1>Your Cart is Empty!! Go add some games!</h1>}
      <div className="filler"></div>
      <h1 className="black-text center-align cart-title cart-games">TOTAL COST: ${cartPrice}</h1>
      <div className="filler"></div>
    </div>
  );
}

export default GameDisplay;