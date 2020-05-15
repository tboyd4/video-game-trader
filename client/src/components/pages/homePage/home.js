import React, { useState } from "react";
import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import GameContext from "../../../utils/GameContext";
// import gamesAPI from "../../../utils/gamesAPI";

function Home(props) {

    // Setting our component's initial state
    const [games, setGames] = useState([
        {
            title: "Zelda Ocarina of Time",
            console: "Nintendo 64",
            price: 50,
            year: 1996,
            image: "http://localhost:3000/images/zeldaOcarina.png"
        },

        {
            title: "Zelda Ocarina of Time",
            console: "Nintendo 64",
            price: 50,
            year: 1996,
            image: "http://localhost:3000/images/zeldaOcarina.png"
        },

        {
            title: "Zelda Ocarina of Time",
            console: "Nintendo 64",
            price: 50,
            year: 1996,
            image: "http://localhost:3000/images/zeldaOcarina.png"
        },

        {
            title: "Zelda Ocarina of Time",
            console: "Nintendo 64",
            price: 50,
            year: 1996,
            image: "http://localhost:3000/images/zeldaOcarina.png"
        },

        {
            title: "Zelda Ocarina of Time",
            console: "Nintendo 64",
            price: 50,
            year: 1996,
            image: "http://localhost:3000/images/zeldaOcarina.png"
        }

    ]);


    // function searchGame() {
    //     gamesAPI.getGames()
    //     .then(res =>
    //     setGames(res.data))
    //     .catch(err => console.log(err));
    // };

    const handleInputChange = event => {
      };

    function handleFormSubmit(event) {
        event.preventDefault();
        // searchGame(games)
        // console.log(games)
    };


    return (
        <GameContext.Provider value={games}>
        <main>
            <h1>I am a pretty centaur. Hear me roar.</h1>
            <SearchBar
                handleFormSubmit={handleFormSubmit}
                handleInputChange={handleInputChange}
            />

            {games.map(game => (
            <GameDisplay 
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
