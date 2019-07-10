import React, { Component } from 'react'

export default class WhereBank extends Component {
    render() {
        return (
            <div>
                <h5 className="a-project-who-raising-moeny-for-title"><b>What country is your bank located in?</b></h5>
                <h5 className="a-project-who-raising-moeny-for-sub-title">
                    Your bank account location determines the currency in which you can raise funds.
                </h5>
                <input placeholder="Your bank country" className="who-raising-money-input" type="text" />
            </div>
        )
    }
}
