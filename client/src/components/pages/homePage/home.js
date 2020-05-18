import React, { useState, useEffect, useContext } from "react";
import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import GameContext from "../../../utils/GameContext";
import gamesAPI from "../../../utils/GamesAPI";

function Home(props) {

    // Setting our component's initial state
    const [games, setGames] = useState([]);

    useEffect( () =>  {
        gamesAPI.getGames()
        .then(res =>
            setGames(res.data))
            .catch(err => console.log(err));
    }, [])


    function searchGame(search) {
        gamesAPI.getGames(search)
        .then(res =>
        setGames(res.data))
        .catch(err => console.log(err));
        };

    // const handleInputChange = event => {
    //     const search = event.target.value;
    //   };

    const handleFormSubmit = event => {
        event.preventDefault();
        const search = event.target.value;
        searchGame(search);
        // searchGame(games)
        console.log(search)
    };


    return (
        <GameContext.Provider value={games}>
        <main>
            <h1>I am a pretty centaur. Hear me roar.</h1>
            <SearchBar
                handleFormSubmit={handleFormSubmit}
                title={games.title}
                // handleInputChange={handleInputChange}
            />

            {games.map(game => (
            <GameDisplay 
            key={game.id}
            title={game.title}
            console={game.console}
            price={game.price}
            year={game.year}
            image={game.image}
            addCart={props.addCart}
            game={game}
            //  
            />
            ))}

        </main>
        </GameContext.Provider>
    )
}

export default Home;
