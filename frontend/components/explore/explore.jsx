import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import ExploreHeader from './explore_header';
import { Link } from 'react-router-dom';
import ProgressBar from './explore_progress_bar/explore_progress_bar';
import Clock from './clock';

export default class Explore extends Component {

    // componentWillMount() {
    //     this.props.getCampaigns();
    // // }
    componentDidMount() {
        
        this.props.getCampaigns();
        // debugger;
    }

    render() {
        // debugger;
        if(!this.props.campaigns) return null;
        // if (!this.campaign.title) return null;
        // debugger;
        let campaigns = this.props.campaigns.map((campaign, i, j) => {
            // debugger;
            if(!(campaign.id <= 5 && i === j.length-1)) {
            if (campaign && campaign.title && typeof campaign.title !== 'undefined') {
                // debugger;
                // return <li>{campaign.title}</li>
                if(campaign.launched == true) {
                    // if (campaign.image_url) {
                    //     let imageLink = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.netlifyusercontent.com%2Fassets%2F344dbf88-fdf9-42bb-adb4-46f01eedd629%2F242ce817-97a3-48fe-9acd-b1bf97930b01%2F09-posterization-opt.jpg&f=1";
                    // } else {
                    // let imageLink = "https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.netlifyusercontent.com%2Fassets%2F344dbf88-fdf9-42bb-adb4-46f01eedd629%2F242ce817-97a3-48fe-9acd-b1bf97930b01%2F09-posterization-opt.jpg&f=1";
                    // }
                    // debugger
                    return (
                        <Link to={`/${campaign.id}/show`}>
                            <div className="explore-individual-campaig-div"> 
                                {/* <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.netlifyusercontent.com%2Fassets%2F344dbf88-fdf9-42bb-adb4-46f01eedd629%2F242ce817-97a3-48fe-9acd-b1bf97930b01%2F09-posterization-opt.jpg&f=1" alt=""/> */}
                                <img className="explore-individual-campaign-image" src={`${campaign.image_url}`} alt=""/>
                                <div className="explore-individual-campaign-text-container">
                                    <div className="explore-individual-campaign-funding">
                                        funding
                                    </div>
                                    <h3 className="explore-individual-campaign-title">{campaign.title}</h3>
                                    <h4 className="explore-individual-campaign-tagline">{campaign.tagline}</h4>
                                </div>
                                <div className="explore-funding-section">
                                    <div className="explore-funding-row">
                                        <div className="explore-individual-funding-container">
                                            <div className="explore-individual-funding-amount">{campaign.funding}</div>
                                             USD raised
                                         </div>
                                        <div>{Math.floor((campaign.funding/campaign.funding_goal)*100)}%</div>
                                    </div>
                                    <ProgressBar percentage={Math.floor((campaign.funding / campaign.funding_goal) * 100)}/>
                                </div>
                                <div className="explore-individual-campaign-days-left">
                                    <Clock />
                                    {campaign.campaign_duration} days left
                                </div>
                            </div> 
                        </Link>
                    )
                } else {
                    return <div></div>
                }
            } else {
                // debugger;
                return <div></div>
            }
        }
        })
        return (
            <div>
                <NavBar />
                <ExploreHeader />
                <div className="explore-campaigns-container">
                    {campaigns}
                </div>
            </div>
        )
    }
}
