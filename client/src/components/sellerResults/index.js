import React, { Component, useContext } from "react";
// import API from "../../utils/API";
import Popup from "reactjs-popup";
import API from "../../utils/GamesAPI";
import SellDisplay from "../gameDisplay/sellDisplay";
import GameContext from "../../utils/GameContext";

// const { sellerData } = useContext(GameContext);

class SellerResults extends Component {
  constructor(props) {
    super(props);
    this.handleSave = this.handleSave.bind(this);
    this.state = {
      savedGames: {}
    };
  }

  componentDidMount() {
    this.sellerData = JSON.parse(localStorage.getItem('game'));
    let loggedid = localStorage.getItem('usertoken')

    if (localStorage.getItem('game')) {
      this.setState({
        id: this.sellerData.id,
        title: this.sellerData.title,
        console: this.sellerData.console,
        price: this.sellerData.price,
        user_Id: this.sellerData.user_Id
      })
    } else {
      let loggedid = localStorage.getItem('usertoken')
      this.setState({
        id: '',
        title: '',
        description: '',
        price: '',
        user_Id: loggedid
      })
    }
  }

  handleSave = (game) => {
    API.saveGame(game)
      .then((savedGame) =>
        this.setState({ savedGames: this.state.savedGames.concat([savedGame]) })
      )
      .catch((err) => console.error(err));
    console.log(game.title + "saved");
  };


  handleSave = (game) => {
    API.saveGame(game)
      .then((savedGame) =>
        this.setState({ savedGames: this.state.savedGames.concat([savedGame]) })
      )
      .catch((err) => console.error(err));
    localStorage.setItem(`${game.id}`, JSON.stringify(game))
    console.log(game.title + "saved");
  };

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
}

export default SellerResults;