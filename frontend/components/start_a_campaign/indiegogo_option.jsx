import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import GogoLogo from './gogo_logo'

export default class IndieGoGoOption extends Component {
    render() {
        let { currentUserId } = this.props
        if (currentUserId !== null) {
            return (
                <div>
                    <Link to="/start-a-campaign/a-project">
                        <div className="select-option-idie-gogo-option">
                            <h2>A project</h2>
                            <p className="select-option-go-fund-me-para">
                                Gogo is a crowdfunding platform helping entrepreneurial ideas come to life.
                            </p>
                            <h4 className="select-option-go-fund-me-cost">5% platform fee</h4>
                            <GogoLogo />
                        </div>
                    </Link>
                </div>
            )
        } else {
            return (
                <div onClick={() => this.props.openModal('login')} className="select-option-idie-gogo-option">
                    <h2>A project</h2>
                    <p className="select-option-go-fund-me-para">
                        Gogo is a crowdfunding platform helping entrepreneurial ideas come to life.
                                </p>
                    <h4 className="select-option-go-fund-me-cost">5% platform fee</h4>
                    <GogoLogo />
                </div>
            )
        }
    }
}
