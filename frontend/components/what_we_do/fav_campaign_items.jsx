import React, { Component } from 'react'

export default class FavCampaignItems extends Component {
    constructor(props) {
        super(props);
        this.state = {
            image_url: props.image_url,
            title: props.title,
            num_backers: props.num_backers,
            desc: props.desc,
            is_demand: props.is_demand
        }
    }

    render() {
        return (
            <div className="fav-campaigns-item">
                <img className="fav-campaign-items-image" src={this.state.image_url}/>
                <h3 className="fav-campaign-items-title">{this.state.title}</h3>
                <h4>{this.state.num_backers} Backers</h4>
                <p className="fav-campaign-items-desc">{this.state.desc}</p>
            </div>
        )
    }
}
