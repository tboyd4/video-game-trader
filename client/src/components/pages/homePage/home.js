import React, { useState, useEffect, useContext } from "react";
import GameDisplay from "../../gameDisplay/gameDisplay";
import SearchBar from "./SearchBar/SearchBar";
import GameContext from "../../../utils/GameContext";
import GamesAPI from "../../../utils/GamesAPI";

import './home.css'

function Home(props) {

// Setting our component's initial state
    const [games, setGames] = useState([]);

    useEffect(() =>  {
        GamesAPI.getGames()
        .then(res =>
            setGames(res.data))
            .catch(err => console.log(err));
    }, [])


    function searchGame(search) {
        GamesAPI.getGames(search)
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
        <main className="inner-cont">
            <SearchBar
                handleFormSubmit={handleFormSubmit}
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
  );
}

export default Home;
