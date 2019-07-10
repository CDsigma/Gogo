import React, { Component } from 'react'
import NavBar from '../nav_bar/nav_bar'
import CrowdFundingSelect from './crowdfunding_select'
import Footer from '../footer/footer'

export default class StartACampaign extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <CrowdFundingSelect />
                <Footer />
            </div>
        )
    }
}
