import axios from "axios";
const BASEURL = "https://www.pricecharting.com/api/products?t=";
const APIKEY = "fbfa78cf2aaa01cee3f75a0d37c90ef5c6485c56";

export default {
  search: function(query) {
    return axios.get(BASEURL + APIKEY + "&q=" + query);
  }
};
