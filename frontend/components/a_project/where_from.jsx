import React, { Component } from 'react'

export default class WhereFrom extends Component {
    render() {
        return (
            <div>
                <h5 className="a-project-who-raising-moeny-for-title"><b>What country are you located in?</b></h5>
                <h5 className="a-project-who-raising-moeny-for-sub-title">
                    If you are raising funds as an individual, what is your 
                    country of legal residence? If you are raising funds for 
                    a business, where is the business headquartered?
                </h5>
                <input className="who-raising-money-input" type="text" />
            </div>
        )
    }
}
