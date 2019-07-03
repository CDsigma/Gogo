import React, { Component } from 'react'
import SparkIcon from './spark_icon'
import { Link } from 'react-router-dom'

export default class InspiredBox extends Component {
    render() {
        return (
            <div className="inspire-box">
                <SparkIcon />
                <h1 className="explore-inspire-titles">Feeling Inspired?</h1>
                <Link to='/start-a-campaign'>
                <button className="color-flip-button">BECOME AN ENTREPRENEUR</button>
                </Link>
            </div>
        )
    }
}
