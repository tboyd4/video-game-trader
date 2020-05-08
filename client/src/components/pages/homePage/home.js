import React, { useState, useEffect } from "react";

import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import SearchContext from '../../../utils/SearchContext'
import SearchResults from './SearchResults'

    function Home() {

        const [search, setSearch] = useState({
            result: ''
        });

        const handleInputChange = event => {
            setSearch({result: event.target.value});
            
        };
        
        const handleFormSubmit = event => {
            console.log(search.result);
            event.preventDefault();
        };

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

    export default Home;