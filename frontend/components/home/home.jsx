import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Footer from '../footer/footer'
import { Link } from 'react-router-dom'

export default class home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Link to='/campaignId/edit'>
                    <button>Link To Campaign Edit Page</button>
                </Link>
                <Footer />
            </div>
        )
    }
}
