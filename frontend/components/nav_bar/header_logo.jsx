import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import logo from '/Users/warrington/Documents/App Academy/Assesments/testProjects/IndieGoGo/app/assets/images/gogoIcon.png'

export default class HeaderLogo extends Component {
    render() {
        return (
            <Link to="/">
                <img className="header-logo" src={"gogoIcon.png"} alt="GoGo Logo" />
            </Link>
        )
    }
}
