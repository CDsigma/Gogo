import React, { Component } from 'react'

export default class email_div extends Component {
    render() {
        return (
            <div className="email-div">
                <div className="email-content-container">
                    <h1 className="email-div-title">Great finds, delivered daily</h1>

                    <p className="email-div-p">We surface the best and brightest of 
                        Indiegogo in our newsletter. Sign up 
                        to find out about great technology, 
                        design, film, and much more — all before 
                        it hits the mainstream.</p>
                    <span className="email-div-input">
                        <input type="text" name="email" className="email-div-text-input" placeholder="Your email address" id="" />
                        <button className="color-button"> SUBSCRIBE </button>
                    </span>
                </div>
                <span className="terms-conditions-checkbox">
                    <input type="checkbox" name="" id="" />
                    <p className="checkbox-privacy-policy">I agree to the Terms of Use and have read and understand the Privacy Policy</p>
                </span>
            </div>
        )
    }
}
