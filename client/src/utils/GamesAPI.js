import axios from "axios";

export default {
  // Gets all games
  getGames: function() {
      console.log("trying to get!")
    return axios.get("/api/games");
  },
  // Gets the games with the given id
  getGame: function(id) {
    return axios.get("/api/games/" + id);
  },
  // Deletes the games with the given id
  deleteGame: function(id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a game to the database
  saveGame: function(data) {
    return axios.post("/api/games", data);
  }
};
