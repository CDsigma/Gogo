import React, { Component } from 'react'

export default class ProfileRightSide extends Component {
    render() {
        return (
            <div className="profile-right-side">
                <div className="profile-right-side-profile-image">
                    <img src="user-default-profile-picture.png" className="profile-small-prof-image"/>
                    <h2>About Me</h2>
                </div>

                <div className="profile-right-side-details-row">
                    <h2>#</h2>
                    <h4> Campaigns</h4>
                </div>
                <h4># Comments</h4>
                <h4># Contributions</h4>
            </div>
        )
    }
}
