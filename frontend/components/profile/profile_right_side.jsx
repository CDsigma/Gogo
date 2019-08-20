import React, { Component } from 'react'

export default class ProfileRightSide extends Component {
    render() {
        return (
            <div className="profile-right-side">
                <div>
                    <div className="profile-right-side-profile-image">
                        <img src="user-default-profile-picture.png" className="profile-small-prof-image"/>
                        <h2 className="profile-right-side-profile-title">About Me</h2>
                    </div>

                    {/* <div className="profile-right-side-details-row">
                        <h2>#</h2>
                        <h4 className="profile-right-side-details-row-description"> Campaigns</h4>
                    </div>
                    <div className="profile-right-side-details-row">
                        <h2>#</h2>
                        <h4 className="profile-right-side-details-row-description">Comments</h4>
                    </div>
                    <div className="profile-right-side-details-row">
                        <h2>#</h2>
                        <h4 className="profile-right-side-details-row-description">Contributions</h4>
                    </div> */}
                </div>
            </div>
        )
    }
}
