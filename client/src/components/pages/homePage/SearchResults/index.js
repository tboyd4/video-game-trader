import React, { useContext } from "react";
import SearchContext from "../../../../utils/SearchContext";
import "./style.css";

function SearchResults() {
  const {results} = useContext(SearchContext);
  return (
        <h2>{results}</h2>
      
  );
}
export default SearchResults;
