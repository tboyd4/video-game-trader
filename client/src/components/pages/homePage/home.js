import React, { useState, useEffect } from "react";
import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import SearchResults from './SearchResults'
import gamesAPI from '../../../utils/gamesAPI'


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

<<<<<<< HEAD
export default Home;
=======
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
>>>>>>> 3da40c1f06665c43f571e201cda67e4fbc62cecf
