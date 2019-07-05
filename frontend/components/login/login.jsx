import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import CloseIcon from '../general_purpose_icons/close_icon'
import DemoLogin from './demo_login_button'

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
        this.demoLogin = this.demoLogin.bind(this);
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

    // componentWillUnmount() {
    //     console.log("unmounting")
    // }

    async demoLogin(e) {
        e.preventDefault();

        // debugger;

        const demoUser = {
            email: 'password',
            password: 'password'
        };

        const sleep = ms => new Promise(res => setTimeout(res, ms));

        document.getElementById('email-input').focus();
        for (let i = 1; i <= demoUser.email.length; i++) {
            this.setState({ email: demoUser.email.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.getElementById("password-input").focus();
        for (let i = 1; i <= demoUser.password.length; i++) {
            this.setState({ password: demoUser.password.substr(0, i) });
            await sleep(50);
        }

        await sleep(250);

        document.getElementById('session-submit-button').click();
        document.getElementById("password-input").blur();
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
                        <button className="close-icon-button" onClick={this.props.toggleLoginModal}><CloseIcon /></button>
                        <h3 className="session-title">Welcome back!</h3>
                        <h4 className="session-login-signup-subtitle">Log in to continue.</h4>

                        <p className="session-email-label">Email</p>
                        <input className="session-input" id='email-input' type="text" value={this.state.email} onChange={this.handleInput('email')} />

                        <p className="session-password-label">Password</p>
                        <input className="session-input" id="password-input" type="password" value={this.state.password} onChange={this.handleInput('password')} />
                        

                        <button type="submit" className="color-button" id="session-submit-button"> LOG IN </button>

                        <p className="session-additional-option-text">Or</p>

                        <div onClick={this.demoLogin} className="color-button" id="session-demo-login-button"> DEMO LOG IN </div>
                    </form>
                </div>
            </div>
        )
    }
}
