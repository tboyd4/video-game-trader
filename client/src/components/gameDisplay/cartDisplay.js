import React, { useContext } from "react";

import "./gameDisplay.css";
import GameContext from "../../utils/GameContext";

function GameDisplay(props) {
  const { userCart } = useContext(GameContext);

  let cartPrice = 0;
  userCart.forEach((game) => {
    cartPrice = cartPrice + game.price;
  });

  return (
    <div>
      {userCart.length > 0 ? (
        userCart.map((game, i) => {
          return (
            <div class="col s12 m12">
              <div class="card horizontal small grey darken-2 cart-games">
                <div class="card-stacked">
                  <div class="card-content">
                    <h2 class="header white-text">{game.title}</h2>
                    <p className="text-spacing white-text" id="para">
                      Price: ${game.price}
                    </p>
                  </div>
                  <a
                    className="waves-effect waves-light green accent-3 black-text btn"
                    data-tag={game.id}
                    onClick={props.removeCart}
                  >
                    Remove From Cart
                  </a>
                </div>
              </div>
            </div>
          );
        })
      ) : (
        <h1>Your Cart is Empty!! Go add some games!</h1>
      )}

      {userCart.length > 0 ? (
        <div>
          <h1 className="black-text center-align cart-title cart-games">
            TOTAL COST: ${cartPrice}
          </h1>
          <a
            className="waves-effect waves-light green accent-3 black-text btn"
            onClick={() => props.purchaseCart(cartPrice)}
          >
            Confirm Purchase
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default GameDisplay;
