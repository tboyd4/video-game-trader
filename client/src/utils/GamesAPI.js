import axios from "axios";

export default {
  // Gets all games
  getGames: function(search) {
      console.log("trying to get!", search)
    return axios.get(`/api/games?${search && search.length > 3 ? "search=" +search : ""}`);
  },
  // Gets the games with the given id
  getGame: function (id) {
    console.log("trying to get " + id);
    return axios.get("/api/games/" + id);
  },
  // Deletes the games with the given id
  deleteGame: function (id) {
    return axios.delete("/api/games/" + id);
  },
  // Saves a game to the database
  saveGame: function (gameData) {
    return axios.post("/api/games", gameData).then((result) => result.data);
  },
  savedGames: function () {
    return axios.get("/api/game").then((result) => result.data);
  },

  // money functions
  removeMoney: function (payload) {
    return axios.post("/api/removemoney", payload).then((result) => result);
  },
};
