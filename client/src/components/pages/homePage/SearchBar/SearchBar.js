import React from 'react'

function SearchBar(props) {
   
    return (
        <div class="nav-wrapper" >
            <form>
                <div className="input-field green accent-3">
                    <input
                     value={props.search}
                     onChange={props.handleInputChange}
                     id="search" 
                     type="search" 
                     required />
                    <label className="label-icon" for="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                </div>
            </form>
        </div>
    )
}

export default SearchBar;