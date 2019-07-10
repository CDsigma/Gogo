import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Header from './header';
import WhoRaisingMoneyFor from './who_raising_money_for';
import WhereFrom from './where_from';

export default class AProject extends Component {
    render() {
        return (
            <div className="a-project-main-div">
                <NavBar />
                <div className="a-project-content-container">
                    <Header />
                    <WhoRaisingMoneyFor />
                    <WhereFrom />
                </div>
            </div>
        )
    }
}
