const axios = require("axios");
const GBURL =
  "http://www.giantbomb.com/api/search/?api_key=7e53054ef3aca388d30c89da7ff13d74588b01e4&format=json&query=";

module.exports = function (app) {
  app.get("/api/images/:game", function (req, res) {
    axios.get(GBURL + req.params.game + "&resources=game").then((res) => {
      console.log(res.data);
    });
  });
};
