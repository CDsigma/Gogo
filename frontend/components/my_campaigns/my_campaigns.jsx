import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Footer from '../footer/footer';
import EditBar from '../profile/edit_bar/edit_bar';
import ProfileNavBar from '../profile/profile_nav_bar/profile_nav_bar';
import Campaign from './my_campaigns_campaign';

export default class MyCampaigns extends Component {
    render() {
        let currentSessionId = store.getState().session.id
        let firstName = store.getState().entities.user[currentSessionId].first_name
        let lastName = store.getState().entities.user[currentSessionId].last_name
        return (
            <div>
                <NavBar />
                <EditBar />
                <div className="profile-content-container">
                    <h1 className="profile-user-name-title">{firstName} {lastName}</h1>
                    <ProfileNavBar selected="campaigns"/>
                    <h2 className="my-campaigns-title"><b>Campaigns I'm On</b></h2>
                    <Campaign />
                </div>
                <Footer />
            </div>
        )
    }
}
