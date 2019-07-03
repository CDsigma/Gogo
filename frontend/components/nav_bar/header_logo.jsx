import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//import logo from '/Users/warrington/Documents/App Academy/Assesments/testProjects/IndieGoGo/app/assets/images/indieGoGoHeaderLogo.png'

export default class HeaderLogo extends Component {
    render() {
        return (
            <Link to="/">
                <img className="header-logo" src="http://www.freelogovectors.net/wp-content/uploads/2018/04/indiegogologo_freelogovectors.net_.png" alt="IndieGoGo Logo" />
            </Link>
        )
    }
}
