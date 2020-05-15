import React, { Component } from "react";
import API from "../../utils/API";

class SellerResults extends Component {

    state = {
        savedGames: [],
    }

    componentDidMount() {
        // API.savedGames()
        //     .then(savedGames => this.setState({ savedGames: savedGames }))
        //     .catch(err => console.error(err));
    }

    handleSave = game => {

        if (this.state.savedGames.map(game => game.id).includes(game.id)) {
            API.deleteBook(game.id)
                .then(deletedGame => this.setState({ savedGames: this.state.savedGames.filter(game => game.id !== deletedGame.id) }))
                .catch(err => console.error(err));
        } else {
            API.saveGame(game)
                .then(savedGame => this.setState({ savedGames: this.state.savedGames.concat([savedGame]) }))
                .catch(err => console.error(err));
        }
    }


    render() {
        return (
            <div>
                {!this.props.games.length ? (
                    <h1 className="text-center">No Results to Display</h1>
                ) : (
                        <div>
                            {this.props.games.map(result => (
                                <div className="card card z-depth-0 black-text game-style grey darken-2 mb-3" key={result.id}>
                                    <div className="row">
                                        <div className="col-md-10">
                                            <div className="card-body green accent-3">
                                                <h5 className="card-title">{result.title}</h5>
                                                  <h6> Console: {result.console}</h6>
                                                <p className="card-text">Trade Value: {result.price * .5} Centaurs</p>
                                                <div>
                                                    <a href={result.link} className="btn badge-pill btn-outline-dark mt-3">View</a>
                                                    <button onClick={() => this.handleSave(result)} 
                                                    className="btn badge-pill btn-outline-warning mt-3 ml-3" >
                                                        {this.state.savedGames.map(game => game._id).includes(result._id) ? "Unsave" : "Save"}
                                                    </button>
                                                </div> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
            </div>
        )
    }
}

export default SellerResults; 