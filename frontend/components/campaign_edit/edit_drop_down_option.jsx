import React, { Component } from 'react'

export default class EditDropDownOption extends Component {
    render() {
        if(this.props.selected) {
            return (
                <div className="edit-drop-down-menu-option-selected">
                    <button className="edit-drop-down-menu-option-title">{this.props.title}</button>
                </div>
            )
        }else{
            return (
                <div className="edit-drop-down-menu-option">
                    <button className="edit-drop-down-menu-option-title">{this.props.title}</button>
                </div>
            )
        }
        
    }
}
