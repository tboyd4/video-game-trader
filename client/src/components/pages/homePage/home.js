import React, { useState, useEffect } from "react";
import GameDisplay from "../../gameDisplay/gameDisplay";
import SearchBar from "./SearchBar/SearchBar";
import GamesAPI from "../../../utils/GamesAPI";
import HomeNav from "./HomeNav/HomeNav";
import Dashboard from "./Dashboard/Dashboard";

import "./home.css";

function Home(props) {
  // Setting our component's initial state
  const [games, setGames] = useState([]);
  const [nav, setNav] = useState({ dashboard: true });

  useEffect(() => {
    GamesAPI.getGames()
      .then((res) => setGames(res.data))
      .catch((err) => console.log(err));
  }, []);

  let activeSearch = false;

  function searchGame(search) {
    console.log("search games...", search);
    GamesAPI.getGames(search)
      .then((res) => {
        console.log("GAMESBACK:", res.data);
        setGames(res.data);
      })
      .catch((err) => console.log("ERRUH:", err));
    activeSearch = true;
  }

  //submits search form
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const search = event.target.value;
    searchGame(search);
    // searchGame(games)
    console.log(search);
  };

  //handles switching between tabs
  const handleDashboardToggle = React.useCallback((event) => {
    setNav({ dashboard: true });
  }, []);

  const handleSearchToggle = React.useCallback((event) => {
    setNav({ dashboard: false });
  }, []);

  const gamelist = React.useMemo(() => {
    return games.map((game) => {
      return (
        <GameDisplay
          key={game.id}
          title={game.title}
          console={game.console}
          price={game.price}
          year={game.year}
          image={game.image}
          addCart={props.addCart}
          game={game}
        />
      );
    });
  }, [games]);

  if (gamelist.length < 1) {
    return (
      <main className="verticalHeight">
        <HomeNav
          handleSearchToggle={handleSearchToggle}
          handleDashboardToggle={handleDashboardToggle}
        />

        {nav.dashboard === false ? (
          <>
            <SearchBar handleFormSubmit={handleFormSubmit} />

            {gamelist}
          </>
        ) : (
          <Dashboard />
        )}
      </main>
    );
  } else
    return (
      <main>
        <HomeNav
          handleSearchToggle={handleSearchToggle}
          handleDashboardToggle={handleDashboardToggle}
        />

        {nav.dashboard === false ? (
          <>
            <SearchBar handleFormSubmit={handleFormSubmit} />

            {gamelist}
          </>
        ) : (
          <Dashboard />
        )}
      </main>
    );
}

export default Home;
