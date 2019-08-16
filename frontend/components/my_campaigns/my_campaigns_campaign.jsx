import React, { Component } from 'react'

export default class MyCampaignsCampaign extends Component {
    render() {
        return (
            <div className="my-campaign">
                <img className="my-campaign-image" src={"my-campaign.png"} alt=""/>
                <div className="my-campaign-details">
                    <div className="simple-row-center-y">
                        <h2>My Campaign Title</h2>
                        <div className="my-campaign-draft-icon">Draft</div>
                    </div>
                    <div className="simple-row">
                        <h3>by</h3>
                        <h3 className="my-campaign-author">Author</h3>
                    </div>
                    <h4 className="my-campaign-campaign-id">Campaign ID: 2531731</h4>
                </div>
            </div>
        )
    }
}
