import React, { Component } from 'react'

export default class CampaignNavBar extends Component {
    render() {
        return (
            <div className="campaign-nav-bar">
                <h4 className="campaign-nav-bar-title">Campaign/Basics</h4>
                <button className="campaign-nav-bar-save-campaign-button">Save Campaign</button>
                <button className="blue-hover-button" id="review-and-launch-button">REVIEW & LAUNCH</button>
            </div>
        )
    }
}
