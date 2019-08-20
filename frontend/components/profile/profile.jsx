import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import EditBar from './edit_bar/edit_bar';
import Footer from '../footer/footer';
import ProfileNavBar from './profile_nav_bar/profile_nav_bar';
import ProfileRightSide from './profile_right_side';

export default class Profile extends Component {
    render() {
        // debugger;
        let currentSessionId = store.getState().session.id
        let firstName = store.getState().entities.user[currentSessionId].first_name
        let lastName = store.getState().entities.user[currentSessionId].last_name
        return (
            <div className="profile-page-container">
                <NavBar />
                {/* <EditBar /> */}

                <div className="profile-content-container">
                    <h1 className="profile-user-name-title">{firstName} {lastName}</h1>
                    <ProfileNavBar selected='profile'/>
                
                    <div className="profile-row">
                        <img src="robot_profile_image.png" className="profile-full-profile-image"/>
                        <ProfileRightSide />
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
