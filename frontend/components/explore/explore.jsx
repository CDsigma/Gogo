import React, { Component } from 'react'
import NavBar from '../nav_bar/nav_bar'

export default class Explore extends Component {

    componentDidMount() {
        
        this.props.getCampaigns();
        // debugger;
    }

    render() {
        if(!this.props.campaigns) return null;
        debugger;
        let campaigns = this.props.campaigns.map(campaign => (
            <li>{campaign.title}</li>
        ))
        return (
            <div>
                <NavBar />
                <h1>Explore Component</h1>
                <ul>
                    {campaigns}
                </ul>
            </div>
        )
    }
}
