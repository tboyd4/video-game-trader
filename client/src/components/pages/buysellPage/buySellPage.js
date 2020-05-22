import React from 'react';
import API from '../../../utils/API';
import SellerForm from '../../sellerForm/index';
import SellerResults from '../../sellerResults/index'

// const { sellerData } = useContext(GameContext);


class BuySell extends React.Component {
    state = {
        value: 'Game Search',
        games: []
    };
    
    


    componentDidMount() {
        this.searchGames();
    }

    makeGame = gameData => {
        return {
            id: gameData.id,
            title: gameData['product-name'],
            console: gameData['console-name'],
            price: gameData['loose-price']
        }
        

                
    };


    searchGames = query => {
        API.multisearch(query)
            .then(res => this.setState({ games: res.data.products.map(gameData => this.makeGame(gameData)) 
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