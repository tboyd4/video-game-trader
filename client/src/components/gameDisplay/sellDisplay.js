import React, { useContext, useEffect } from "react";
import API from '../../utils/API'
import "./gameDisplay.css";
import GameContext from '../../utils/GameContext'

function SellDisplay(props) {

    const { testData } = useContext(GameContext);

//   displayGame = gameInfo => {
//     return {
//         image: gameInfo.aliases,
//         description: gameInfo.description,
//     }
// };

  // API.gbsearch()
  // .then(res => this.setState({ game: res.data.results.map(gameInfo => this.displayGame(gameInfo))  }))
  // .catch(err => console.log(err));


return (
  <div>
    {testData.map((game, i) => {
      return (
        <div className="row grey darken-2 game-style" key={i}>
            <div className="col s12 m6">
              <div className="card">
                <div className="card-image">
                  <img src={game.image} alt="hello"></img>
                </div>
              </div>
            </div>
            <div className="col s12 m6  ">
              <div className="card z-depth-0 black-text game-style grey darken-2">
                <div className="card-content green accent-3 text-content">
                  <p className="card-title text-spacing" id="title">
                    {game.title}
                  </p>
                </div>
                <div className="card-content green accent-3 text-content">
                  <p className="text-spacing" id="para">Released: {game.released}</p>
                  <p className="text-spacing" id="para">Price: {game.price}</p>
                  <p className="text-spacing" id="para">Game Details</p>
                  <p className="text-spacing" id="para">Game Details</p>
                </div>
                <div>
                  <a className="waves-effect waves-light green accent-3 black-text btn-large" onClick={() => props.addCart(game)}>Purchase</a>
                </div>
              </div>
            </div>
        </div>
      );
    })}
  </div>
);
};

export default SellDisplay;
