import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import CloseIcon from '../general_purpose_icons/close_icon'

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            profile_body: "raised by wolves"
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(type) {
        return (e) => {
            this.setState({ [type]: e.target.value });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createNewUser(this.state)
            //.then(() => this.props.history.push('/user'));
    }

    renderErrors() {
        return (
            <ul className="session-error-messages-list">
                {this.props.errors.map((error, i) => (
                    <li key={`error-${i}`} className="session-error-message">
                        {error}
                    </li>
                ))}
            </ul>
        );
    }


    render() {
        // if (!this.state.visible) {
        //     return <div></div>;
        // }
        return (
            <div className="session-grey-background" onClick={this.props.toggleSignUpModal}>
                <div onClick={e => e.stopPropagation()}>
                    <form className="sign-up-session-content" onSubmit={this.handleSubmit}>
                        <button onClick={this.props.toggleSignUpModal} className="close-icon-button"><CloseIcon /></button>

                        <h3 className="session-title">Welcome!</h3>
                        <h4 className="session-login-signup-subtitle">Sign up to join Gogo.</h4>

                        <p className="session-label">First Name</p>
                        <input className="session-input" type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>

                        <p className="session-label">Last Name</p>
                        <input className="session-input" type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>

                        <p className="session-label">Email</p>
                        <input className="session-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                       

                        <p className="session-label">Password</p>
                        <input className="session-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>

                        {this.renderErrors()}

                        <button type="submit" className="color-button" id="session-submit-button"> Sign Up </button>
                    </form>
                </div>
            </div>
        )
    }
}
