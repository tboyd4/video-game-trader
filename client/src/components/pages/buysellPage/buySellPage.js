import React from 'react'
import API from '../../../utils/API'
import SellDisplay from '../../gameDisplay/sellDisplay'
import SearchBar from "./SearchBar/SearchBar"
import SearchContext from '../../../utils/SearchContext'
import SearchResults from './SearchResults'


class BuySell extends React.Component {
    state = {
        value: "",
        books: []
    };
    componentDidMount() {
        this.searchGames("The Matrix");
    }

    makeGame = game => {
        return {
            id: game.id,
            title: game.product-name,
            console: game.console-name,
        }
    };


    // function getGameData = game.id => {
    //     API.idsearch(game.id)
    //      .then(res => this.setState({ result: res.data}))
    //     .catch(err => console.log(err));
    // };
 

    searchGames = query => {
        API.multisearch(query)
            .then(res => this.setState({ result: res.data.items.map(
                game => this.makeGame(game))
             }))
            .catch(err => console.log(err));
    };

    handleInputChange = event => {
        event.preventDefault();
        setSearch({ result: event.target.value });
        console.log(search.result)
    };  

    handleFormSubmit = event => {
        event.preventDefault();
    };

render() {
    return (
        <SearchContext.Provider value={search}>
            <main>
                <h1>I am Home Page</h1>
                <SearchBar
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    results={search}
                />

                <SearchResults/>
                <GameDisplay />
            </main>
        </SearchContext.Provider>
    )
}
}

export default BuySell;