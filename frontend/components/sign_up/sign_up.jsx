import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';

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


    render() {
        // if (!this.state.visible) {
        //     return <div></div>;
        // }
        return (
            <div className="session-grey-background" onClick={this.props.toggleSignUpModal}>
                <div onClick={e => e.stopPropagation()}>
                    <form className="session-content" onSubmit={this.handleSubmit}>
                        <h3>Welcome!</h3>
                        <h4>Sign up to join Gogo.</h4>

                        <label htmlFor="">First Name
                            <input className="session-input" type="text" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
                        </label>

                        <label>Last Name
                            <input className="session-input" type="text" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
                        </label>

                        <label>Email
                            <input className="session-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
                        </label>

                        <label htmlFor="">Password
                            <input className="session-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
                        </label>

                        <button type="submit"> Sign Up </button>
                    </form>
                </div>
            </div>
        )
    }
}
