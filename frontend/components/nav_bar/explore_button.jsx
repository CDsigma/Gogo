import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ExploreButton extends Component {
    render() {
        return (
            <div>
                <Link to='/explore'>
                    <button className="purple-hover-btn">Explore</button>
                </Link>
            </div>
        )
    }
}
