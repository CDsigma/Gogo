import React, { Component } from 'react';
import FavCampaignItems from './fav_campaign_items';

export default class FavCampaignBottomHalf extends Component {
    render() {
        return (
            <div className="fav-campaigns-bottom-half">
                <div className="fav-campaigns-bottom-row">
                    <FavCampaignItems image_url={"evapolar-image.png"} title="Evapolar" num_backers={6616} desc="The Evapolar team’s slick air conditioner is small enough to place exactly where you need it most. It even cleans and humidifies as it cools. The campaign was so successful that the team came back to Gogo to launch the next-gen version." is_demand={true} />
                    <FavCampaignItems image_url={"super-troopers-image.png"} title="Super Troopers 2" num_backers={54531} desc="With its truly gigantic backer community, Super Troopers 2 became one of the most iconic Gogo film projects. The team behind the project offered backers everything from movie tickets to an actual police car from the film!" is_demand={true} />
                </div>
            </div>
        )
    }
}
