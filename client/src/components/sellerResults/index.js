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

        if (this.state.savedGames.map(book => game._id).includes(game._id)) {
            API.deleteBook(game._id)
                .then(deleteGame => this.setState({ savedGame: this.state.savedGames.filter(game => game._id !== deleteGame._id) }))
                .catch(err => console.error(err));
        } else {
            API.saveBook(game)
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
                                <div className="card mb-3" key={result._id}>
                                    <div className="row">
                                        <div className="col-md-2">
                                            <img alt={result.title} className="img-fluid" src={result.image} />
                                        </div>
                                        <div className="col-md-10">
                                            <div className="card-body">
                                                <h5 className="card-title">{result.title} for {result.console}</h5>
                                                <p className="card-text">{result.price}</p>
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