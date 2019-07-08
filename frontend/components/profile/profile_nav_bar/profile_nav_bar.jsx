import React, { Component } from 'react'

export default class ProfileNavBar extends Component {
    render() {
        return (
            <div className="profile-nav-bar-div">
                <button className="profile-nav-bar-div-option-selected">Profile</button>
                <button className="profile-nav-bar-div-option-not-selected">Campaigns</button>
                <button className="profile-nav-bar-div-option-not-selected">Contributions</button>
            </div>
        )
    }
}
