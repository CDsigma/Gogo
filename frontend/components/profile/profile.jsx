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

                <div className="profile-content-container">
                    <h1 className="profile-user-name-title">User's Name</h1>
                    <ProfileNavBar />
                
                    <div>
                        <img src="robot_profile_image.png" className="profile-full-profile-image"/>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
