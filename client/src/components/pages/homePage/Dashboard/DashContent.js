import React from 'react';
// import GamesAPI from '../../../../utils/GamesAPI';
// import GameDisplay from '../../../gameDisplay/gameDisplay'
import './DashContent.css';


function DashContent(props) {

  // const [featuredGames, setFeaturedGames] = useState([]);

  // useEffect(() => {
  //     GamesAPI.getGames()
  //       .then((res) => setFeaturedGames(res.data))
  //       .catch((err) => console.log(err));
  //   }, []);

  // const featuredlist = React.useMemo(() => {
  //   return featuredGames.map((game) => {
  //     return (
  //       <FeaturedDisplay
  //         key={game.id}
  //         title={game.title}
  //         console={game.console}
  //         price={game.price}
  //         year={game.year}
  //         game={game}
  //       />
  //     );
  //   });
  // }, [featuredGames]);

  return (
    <div class="row">
      <div className="col s12 featured">
        <h1 ClassName="header">FIND YOUR NEW FAVORITE GAME AT AN AFFORDABLE PRICE</h1>
      </div>
      <div className="col s12"></div>
      <div className="col s12"><h5>At Centaur Game Trading we facilitate everything you
      hate about buying and selling video games. No awkward
      haggling or face to face sales. Just buying and selling done easy.</h5>
      </div>
    </div>
  )
}


export default DashContent;