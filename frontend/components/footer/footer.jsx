import React, { Component } from 'react'
import LinkedInIcon from './linked_in_icon'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <a href="https://www.bbb.org/us/ca/san-francisco/profile/crowdfunding/indiegogo-1116-372843#bbblogo">
                    <img className="accredited-bussiness" src="https://www.indiegogo.com/images/bbbImage.png" alt=""/>
                </a>

                <a href="https://www.linkedin.com/in/wesley-arrington/"> <LinkedInIcon className="linked-in-icon" /> </a>
                <p className="copyright">© 2019 Wesley, Inc. All Rights Reserved</p>
            </div>
        )
    }
}
