import React, { Component } from 'react'
import EyeIcon from './eye_icon'
import Notepad from './notepad_icon'

export default class EditBar extends Component {
    render() {
        return (
            <div className="profile-edit-bar">
                <div className="profile-edit-bar-content">
                    <div className="profile-edit-bar-button"> 
                        <EyeIcon /> 
                        View Profile
                    </div>   
                    <button className="profile-edit-bar-activated-button">
                        <Notepad />
                        Edit Profile and Settings
                    </button>
                </div>
            </div>
        )
    }
}
