import React from 'react'

function HomeNav(props) {

    return (
        <ul className="tabs">

        <li className="tab col s3"><a
        onClick={props.handleSearchToggle}
        href="#search" >search</a>
        </li>

        <li className="tab col s3"><a
        onClick={props.handleDashboardToggle}
        href="#dashboard">dashboard</a>
        </li>

      </ul>
    )
}

export default HomeNav;