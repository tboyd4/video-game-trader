import axios from "axios";

export default {
  //create user
  saveNewUser: function (query) {
    return axios.post("/register", query);
  },

  loginUser: function (query) {
    return axios.post("/signin", query);
  },

  logoutUser: function () {
    return axios.get("/api/logout");
  },
};
