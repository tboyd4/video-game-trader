import React from 'react';
import API from '../../../utils/API';
import SellerForm from '../../sellerForm/index';
import SellerResults from '../../sellerResults/index'


class BuySell extends React.Component {
    state = {
        value: "",
        games: []
    };
    
    componentDidMount() {
        this.searchGames();
    }

    makeGame = gameData => {
        return {
            id: gameData.products.id,
            title: gameData.products.name,
            console: gameData.console,
            value: gameData.products.loose.price
        }
    };


    // function getGameData = game.id => {
    //     API.idsearch(game.id)
    //      .then(res => this.setState({ result: res.data}))
    //     .catch(err => console.log(err));
    // };


    searchGames = query => {
        API.multisearch(query)
            .then(res => this.setState({
                result: res.data.items.map(gameData => this.makeGame(gameData))
            }))
            .catch(err => console.log(err));
    };

    handleInputChange =event => {
        const { name, value } = event.target;
        this.setState({[name]: value});
      }; 
    

      handleFormSubmit = event => {
        event.preventDefault();
        this.searchGames(this.state.search);
    };


    render() {
        return (
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
        )
    }
}

export default BuySell; 