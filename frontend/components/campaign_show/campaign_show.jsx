import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import ProgressBar from './campaign_show_progress_bar/campaign_show_progress_bar';

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
        let percentFundedDiv = <div></div>;
        let percentFunded = 0;
        let description = <div></div>;

        if(this.props.campaign) {
            // debugger;
            title = <div>{this.props.campaign.title}</div>;
            campaignDuration = <div>{this.props.campaign.campaign_duration}</div>;
            funding = <div>{this.props.campaign.funding}</div>;
            fundingGoal = <div>{this.props.campaign.funding_goal}</div>;
            image = <img className="show-campaign-image-container" src={`${this.props.campaign.image_url}`} alt=""/>;
            tagline = <div>{this.props.campaign.tagline}</div>;
            percentFundedDiv = <div>{Math.floor((this.props.campaign.funding / this.props.campaign.funding_goal)*100)}</div>;
            // debugger;
            percentFunded = Math.floor((this.props.campaign.funding / this.props.campaign.funding_goal) * 100);
            description = <div>{this.props.campaign.project_description}</div>
        }
        // debugger;
        return (

            <div>
                <NavBar />
                <div className="show-campaign-content-container">
                    <div>
                        {image}
                    </div>
                    <div className="show-campaign-right-side">
                        <h4 className="show-campaign-funding-label">funding</h4>
                        <h2 className="show-campaign-title">{title}</h2>
                        <h3 className="show-campaign-tagline">{tagline}</h3>
                        
                        <div>
                            <div className="show-campaign-progress-above-bar">
                                <div className="show-campaign-progress-funding">
                                    <div className="show-campaign-progress-funding-amount">
                                        ${funding}
                                    </div> 
                                    <div className="show-campaign-progress-funding-currency">
                                        USD
                                    </div>
                                </div>
                            </div>
                            <ProgressBar percentage={percentFunded}/>
                            <div className="show-campaign-progress-under-bar">
                                <div>
                                    <div className="simple-row">
                                        {percentFundedDiv}% of ${fundingGoal}
                                    </div>
                                </div>
                                <div className="show-campaign-campaign-duration">
                                    <div className="show-campaign-campaign-duration-days"><b>{campaignDuration}</b></div>
                                    <div className="show-campaign-campaign-duration-label">days left</div>
                                </div>
                            </div>
                        </div>
                        <button onClick={() => this.props.openModal('contribute')} className="color-button" id="show-campaign-back-it-button"><b>BACK IT</b></button>
                    </div>
                    
                </div>
                {/* <div className="show-campaign-desc-section">
                    <div className="show-campaign-section-title">Overview</div>
                    <div className="show-campaign-desc-text">{description}</div>
                </div> */}
            </div>
        )
    }
}
