import React, { Component } from 'react'
// import SignUp from '../sign_up/sign_up';
import { Link } from 'react-router-dom'

export default class SignUpButton extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         visible: false
    //     }

    //     this.closeModal = this.openModal.bind(this);
    //     this.openModal = this.closeModal.bind(this);
    // }

    // openModal() {
    //     this.setState({
    //         visible: true
    //     });
    //     this.render();
    // }

    // closeModal() {
    //     this.setState({
    //         visible: false
    //     });
    // }

    render() {
        return (
            <div>
                <Link to="/sign-up"> 
                    <button className="purple-hover-btn">Sign Up</button> 
                </Link>
            </div>
        )
    }
}
