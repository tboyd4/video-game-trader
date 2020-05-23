import React, { useState, useContext } from 'react';
import API from '../../../utils/API';
import SellerForm from '../../sellerForm/index';
import SellerResults from '../../sellerResults/index'
import GamesAPI from '../../../utils/GamesAPI'
import GameContext from "../../../utils/GameContext";


class BuySell extends React.Component {

        // sellerData  = useContext(GameContext);
        sellerData;
        constructor(props) {
            super(props);
            this.state = {
                games: []
            };
        }
    
    
    
        componentDidMount() {
            this.sellerData = JSON.parse(localStorage.getItem('game'));
    
            if (localStorage.getItem('game')) {
                this.setState({
                    id: this.sellerData.id,
                    title: this.sellerData.title,
                    console: this.sellerData.console,
                    price: this.sellerData.price,
                    userid: localStorage.getItem('usertoken')
                })
            } else {
                this.setState({
                    id: '',
                    title: '',
                    console: '',
                    price: '',
                })
            }
        }

  makeGame = (gameData) => {
    return {
      id: gameData.id,
      title: gameData["product-name"],
      console: gameData["console-name"],
      price: gameData["loose-price"],
    };
  };

  //send the original game object and then the new image to add to it here
  // imageGame = (gameData, image) => {
  //   return { ...gameData, image: image };
  // };

  searchGames = (query) => {
    API.multisearch(query)
      .then((res) =>
        this.setState({
          games: res.data.products
            .slice(0, 20)
            .map((game) => this.makeGame(game)),
        })
      )
      .catch((err) => console.log(err));
  };

  //when you get the
  // gameImages = (games) => {
  //   games.forEach((game) => {
  //     GamesAPI.getImages(game.title)
  //       .then((res) => {
  //         console.log(res);
  //         this.imageGame(game, res.image);
  //       })
  //       .catch((err) => console.log(err));
  //   });
  // };

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    this.searchGames(this.state.search);
  };

  render() {
    // this.gameImages(this.state.games);

    if (this.state.games < 1) {
      return (
        <main className="verticalHeight">
          <div>
            <SellerForm
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <div className="container">
              <h2>Results</h2>
              <SellerResults games={this.state.games} />
            </div>
          </div>
        </main>
      );
    } else {
      return (
        <main>
          <div>
            <SellerForm
              search={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
            <div className="container">
              <h2>Results</h2>
              <SellerResults games={this.state.games} />
            </div>
          </div>
        </main>
      );
    }
  }
}

export default BuySell;
