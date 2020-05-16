import React, { useState, useEffect, useContext } from "react";
import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar/SearchBar"
import GameContext from "../../../utils/GameContext";
import gamesAPI from "../../../utils/gamesAPI";

function Home(props) {

    // Setting our component's initial state
    const [games, setGames] = useState([
        // {
        //     title: "Zelda Ocarina of Time",
        //     console: "Nintendo 64",
        //     price: 50,
        //     year: 1996,
        //     image: "http://localhost:3000/images/zeldaOcarina.png"
        // },

        // {
        //     title: "Zelda Ocarina of Time",
        //     console: "Nintendo 64",
        //     price: 50,
        //     year: 1996,
        //     image: "http://localhost:3000/images/zeldaOcarina.png"
        // },

        // {
        //     title: "Zelda Ocarina of Time",
        //     console: "Nintendo 64",
        //     price: 50,
        //     year: 1996,
        //     image: "http://localhost:3000/images/zeldaOcarina.png"
        // },

        // {
        //     title: "Zelda Ocarina of Time",
        //     console: "Nintendo 64",
        //     price: 50,
        //     year: 1996,
        //     image: "http://localhost:3000/images/zeldaOcarina.png"
        // },

        // {
        //     title: "Zelda Ocarina of Time",
        //     console: "Nintendo 64",
        //     price: 50,
        //     year: 1996,
        //     image: "http://localhost:3000/images/zeldaOcarina.png"
        // }

    ]);

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
            <h1>I am Home Page</h1>
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
