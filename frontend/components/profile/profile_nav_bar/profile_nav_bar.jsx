import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class ProfileNavBar extends Component {
    render() {
        let profileButton = <button className="profile-nav-bar-div-option-not-selected">Profile</button>
        if(this.props.selected === 'profile') {
            profileButton = <button className="profile-nav-bar-div-option-selected">Profile</button>
        }

        let campaignsButton = <button className="profile-nav-bar-div-option-not-selected">Campaigns</button>
        if (this.props.selected === 'campaigns') {
            campaignsButton = <button className="profile-nav-bar-div-option-selected">Campaigns</button>
        }

        let contributionsButton = <button className="profile-nav-bar-div-option-not-selected">Contributions</button>
        if (this.props.selected === 'contributions') {
            campaignsButton = <button className="profile-nav-bar-div-option-selected">Contributions</button>
        }

        let currentUserId = store.getState().entities.user[1].id
        return (
            <div className="profile-nav-bar-div">
                <Link to={`/users/${currentUserId}`}>
                {   profileButton}
                </Link>

                <Link to={`/users/${currentUserId}/campaigns`}>
                    {campaignsButton}
                </Link>
                {contributionsButton}
            </div>
        )
    }
}
