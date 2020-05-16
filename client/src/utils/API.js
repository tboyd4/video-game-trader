import axios from "axios";
const APIKEY = 'fbfa78cf2aaa01cee3f75a0d37c90ef5c6485c56';
const GBURL = 'http://www.giantbomb.com/api/search/?api_key=7e53054ef3aca388d30c89da7ff13d74588b01e4&format=json&query='

export default {
  multisearch: function (query) {
    return axios.get('https://www.pricecharting.com/api/products?t=' + APIKEY + '&q=' + query);
  },
  gbSearch: function (gameName) {
    return axios.get( GBURL + gameName + '&resources=game')
  }
};
