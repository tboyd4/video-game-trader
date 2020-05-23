import React from 'react'

function SearchBar(props) {

    return (
        <div className="nav-wrapper" >
            <h1>Search Our Games</h1>
            <form>
                <div className="input-field green accent-3">
                    <input
                        onChange={props.handleFormSubmit}
                        id="search"
                        type="search"
                        required />
                    <label className="label-icon" htmlFor="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;