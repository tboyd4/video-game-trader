import React, { useState, useEffect } from "react";

import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import SearchContext from '../../../utils/SearchContext'
import SearchResults from './SearchResults'
import API from '../../../utils/API'

    function Home(props) {

        const [search, setSearch] = useState({
            searchItem: '',
            result: {}
        });

        const searchGames = query => {
            API.search(query)
              .then(res => this.setSearch({ result: res.data }))
              .catch(err => console.log(err));
          };

        const handleInputChange = event => {
            setSearch({searchItem: event.target.value});
            
        };
        
        const handleFormSubmit = event => {
            const data = searchGames(search.searchItem);
            console.log(search.searchItem);
            console.log(data)
            event.preventDefault();
        };


        return (
            <SearchContext.Provider value={search}>
                <main>
                    <h1>I am Home Page</h1>
                    <SearchBar
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                    />

                    <SearchResults/>
                    <GameDisplay addCart={props.addCart} />
                </main>
            </SearchContext.Provider>
        )
    }

    export default Home;