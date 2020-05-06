import axios from "axios";
const BASEURL = "https://www.pricecharting.com/api/products?t=";
const APIKEY = "fbfa78cf2aaa01cee3f75a0d37c90ef5c6485c56";

export default {
  multisearch: function(query) {
    return axios.get("https://www.pricecharting.com/api/products?t=" + APIKEY + "&q=" + query);
  },

  idsearch: function(query) {
    return axios.get("https://www.pricecharting.com/api/product?t=" + APIKEY + "&id=" + query)
  }
};
