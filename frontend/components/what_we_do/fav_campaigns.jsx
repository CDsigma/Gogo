import React, { Component } from 'react'
import FavCampaignsSide from './fav_campaigns_side'
import BikeSide from './bike_side'

export default class FavCampaigns extends Component {
    render() {
        return (
            <div className="fav-campaigns">
                <FavCampaignsSide />
                <BikeSide />
            </div>
        )
    }
}
