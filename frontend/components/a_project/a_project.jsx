import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Footer from '../footer/footer'
import Header from './header';
import WhoRaisingMoneyFor from './who_raising_money_for';
import WhereFrom from './where_from';
import WhereBank from './where_bank';

export default class AProject extends Component {
    render() {
        return (
            <div className="a-project-main-div">
                <NavBar />
                <div className="a-project-content-container">
                    <Header />
                    <WhoRaisingMoneyFor />
                    <WhereFrom />
                    <WhereBank />
                    <button className="blue-hover-button"> START MY CAMPAIGN </button>
                    <p className="a-project-payment-information-title"><b>What countries are supported by Gogo?</b></p>
                    <p className="a-project-payment-information-info">You can start a campaign in countries supported by our 
                        payment processor</p>
                </div>

                <Footer />
            </div>
        )
    }
}
