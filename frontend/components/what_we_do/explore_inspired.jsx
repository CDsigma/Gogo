import React, { Component } from 'react'
import Explore from './explore_box'
import Inspire from './inspired_box'

export default class ExploreInspired extends Component {
    render() {
        return (
            <div className="explore-inspired">
                <Explore />
                <Inspire />
            </div>
        )
    }
}
