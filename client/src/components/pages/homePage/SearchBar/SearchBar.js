import React from 'react'

function SearchBar(props) {

    // database call
    // .then( res => {
            // let results = res
    //}   
    //)
   
    return (
        <div className="nav-wrapper" >
            <form>
                <div className="input-field green accent-3">
                    <input
                     value={props.search}
                     onChange={props.handleInputChange}
                     id="search" 
                     type="search" 
                     required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
        </div>


        // <GameDisplay data={results} />
    )
}

export default SearchBar;