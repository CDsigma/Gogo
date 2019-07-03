import React, { Component } from 'react'
import RightNavBarItems from './right_nav_bar_items'
import LeftNavBarItems from './left_nav_bar_items';

export default class NavBar extends Component {
    render() {
        return (
            <div className = "nav-bar">
                <LeftNavBarItems />
                <RightNavBarItems />
            </div>
        )
    }
}
