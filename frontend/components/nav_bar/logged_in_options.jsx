import React, { Component } from 'react'

export default class LoggedInOptions extends Component {


    toggleMenu() {
    }

    render() {
        let currentUser = store.getState().session.first_name
        return (
            <div className="logged-in-options" onClick={toggleMenu}>
                <img className="logged-in-options-robot-image" src="https://g1.iggcdn.com/assets/individuals/missing/thumbnail-deaf450c2d4183b9309b493f6a7b20d62f8d31617ec828d060df465abe92ef2a.png" alt=""/>
                <h1 className="user-menu">{currentUser}</h1>
            </div>
        )
    }
}
