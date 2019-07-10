import React, { Component } from 'react'
import CrowdFundingOptions from './crowd_funding_options';

export default class CrowdFundingSelect extends Component {
    render() {
        return (
            <div className="crowd-funding-select">
                <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/Crowdfunding_robot.svg" className="crowd-funding-select-robot-image" />
                <h1 className="crowd-funding-select-title">Welcome to Gogo</h1>
                <h2 className="crowd-funding-select-sub-title">What are you crowdfunding for?</h2>
                <CrowdFundingOptions />
                <p className="crowd-funding-select-disclamer-paragrapgh">
                    All Gogo projects must provide banking information, a government-issued ID, location, and tax information. This information is used to prevent fraud, comply with the law, and disburse project funds.
                </p>
            </div>
        )
    }
}
