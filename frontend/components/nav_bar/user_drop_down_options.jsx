import React, { Component } from 'react'
import UserDropDownOption from './user_drop_down_option'
import LogoutButtonContainer from './logout_button_container'

export default class UserDropDownOptions extends Component {
    render() {
        // debugger;
        return (
            <div className="drop-down-menu-visable">
                <UserDropDownOption title={"My Campaigns"} />
                <UserDropDownOption title={"My Contributions"} />
                <UserDropDownOption title={"Profile"} />
                
                <LogoutButtonContainer />
            </div>
        )
    }
}
