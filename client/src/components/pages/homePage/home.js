import React from 'react'

import API from "../../utils/API"
import GameDisplay from '../../gameDisplay/gameDisplay';
import SearchBar from "./SearchBar"


function loadGames() {
    API.multisearch(query)
      .then(res => setGames(res.data)
      )
      .catch(err => console.log(err));
    };

function Home () {
    return (
        <main>
            <h1>I am Home Page</h1>
            <GameDisplay />
            <SearchBar />
        </main>
    )
}

export default Home;