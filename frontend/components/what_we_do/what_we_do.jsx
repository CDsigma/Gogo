import React, { Component } from 'react'
import NavBar from '../nav_bar/nav_bar'
import ImageDiv from './image_div'
import RobotDiv from './robot_div'
import Journey from './journey'
import EmailDiv from './email_div'
import FavCampaigns from './fav_campaigns'
import ExploreInspire from './explore_inspired'
import Footer from '../footer/footer'

export default class WhatWeDo extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <ImageDiv />
                <RobotDiv />
                <Journey />
                <EmailDiv />
                <FavCampaigns />
                <ExploreInspire />
                <Footer />
            </div>
        )
    }
}
