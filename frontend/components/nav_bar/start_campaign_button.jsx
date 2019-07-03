import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class StartCampaignButton extends Component {
    render() {
        return (
            <div>
                <Link to="/start-a-campaign">
                    <button className="purple-hover-btn" id="nav-bar-start-campaign-button">Start a Campaign</button>
                </Link>
            </div>
        )
    }
}
