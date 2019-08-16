import React, { Component } from 'react';
import EditDropDownOption from './edit_drop_down_option';

export default class SideBar extends Component {
    render() {
        return (
            <div className="campaign-edit-side-bar">
                <h4 className="campaign-edit-side-bar-campaign-title">My Campaign Title</h4>
                <button className="campaign-edit-side-bar-section-title">Preview Campaign </button>
                <button className="campaign-edit-side-bar-section-title"> Campaign Editor </button>
                <EditDropDownOption title="1. Basics" selected={true}/>
                <EditDropDownOption title="2. Content" />
            </div>
        )
    }
}
