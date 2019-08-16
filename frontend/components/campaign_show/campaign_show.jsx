import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';

export default class CampaignShow extends Component {

    componentDidMount() {
        this.props.getCampaign(this.props.id);
        // debugger;
    }
    
    render() {
        let campaignDuration = <div></div>;
        let title = <div></div>;
        let funding = <div></div>;
        let fundingGoal = <div></div>;
        let image = <div></div>;
        let tagline = <div></div>;
        if(this.props.campaign) {
            debugger;
            title = <div>{this.props.campaign.title}</div>
            campaignDuration = <div>{this.props.campaign.campaign_duration}</div>
            funding = <div>{this.props.campaign.funding}</div>
            fundingGoal = <div>{this.props.campaign.funding_goal}</div>
            image = <img src={`${this.props.campaign.image_url}`} alt=""/>
            tagline = <div>{this.props.campaign.tagline}</div>
        }
        // debugger;
        return (

            <div>
                <NavBar />
                <h1>Campaign Show</h1>
                {image}
                <h1>{campaignDuration}</h1>
                <h1>LAST DIV</h1>
            </div>
        )
    }
}
