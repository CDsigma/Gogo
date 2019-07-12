import React from 'react';
// import NavBarContainer from './nav_bar/nav_bar.jsx';
// import SignupContainer from '../session/signup_container.jsx';
import Home from './home/home';
import WhatWeDo from './what_we_do/what_we_do';
import StartACampaign from './start_a_campaign/start_a_campaign'
import ExploreContainer from './explore/explore_container'
import Profile  from './profile/profile'
import AProject from './a_project/a_project'
import CampaignEdit from './campaign_edit/campaign_edit'
import { Route } from 'react-router-dom';
import Modal from './nav_bar/modal'
// import { Protected } from './utils/route_util';

export default () => (
    <div className="full-window">
        <Modal />
        {/* <Route path="/" component={NavBarContainer} /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/start-a-campaign" component={StartACampaign} />
        <Route exact path="/start-a-campaign/a-project" component={AProject} />
        <Route exact path="/about/what-we-do" component={WhatWeDo} />
        <Route exact path="/explore" component={ExploreContainer} />
        <Route exact path="/users/:userId" component={Profile} />
        <Route exact path="/campaignId/edit" component={CampaignEdit} />
        <Route exact path="/:campaignId/edit" component={CampaignEdit} />
        {/* <Route path="/signup" component={SignupContainer} />
        <Route path="/login" component={LoginContainer} /> */}
    </div>
);