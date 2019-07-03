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
        return (
            <div className="sign-up-grey-background">
                <NavBar />
                <form className="sign-up-content" onSubmit={this.handleSubmit}>
                    <h3>Welcome!</h3>
                    <h4>SIGN INNNN</h4>

                    <label>Email
                        <input className="sign-up-input" type="text" value={this.state.email} onChange={this.handleInput('email')} />
                    </label>

                    <label htmlFor="">Password
                        <input className="sign-up-input" type="password" value={this.state.password} onChange={this.handleInput('password')} />
                    </label>

                    <button type="submit"> Sign Up </button>
                </form>
            </div>
        )
    }
}
