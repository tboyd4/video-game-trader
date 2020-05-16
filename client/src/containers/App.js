// dependency imports
import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

// component imports
import Home from "../components/pages/homePage/home";
import BuySell from "../components/pages/buysellPage/buySellPage";
import Login from "../components/pages/authenticationPages/login";
import Register from "../components/pages/authenticationPages/register";
import FootBar from "../components/appWide/footer/footBar";
import HeadBar from "../components/appWide/header/headBar";
import Cart from "../components/pages/cartPage/cartPage";

// utility imports
import GameContext from "../utils/GameContext";
import Pic1 from "../images/test-img.jpg";
import Pic2 from "../images/dis-pic.jpg";
import Pic3 from "../images/resi-pic.jpg";
import M from "materialize-css";

// class component
function App() {
  const [gameState, setGameState] = useState({
    testData: [
      {
        id: 1,
        title: "Game1",
        released: "2001",
        image: Pic1,
        price: 15,
      },
      {
        id: 2,
        title: "Game2",
        released: "2005",
        image: Pic2,
        price: 45,
      },
      {
        id: 3,
        title: "Game3",
        released: "2011",
        image: Pic3,
        price: 16,
      },
    ],
    userCart: [],
  });

  function addToCart(game) {
    // THIS FUNCTION WILL TAKE THE DATA BEING DISPLAYED FROM THE DATABASE, AND WILL ADD THAT GAME CHOSEN TO THE REACT STATE CART

    // idRemove is the id of the game we are removing from the test data
    let idRemove = game.id;

    // we are going to push the game being added to the cart THIS WILL EVENTUALLY PULL FROM DATABASE AND PUSH INTO CART STATE
    gameState.userCart.push(game);

    // we are setting the state, so that what they add to cart will be removed from data.
    setGameState({
      ...gameState,
    });
    M.toast({ html: "Added to Cart!" });
  }

  // NOTE FOR TYLER -- THERE WILL BE A BOUGHT or a SOLD FUNCTION THAT REMOVES OR ADDS THE GAME TO THE DATABASE. ALL THE CART FUNCTIONS SHOULD DO IS MOVE GAMES TO AND FROM THE CART STATE

  function removeFromCart(event) {
    // ALL THIS FUNCTION WILL DO IS REMOVE THE GAME FROM THE CART STATE

    // idRemove is the id of the game we are removing
    let idRemove = event.target.dataset.tag;

    let newCart = gameState.userCart.filter((game) => game.id != idRemove);

    setGameState({
      ...gameState,
      userCart: newCart, // I want to set the cart state object as the new cart from above
    });
  }

  function purchaseCart(totalPrice) {
    // this will be the fuction that takes everything in the cart, and lets the user "buy it". 
    // this will remove games from cart, and remove them from the database of available games
    // this will also deduct users credits by the amount of the total price of cart
    
    alert('You bought this cart, and it will cost you $' + totalPrice);
    setGameState({...gameState, userCart: []})
  }

  return (
    <div className="container">
      <GameContext.Provider value={gameState}>
        <BrowserRouter>
          <HeadBar />
          <Switch>
            <Route exact path="/" component={(props) => <Login {...props} />} />
            <Route
              exact
              path="/register"
              component={(props) => <Register {...props} />}
            />
            <Route
              exact
              path="/home"
              component={(props) => <Home {...props} addCart={addToCart} />}
            />
            <Route
              exact
              path="/buysell"
              component={(props) => <BuySell {...props} />}
            />
            <Route
              exact
              path="/cart"
              component={(props) => (
                <Cart {...props} removeCart={removeFromCart} purchaseCart={purchaseCart} />
              )}
            />
          </Switch>
        </BrowserRouter>
      </GameContext.Provider>

      <div className="filler"></div>

      <FootBar />
    </div>
  );
}

export default App;
