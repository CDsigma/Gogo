import React, { Component } from 'react'
import BikeIcon from './bike_icon'
import { Link } from 'react-router-dom'

export default class ExploreBox extends Component {
    render() {
        return (
            <div className="explore-box">
                <BikeIcon />
                <h1 className="explore-inspire-titles">Ready? Explore</h1>
                <Link to='/explore'>
                    <button className="color-flip-button">DISCOVER PROJECTS</button>
                </Link>
            </div>
        )
    }
}
