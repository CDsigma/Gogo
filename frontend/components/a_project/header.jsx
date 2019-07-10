import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <div className="simple-column-center">
                <img src={"crowdfunding_robot.png"} className="crowd-funding-select-robot-image" />
                <h1 className="a-project-title">Let’s get ready to start your campaign!</h1>
                <h3 className="a-project-content-subtitle">We want to create the best onboarding for you – please fill out the information below. <b>-</b>
                    <b>
                        - Your answers will be locked for this campaign and can’t be changed later.
                    </b>
                </h3>
            </div>
        )
    }
}
