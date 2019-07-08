import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Footer from '../footer/footer'

export default class home extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Footer />
            </div>
        )
    }
}
