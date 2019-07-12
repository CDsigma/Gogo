import React, { Component } from 'react'

export default class CampaignEditForm extends Component {
    render() {
        return (
            <div className="campaign-edit-form">
                <h3>Basics</h3>
                <p>Make a good first impression: introduce your campaign
                     objectives and entice people to learn more. This basic
                      information will represent your campaign on your campaign 
                      page, on your campaign card, and in searches.</p>

                <h4 className="campaign-edit-form-section-title">Campaign Title</h4>
                <h5>What is the title of your campaign?</h5>
                <input type="text" className="campaign-edit-form-input" placeholder="My Title"/>

                <h4 className="campaign-edit-form-section-title">Campaign Tagline</h4>
                <h5>Provide a short description that best describes your 
                    campaign to your audience.</h5>
                <input type="text" className="campaign-edit-form-input" placeholder="Tagline" />

                <h4 className="campaign-edit-form-section-title">Campaign Card Image</h4>
                <h5>Put in an image for your campaign</h5>
                <input type="text" className="campaign-edit-form-input" placeholder="Image Link Here" />

                <h4 className="campaign-edit-form-section-title">Location</h4>
                <h5>Choose the location where you are running the campaign. 
                    This location will be visible on your campaign page for 
                    your audience to see.</h5>
                <input type="text" className="campaign-edit-form-input" placeholder="Location" />

                <h4 className="campaign-edit-form-section-title">Campaign Duration</h4>
                <h5>How many days will you be running your campaign for? You 
                    can run a campaign for any number of days, with a 60 day 
                    duration maximum.</h5>
                <input type="text" className="campaign-edit-form-input" placeholder="Num Here" />
 
            </div>
        )
    }
}
