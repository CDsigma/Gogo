import React, { Component } from 'react';
import UserDropDownOption from './user_drop_down_option';
import LogoutButtonContainer from './logout_button_container';
import ProfileButton from './profile_button';
import { Link } from 'react-router-dom';


export default class UserDropDownOptions extends Component {
    render() {
        // debugger;
        return (
            <div className="drop-down-menu">
                {/* <Link to={`/users/${this.props.currentUserId}/campaigns`}>
                    <UserDropDownOption title={"My Campaigns"} />
                </Link> */}
                {/* <UserDropDownOption title={"My Contributions"} /> */}
                <ProfileButton />
                <LogoutButtonContainer />
            </div>
        )
    }
}
