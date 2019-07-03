import React, { Component } from 'react';
import TopHalf from './fav_campaign_top_half';
import BottomHalf from './fav_campaign_bottom_half';

export default class FavCampaignsSide extends Component {
    render() {
        return (
            <div className="fav-campaign-side">
                <TopHalf />
                <BottomHalf />
            </div>
        )
    }
}
