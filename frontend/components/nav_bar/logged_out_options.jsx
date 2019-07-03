import React, { Component } from 'react'
import SignUpButton from './sign_up_button'
import LoginButton from './login_button';

export default class LoggedOutOptions extends Component {
    render() {
        return (
            <div className="logged-out-options">
                <LoginButton />
                <SignUpButton />
            </div>
        )
    }
}
