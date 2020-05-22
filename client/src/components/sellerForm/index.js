import React from "react";

import "./index.css"

function SellerForm(props){
return (
  <main>
  <div className="container">
  <form>
    <div className="form-group">
      <label htmlFor="search"><h2>Search for your Game</h2></label>
      <input className="green accent-3"
        onChange={props.handleInputChange}
        value={props.search}
        name="search"
        type="text"
        className="form-control white-text"
        id="search"
      />
      <button onClick={props.handleFormSubmit} className="waves-effect waves-light green accent-3 black-text btn">
        Search
        </button>
    </div>
  </form>
  </div>
  </main>
);
}

export default SellerForm;