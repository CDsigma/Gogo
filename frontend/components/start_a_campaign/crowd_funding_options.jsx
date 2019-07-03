import React, { Component } from 'react'
import IndieGoGoOption from './indiegogo_option'
import GoFundMeOption from './go_fund_me_option'

export default class CrowdFundingOptions extends Component {
    render() {
        return (
            <div className="crowd-funding-options">
                <IndieGoGoOption />
                <GoFundMeOption />
            </div>
        )
    }
}
