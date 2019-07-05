import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Journey extends Component {
    render() {
        return (
            <div className="journey">
                <h1 className="journey-title">Join the journey from idea to market</h1>
                <img className="graphic" src={"timeline-image.png"}/>
                <div className="journey-p-container">
                    <p className="journey-text">With Gogo, you have the opportunity to support entrepreneurs 
                        and new technology from the earliest stages of development. 
                        Be sure to evaluate every campaign closely and contribute at 
                        a level you can afford in the event that the team is unable 
                        to complete the project as planned.</p>
                    <p className="journey-text"> Browse campaigns, read the stories from the entrepreneurs themselves, 
                        evaluate the stage of development and any potential production risks - 
                        and then fund the projects that you want to help succeed.</p>
                </div>
                <Link to="/explore">
                    <button className="color-flip-button">EXPLORE PROJECTS</button>
                </Link>
            </div>
        )
    }
}
