import React, { Component } from 'react'

export default class RobotDiv extends Component {
    render() {
        return (
            <div className="robot-div">
                <div className="robot-content">
                    <img src={"crowdfunding_robot.png"} className="robot-image"/>
                    <h3 className="robot-title">Fund the next big thing</h3>
                    <p className="robot-p">Gogo's crowdfunding campaigns are where new and groundbreaking products take 
                        flight, sometimes long before they hit mainstream availability. With thousands 
                        of campaigns launching every week, there's great tech, design, and much more 
                        around every corner - often with limited-time perks and pricing for the earliest 
                        backers. Before it's everywhere, it's on Gogo.</p>
                </div>
            </div>
        )
    }
}
