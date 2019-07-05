import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import LoginContainer from '../login/login_container'
import Login from '../login/login'


export default class LoginButton extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loginVisable: false
        }

        this.toggleLoginModal = this.toggleLoginModal.bind(this);
    }

    toggleLoginModal() {
        console.log("toggleModal")
        if (this.state.loginVisable) {
            this.setState({
                loginVisable: false
            })
        } else {
            this.setState({
                loginVisable: true
            })
        }
    }

    render() {
        if(this.state.loginVisable) {
            return (
                <div>
                    <button onClick={this.toggleLoginModal} className="purple-hover-btn">Login</button>
                    <LoginContainer toggleLoginModal={this.toggleLoginModal}/>
                </div>
            )
        } else {
            return (
                <div onClick={this.toggleLoginModal}>
                    <button className="purple-hover-btn">Login</button>
                </div>
            )
        }
    }
}
