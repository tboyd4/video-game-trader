import React from 'react'

import GameDisplay from '../../gameDisplay/gameDisplay';
// import SearchBar from "./SearchBar"


function Home(props) {
    return (
        <main>
            <h1>I am Home Page</h1>
            {/* <SearchBar /> */}
            <GameDisplay addCart={props.addCart} />            
        </main>
    )
}

export default Home;