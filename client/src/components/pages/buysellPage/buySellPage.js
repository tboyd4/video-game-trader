import React from 'react'
import API from '../../../utils/API'
import SellDisplay from '../../gameDisplay/sellDisplay'
import SearchBar from "./SearchBar/SearchBar"
import SearchContext from '../../../utils/SearchContext'
import SearchResults from './SearchResults'


function BuySell() {
    
    const [search, setSearch] = useState({
        result: ''
    });

    componentDidMount() {
        this.searchGames("The Matrix");
    }

    searchGames = query => {
        API.multisearch(query)
            .then(res => this.setState({ result: res.data }))
            .catch(err => console.log(err));
    };

    const handleInputChange = event => {
        event.preventDefault();
        setSearch({ result: event.target.value });
        console.log(search.result)
    };  

    const handleFormSubmit = event => {
        event.preventDefault();
    };

    return (
        <SearchContext.Provider value={search}>
            <main>
                <h1>What games would you like to trade?</h1>
                <SearchBar
                    handleFormSubmit={handleFormSubmit}
                    handleInputChange={handleInputChange}
                    results={search}
                />
                <SearchResults />
                <SellDisplay />
            </main>
        </SearchContext.Provider>
    )
}

export default BuySell;