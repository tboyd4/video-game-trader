import React, { Component, useContext } from "react";
import API from "../../utils/API";
import Popup from "reactjs-popup";

import SellDisplay from "../gameDisplay/sellDisplay";
import GameContext from "../../utils/GameContext";

// const { sellerData } = useContext(GameContext);

class SellerResults extends Component {
  state = {
    savedGames: [],
  };

  componentDidMount() {
    // this.fuckingsearch();
  }

  handleSave = (game) => {
    if (this.state.savedGames.map((game) => game.id).includes(game.id)) {
      API.deleteBook(game.id)
        .then((deletedGame) =>
          this.setState({
            savedGames: this.state.savedGames.filter(
              (game) => game.id !== deletedGame.id
            ),
          })
        )
        .catch((err) => console.error(err));
    } else {
      API.saveGame(game)
        .then((savedGame) =>
          this.setState({
            savedGames: this.state.savedGames.concat([savedGame]),
          })
        )
        .catch((err) => console.error(err));
    }
  };

  // displayGame = gameInfo => {
  //     return {
  //         image: gameInfo.results.aliases,
  //         description: gameInfo.results.description,
  //     }
  // };

  // gbInfo = gameName => {
  //     API.gbsearch(gameName)
  //         .then(res => this.setState({ game: res.data.map(gameInfo => this.displayGame(gameInfo)),
  //             gameObject : [
  //                 title = results.name,
  //                 description = results.description,
  //                 image = results.image.medium_url,
  //             ],
  //         },)
  //         )
  //         sellerData.push(gameObject)
  //         .catch (err => console.log(err));
  // };

  // sellerData [{
  //     id: result.id,
  //     title: result.title,
  //     description : gameInfo.description,
  //     image: gameInfo.image.medium_url,
  //     price: result.price * .5
  // }]

  render() {
    return (
      <div>
        {!this.props.games.length ? (
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
                          {this.state.savedGames
                            .map((game) => game._id)
                            .includes(result._id)
                            ? "Unsave"
                            : "Save"}
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
  }
}

export default SellerResults;
