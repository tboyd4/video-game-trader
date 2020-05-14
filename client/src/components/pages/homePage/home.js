import React, { useState, useEffect } from "react";

import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import SearchResults from './SearchResults'
import gamesAPI from '../../../utils/GamesAPI'


function Home(props) {

    // Setting our component's initial state
    const [games, setGames] = useState([])
    const [gameDisplay, setGameDisplay] = useState({})


    // Load all games and store them with setGames
    useEffect(() => {
        loadGames()
        console.log(games)
    }, [])


    function loadGames() {
        gamesAPI.getGames()
        .then(res =>
        setGames(res.data))
        .catch(err => console.log(err));
    };

    function handleInputChange(event) {
        const setGames = event.target.value;
    };

    function handleFormSubmit(event) {
        event.preventDefault();
        console.log(games)
    };


    return (
        <main>
            <h1>I am Home Page</h1>
            <SearchBar
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
            />

            <SearchResults />
            <GameDisplay addCart={props.addCart} />
        </main>
    )
}

export default Home;
