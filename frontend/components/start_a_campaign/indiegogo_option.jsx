import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GogoLogo from './gogo_logo'

export default class IndieGoGoOption extends Component {
    render() {
        return (
            <div>
                <Link to="/explore">
                    <div className="select-option-go-fund-me-option">
                        <h2>A project</h2>
                        <p className="select-option-go-fund-me-para">
                            Indiegogo is a crowdfunding platform helping entrepreneurial ideas come to life.
                        </p>
                        <h4 className="select-option-go-fund-me-cost">5% platform fee</h4>
                        <GogoLogo />
                    </div>
                </Link>
            </div>
        )
    }
}
