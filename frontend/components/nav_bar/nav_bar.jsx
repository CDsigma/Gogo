import React, { Component } from 'react'
import LeftNavBarItems from './left_nav_bar_items';
import DropDown from './user_drop_down_options'
import RightNavBarItemsContainer from './right_nav_bar_items_container'
import Modal from './modal'

export default class NavBar extends Component {
    render() {
        return (
            <div className = "nav-bar">
                <LeftNavBarItems />
                <RightNavBarItemsContainer />
            </div>
        )
    }
}
