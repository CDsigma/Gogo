import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Footer from '../footer/footer';
import SideBar from './side_bar';
import CampaignNavBar from './campaign_nav_bar';
import CampaignEditForm from './campaign_edit_form';

export default class CampaignEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
            project_description: '',
            tagline: '',
            image_url: '',
            location: '',
            campaign_duration: 1,
            launched: true
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props(this.state).then(this.props.closeModal);
        //.then(() => this.props.history.push('/user'));
    }

    render() {
        return (
            <div className="campaign-edit-simple-row">
                <div className="campaign-edit-left-side">
                    <SideBar />
                </div>
                <div className="campaign-edit-right-side">
                    <NavBar />
                    {/* <CampaignNavBar editCampaign={this.props.editCampaign}/> */}

                    <div className="campaign-nav-bar">
                        <h4 className="campaign-nav-bar-title"><b>Campaign/Basics</b></h4>
                        <button className="campaign-nav-bar-save-campaign-button">Save Campaign</button>
                        <button className="blue-hover-button" id="review-and-launch-button">REVIEW & LAUNCH</button>
                    </div>
                    {/* <CampaignEditForm /> */}

                    <div className="campaign-edit-form-gray-container">
                        <div className="campaign-edit-form">
                            <h2 className="campaign-edit-form-basic-title">Basics</h2>
                            <p>Make a good first impression: introduce your campaign
                                objectives and entice people to learn more. This basic
                                information will represent your campaign on your campaign
                        page, on your campaign card, and in searches.</p>

                            <h4 className="campaign-edit-form-section-title"><b>Campaign Title</b></h4>
                            <h5 className="campaign-edit-section-sub-text">What is the title of your campaign?</h5>
                            <input type="text" className="campaign-edit-form-input" placeholder="My Title" />

                            <h4 className="campaign-edit-form-section-title"><b>Campaign Tagline</b></h4>
                            <h5 className="campaign-edit-section-sub-text">Provide a short description that best describes your
                        campaign to your audience.</h5>
                            <input type="text" className="campaign-edit-form-input" placeholder="Tagline" />

                                <h4 className="campaign-edit-form-section-title"><b>Campaign Card Image</b></h4>
                            <h5 className="campaign-edit-section-sub-text">Put in an image for your campaign</h5>
                            <input type="text" className="campaign-edit-form-input" placeholder="Image Link Here" />

                                    <h4 className="campaign-edit-form-section-title"><b>Location</b></h4>
                            <h5 className="campaign-edit-section-sub-text">Choose the location where you are running the campaign.
                                This location will be visible on your campaign page for
                        your audience to see.</h5>
                            <input type="text" className="campaign-edit-form-input" placeholder="Location" />

                                        <h4 className="campaign-edit-form-section-title"><b>Campaign Duration</b></h4>
                            <h5 className="campaign-edit-section-sub-text">How many days will you be running your campaign for? You
                                can run a campaign for any number of days, with a 60 day
                        duration maximum.</h5>
                            <input type="text" className="campaign-edit-form-input" placeholder="Num Here" />

                        </div>
                    </div>
                    <div className="campaign-edit-save-continue-button-div">
                        <button className="blue-hover-button" id="save-and-continue-button"><b>Save & Continue</b></button>
                    </div>
                    <Footer />
                </div>
                
            </div>
        )
    }
}
                                    