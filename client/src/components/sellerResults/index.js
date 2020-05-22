import React, { useState, useContext } from "react";
// import API from "../../utils/API";
import Popup from "reactjs-popup";
import API from "../../utils/GamesAPI";
import SellDisplay from "../gameDisplay/sellDisplay";
import GameContext from "../../utils/GameContext";

// const { sellerData } = useContext(GameContext);

let checkingUser = localStorage.getItem("usertoken");


function SellerResults(props) {
  let { sellerData } = useContext(GameContext);


  // saves game to the Games database
  function handleSave(game) {
    API.saveGame(game)
      .then((savedGame) =>
        this.setState({ sellerData: this.state.sellerData.concat([savedGame]) })
      )
      .catch((err) => console.error(err));
    console.log(game.title + " saved");
    console.log(this.state.sellerData);
  };

  return (
    <div>
      {!sellerData.props.games.length ? (
        <h1 className="text-center">No Results to Display</h1>
      ) : (
        <div>
          {this.props.games.map((result) => (
            <div
              className="card card z-depth-0 black-text game-style grey darken-2 mb-3"
              key={result.id}
            >
              <div className="row">
                <div className="col-md-10">
                  <div className="card-body green accent-3">
                    <h5 className="card-title">{result.title}</h5>
                    <h6> Console: {result.console}</h6>
                    <p className="card-text">
                      Trade Value: {result.price * 0.5} Centaurs
                    </p>
                    <div>
                      <Popup
                        modal
                        trigger={
                          <a className="btn badge-pill btn-outline-dark mt-3">
                            View
                          </a>
                        }
                      >
                        {(close) => <SellDisplay close={close} />}
                      </Popup>
                      <button
                        onClick={() => this.handleSave(result)}
                        className="btn badge-pill btn-outline-warning mt-3 ml-3"
                      >
                        {/* {this.state.savedGames.map(game => game.id).includes(result.id) ? "Unsave" : "Save"} */}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
  //     .catch((err) => console.error(err));
  // } else {
  //   API.saveGame(game)
  //     .then((savedGame) =>
  //       this.setState({
  //         savedGames: this.state.savedGames.concat([savedGame]),
  //       })
  //     )
  //     .catch((err) => console.error(err));
}

export default SellerResults;