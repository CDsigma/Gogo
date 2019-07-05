import React from 'react';
// import NavBarContainer from './nav_bar/nav_bar.jsx';
// import SignupContainer from '../session/signup_container.jsx';
// import LoginContainer from '../session/login_container';
import Home from './home/home';
import WhatWeDo from './what_we_do/what_we_do';
import StartACampaign from './start_a_campaign/start_a_campaign'
import SignUpContainer from './sign_up/sign_up_container'
import LoginContainer from './login/login_container'
import Explore from './explore/explore'
import { Route } from 'react-router-dom';
//import { AuthRoute } from './utils/route_util';

export default () => (
    <div className="full-window">
        {/* <Route path="/" component={NavBarContainer} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/start-a-campaign" component={StartACampaign} />
        <Route exact path="/about/what-we-do" component={WhatWeDo} />
        <Route exact path="/explore" component={Explore} />
        {/* <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} /> */}
    </div>
);