import React, { Component } from 'react'

export default class RobotDiv extends Component {
    render() {
        return (
            <div className="robot-div">
                <div className="robot-content">
                    <img src="https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/v1/what_we_do/Crowdfunding_robot.svg" className="robot-image"/>
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
