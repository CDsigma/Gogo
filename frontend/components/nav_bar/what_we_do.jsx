import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class WhatWeDo extends Component {
    render() {
        return (
            <div>
                <Link to="/about/what-we-do">
                    <button className="purple-hover-btn">What We Do</button>
                </Link>
            </div>
        )
    }
}
