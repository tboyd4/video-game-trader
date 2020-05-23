// dependency imports
import React, { useState } from "react";
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
import CentaurContext from "../utils/CentaurContext";
import M from "materialize-css";
import API from "../utils/GamesAPI";

// class component
function App() {
  const [gameState, setGameState] = useState({
    userCart: [],
    sellerData: [],
    userId: "",
  });

  const [centaurState, setCentaurState] = useState({
    centaurs: 0,
  });

  function addToCart(game) {
    // THIS FUNCTION WILL TAKE THE DATA BEING DISPLAYED FROM THE DATABASE, AND WILL ADD THAT GAME CHOSEN TO THE REACT STATE CART

    // we are going to push the game being added to the cart THIS WILL EVENTUALLY PULL FROM DATABASE AND PUSH INTO CART STATE
    gameState.userCart.push(game);

    M.toast({ html: "Added to Cart!" });
  }

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

    let checkingUser = localStorage.getItem("usertoken");

    if (checkingUser) {
      // grabs the cart, and loops through it, deleting each game that the user just purchased
      let purchasedArray = gameState.userCart;

      let loggedUserId = localStorage.getItem("usertoken");
      console.log(loggedUserId);

      API.removeMoney({ id: loggedUserId, total: totalPrice }).then((res) => {
        if (res.data === "moneypass") {
          purchasedArray.forEach((game) => {
            API.deleteGame(game.id).then((res) => {
              console.log(res)
              M.toast({ html: "Purchase Complete!" });
              window.location.reload();
            });
          });
        } else {
          M.toast({ html: "Please add funds to purchase!" });
        }
      });

      // clears the cart of any games
      setGameState({ ...gameState, userCart: [] });
    } else {
      // toasti boi tellin how it be
      M.toast({ html: "Please Login to Purchase!" });
    }
  }

  return (
    <main className="the-main">
      <div className="container">
        <GameContext.Provider value={gameState}>
          <CentaurContext.Provider value={centaurState}>
            <BrowserRouter>
              <HeadBar />
              <Switch>
                <Route
                  exact
                  path="/"
                  component={(props) => <Login {...props} />}
                />
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
                    <Cart
                      {...props}
                      removeCart={removeFromCart}
                      purchaseCart={purchaseCart}
                    />
                  )}
                />
              </Switch>
            </BrowserRouter>
          </CentaurContext.Provider>
        </GameContext.Provider>

        <FootBar />
      </div>
    </main>
  );
}

export default App;
