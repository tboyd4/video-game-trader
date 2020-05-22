import React from 'react'

function HomeNav(props) {

    return (
        <ul className="tabs green accent-3" id="nav-mobile">

        <li className="tab col s3"><a 
        className="black-text"
        onClick={props.handleSearchToggle}
        href="#search" >search</a>
        </li>

        <li className="tab col s3"><a 
        className="black-text"
        onClick={props.handleDashboardToggle}
        href="#dashboard">dashboard</a>
        </li>

      </ul>
    )
}

export default HomeNav;