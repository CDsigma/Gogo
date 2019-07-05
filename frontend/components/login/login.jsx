import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';

export default class Login extends Component {

    // componentDidMount() {
    //     let currentUserId = store.getState().session.id;
    //     this.state.id = currentUserId;

    // }

    constructor(props) {
        super(props);
        // debugger;
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            profile_body: "raised by wolves",
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
        this.props.login(this.state)
        //.then(() => this.props.history.push('/user'));
    }


    render() {
        // if (!this.state.visible) {
        //     return <div></div>;
        // }
        // debugger;
        return (
            <div className="session-grey-background" onClick={this.props.toggleLoginModal}>
                <div onClick={e => e.stopPropagation()}>
                    <form className="session-content" onSubmit={this.handleSubmit}>
                        <h3 className="session-title">Welcome back!</h3>
                        <h4 className="session-login-subtitle">Log in to continue.</h4>

                        <p className="session-email-label">Email</p>
                            <input className="session-input" type="text" value={this.state.email} onChange={this.handleInput('email')} />

                        <p className="session-password-label">Password</p>
                        <input className="session-input" type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        

                        <button type="submit" className="color-button" id="session-submit-button"> LOG IN </button>
                    </form>
                </div>
            </div>
        )
    }
}
