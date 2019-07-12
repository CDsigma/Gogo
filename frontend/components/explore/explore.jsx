import React, { Component } from 'react'
import NavBar from '../nav_bar/nav_bar'

export default class Explore extends Component {

    componentWillMount() {
        this.props.getCampaigns();
    }
    // componentDidMount() {
        
    //     this.props.getCampaigns();
    //     // debugger;
    // }

    render() {
        if(!this.props.campaigns) return null;
        // if (!this.campaign.title) return null;
        // debugger;
        let campaigns = this.props.campaigns.map(campaign => {
            // debugger;
            if (campaign.title && typeof campaign.title !== 'undefined') {
                // debugger;
                // return <li>{campaign.title}</li>
                return <div className="explore-individual-campaig-div"> 
                    <img src={"robot_profile_image.png"} alt=""/>
                    <div className="explore-individual-campaign-text-container">
                        <div className="explore-individual-campaign-funding">
                            funding
                        </div>
                        <h3 className="explore-individual-campaign-title">My Campaign Title</h3>
                        <h4 className="explore-individual-campaign-tagline">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur augue sem, dictum eu dui a, bibendum tristique dui. </h4>
                        </div>
                    </div>
            } else {
                debugger;
                return <div></div>
            }
        })
        return (
            <div>
                <NavBar />
                <div className="explore-campaigns-container">
                    {campaigns}
                </div>
            </div>
        )
    }
}
