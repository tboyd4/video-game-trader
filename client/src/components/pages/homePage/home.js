import React, { useState } from "react";

import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import SearchContext from '../../../utils/SearchContext'
import SearchResults from './SearchResults'

    function Home(props) {

        const [search, setSearch] = useState({
            result: ''
        });

        const handleInputChange = event => {
            event.preventDefault();
            setSearch({result: event.target.value});
            console.log(search.result)
        };
        
        const handleFormSubmit = event => {
            event.preventDefault();
        };

        return (
            <SearchContext.Provider value={search}>
                <main>
                    <SearchBar
                        handleFormSubmit={handleFormSubmit}
                        handleInputChange={handleInputChange}
                        results={search}
                    />

                    <SearchResults/>
                    <GameDisplay addCart={props.addCart} />
                </main>
            </SearchContext.Provider>
        )
    }

    export default Home;