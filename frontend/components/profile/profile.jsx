import React, { Component } from 'react'
import NavBar from '../nav_bar/nav_bar'
import EditBar from './edit_bar/edit_bar'
import Footer from '../footer/footer'
import ProfileNavBar from './profile_nav_bar/profile_nav_bar'

export default class Profile extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <EditBar />
                <h1>User's Name</h1>
                <ProfileNavBar />
                <Footer />
            </div>
        )
    }
}
