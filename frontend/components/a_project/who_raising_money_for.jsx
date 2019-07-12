import React, { Component } from 'react'

export default class WhoRaisingMoneyFor extends Component {
    
    render() {
        return (
            <div>
                <h5 className="a-project-who-raising-moeny-for-title"><b>Who are you raising money for?</b></h5>
                <h5 className="a-project-who-raising-moeny-for-sub-title">
                    Please choose the type of account that will be receiving your funds.
                </h5>
                <form action="" className="a-project-radio-form">
                    <span className="a-project-radio-option">
                        <input className="a-project-radio-input" type="radio" /> 
                        Individual 
                    </span>

                    <span className="a-project-radio-option">
                        <input className="a-project-radio-input" type="radio" />
                         Business 
                    </span>

                    <span className="a-project-radio-option">
                        <input className="a-project-radio-input" type="radio" /> 
                        Nonprofit 
                    </span>
                </form>
            </div>
        )
    }
}
