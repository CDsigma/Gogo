import React, { Component } from 'react';
import FavCampaignItems from './fav_campaign_items';

export default class FavCampaignTopHalf extends Component {
    render() {
        return (
            <div className="fav-campaigns-top-half">
                <h1 className="fav-campaigns-title">Just a few of our favorite campaigns</h1>
                <div className="fav-campaigns-top-row">
                    <FavCampaignItems image_url={"misfit-image.png"} title="Misfit Shine" num_backers={7957} desc="With super-smart fitness technology squeezed into a sleek, take-it-anywhere design, the Misfit Shine was a huge hit. Today it’s available in stores everywhere, but Gogo backers were in on the action first." is_demand={false} />
                    <FavCampaignItems image_url={"bluesmart-image.png"} title="Bluesmart" num_backers={10984} desc="This smash-hit campaign almost singlehandedly invented the smart suitcase as the must-have travel accessory that it is today. With innovative features like location tracking and a built-in scale, Bluesmart went big on Gogo before landing in stores around the world." is_demand={true} />
                </div>
            </div>
        )
    }
}
