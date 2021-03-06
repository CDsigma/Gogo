import React, { Component } from 'react'
import UserDropDownOptionsContainer from './user_drop_down_options_container'

export default class LoggedInOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visable: false
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        if(this.state.visable) {
            this.setState({
                visable: false
            })
        } else {
            this.setState({
                visable: true
            })
        }

        //this whole toggle thing is stupid instead do a menu that is always exists and then modify 
        //the value of visable or location or what evs to render it
        //class is user_drop_down_options
    }

    render() {
        let currentSessionId = store.getState().session.id
        let currentUser = store.getState().entities.user[currentSessionId].first_name
        // debugger;
        if(this.state.visable) {
            return (
                <div className="logged-in-options">
                    <img onClick={this.toggleMenu} className="logged-in-options-robot-image" src={"user-default-profile-picture.png"} alt=""/>
                    <button onClick={this.toggleMenu} className="user-menu">{currentUser}</button>
                    <UserDropDownOptionsContainer />
                </div>
            )
        } else {
            return (
                <div className="logged-in-options">
                    <img onClick={this.toggleMenu} className="logged-in-options-robot-image" src={"user-default-profile-picture.png"} alt="" />
                    <button onClick={this.toggleMenu} className="user-menu">{currentUser}</button>
                </div>
            )
        }
    }
}
