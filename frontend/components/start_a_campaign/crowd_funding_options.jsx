import React, { Component } from 'react'
import IndieGoGoOptionContainer from './indiegogo_option_container'
import GoFundMeOption from './go_fund_me_option'

export default class CrowdFundingOptions extends Component {
    render() {
        return (
            <div className="crowd-funding-options">
                <IndieGoGoOptionContainer />
                <GoFundMeOption />
            </div>
        )
    }
}
