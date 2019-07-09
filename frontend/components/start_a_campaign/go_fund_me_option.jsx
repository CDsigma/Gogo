import React, { Component } from 'react'
import GoFundMeLogo from './go_fund_me_logo'

export default class GoFundMeOption extends Component {
    render() {
        return (
            <div>
                <a href="https://www.gofundme.com/">
                    <div className="select-option-go-fund-me-option">
                        <h2>A cause</h2>
                        <p className="select-option-go-fund-me-para">GoFundMe is the world's largest and most trusted free social fundraising platform.</p>
                        <h4 className="select-option-go-fund-me-cost">0% platform fee</h4>
                        <GoFundMeLogo />
                    </div>
                </a>
            </div>
        )
    }
}
