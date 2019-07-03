import React, { Component } from 'react';
import HeaderImage from './header_logo';
import WhatWeDoButton from './what_we_do';
import ExploreButton from './explore_button';

export default class LeftNavBarItems extends Component {
    render() {
        return (
            <div className="left-nav-bar-items">
                <HeaderImage />
                <ExploreButton />
                <WhatWeDoButton />
            </div>
        )
    }
}
