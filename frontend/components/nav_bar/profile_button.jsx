import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ProfileButton extends Component {
    render() {
        let currentUserId = store.getState().session.id

        return (
            <div className="drop-down-menu-option">
                <Link to={`users/${currentUserId}`}>
                    <button className="drop-down-menu-option-title"> Profile </button>
                </Link>
            </div>
        )
    }
}
