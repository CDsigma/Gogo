import React, { Component } from 'react'
import LoggedOutOptions from './logged_out_options'
import StartCampaign from './start_campaign_button'
import LoggedInOptions from './logged_in_options'

export default class RightNavBarItems extends Component {



    render() {
        // let currentSession = store.getState().session.currentUser
        // debugger;
        let {currentUserId} = this.props
        if (currentUserId !== null) {
            return (
                <div className="right-nav-bar-items">
                    <StartCampaign />
                    <LoggedInOptions />
                </div>
            )
        } else {
            return (
                <div className="right-nav-bar-items">
                    <StartCampaign />
                    <LoggedOutOptions />
                </div>
            )
        }
        // return (
        //     <div className="right-nav-bar-items">
        //         < componentToRender />
        //         {/* <StartCampaign />
        //         <LoggedOutOptions /> */}
        //     </div>
        // )
    }
}
