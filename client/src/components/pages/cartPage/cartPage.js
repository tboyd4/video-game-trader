import React, { useContext } from "react";

import CartDisplay from "../../gameDisplay/cartDisplay";
import GameContext from "../../../utils/GameContext";

import "./cartPage.css";

function Cart(props) {
  const { userCart } = useContext(GameContext);
  if (userCart.length < 1) {
    return (
      <main className="verticalHeight">
        <h1 class="black-text center-align cart-title">Your Cart</h1>
        <CartDisplay
          removeCart={props.removeCart}
          purchaseCart={props.purchaseCart}
        />
      </main>
    );
  } else {
    return (
      <main>
        <h1 class="black-text center-align cart-title">Your Cart</h1>
        <CartDisplay
          removeCart={props.removeCart}
          purchaseCart={props.purchaseCart}
        />
      </main>
    );
  }
}

export default Cart;
