import React, { Component } from 'react';
import NavBar from '../nav_bar/nav_bar';
import Footer from '../footer/footer';
import { Link } from 'react-router-dom';
import ProgressBar from '../explore/explore_progress_bar/explore_progress_bar';
import Clock from '../explore/clock';

export default class home extends Component {
    render() {
        return (
            <div className='simple-column-center-x'>
                <NavBar />
                <Link className="simple-width-100pc" to={`/2/show`}>
                    <div className="home-campaigns">
                        <div className="home-gray-background">
                            <div className="home-campaign-content">
                                <h4 className="home-campaign-pick">GOGO PICKS</h4>
                                <h4 className="home-campaign-title"><b>The E-Scooter that fits in a backpack</b></h4>
                                <h4 className="home-campaign-tagline">MiniFalcon is a fast, powerful, compact and high-performance electric scooter</h4>
                                <button className="home-campaign-button"><b>SEE CAMPAIGN</b></button>
                            </div>

                        </div>
                    </div>
                </Link>

                <div className="home-trending">
                    <h1 className="home-trending-title">Trending Campaigns</h1>
                    <div className="simple-row">
                        <Link to={`/1/show`}>
                            <div className="explore-individual-campaig-div">
                                {/* <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.netlifyusercontent.com%2Fassets%2F344dbf88-fdf9-42bb-adb4-46f01eedd629%2F242ce817-97a3-48fe-9acd-b1bf97930b01%2F09-posterization-opt.jpg&f=1" alt=""/> */}
                                <img className="explore-individual-campaign-image" src={`https://c4.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/li0oougnevyh7plflpgr`} alt="" />
                                <div className="explore-individual-campaign-text-container">
                                    <div className="explore-individual-campaign-funding">
                                        funding
                                        </div>
                                    <h3 className="explore-individual-campaign-title">Calamus One - Ultrabike</h3>
                                    <h4 className="explore-individual-campaign-tagline">The worlds safest and most advanced Electric Bike with Blindspot assist, biometric scanner and GPS</h4>
                                </div>
                                <div className="explore-funding-section">
                                    <div className="explore-funding-row">
                                        <div className="explore-individual-funding-container">
                                            <div className="explore-individual-funding-amount">12000</div>
                                            USD raised
                                            </div>
                                        <div>48%</div>
                                    </div>
                                    <ProgressBar percentage={48} />
                                </div>
                                <div className="explore-individual-campaign-days-left">
                                    <Clock />
                                    31 days left
                                    </div>
                            </div>
                        </Link>

                        <Link to={`/2/show`}>
                            <div className="explore-individual-campaig-div">
                                {/* <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.netlifyusercontent.com%2Fassets%2F344dbf88-fdf9-42bb-adb4-46f01eedd629%2F242ce817-97a3-48fe-9acd-b1bf97930b01%2F09-posterization-opt.jpg&f=1" alt=""/> */}
                                <img className="explore-individual-campaign-image" src={`https://c0.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/a952mtlzkvcrvvidur1c`} alt="" />
                                <div className="explore-individual-campaign-text-container">
                                    <div className="explore-individual-campaign-funding">
                                        funding
                                        </div>
                                    <h3 className="explore-individual-campaign-title">MiniFalcon: The E-Scooter That Fits In A Backpack</h3>
                                    <h4 className="explore-individual-campaign-tagline">Fast, powerful, and compact - MiniFalcon is the first packable high-performance electric scooter.</h4>
                                </div>
                                <div className="explore-funding-section">
                                    <div className="explore-funding-row">
                                        <div className="explore-individual-funding-container">
                                            <div className="explore-individual-funding-amount">7000</div>
                                            USD raised
                                            </div>
                                        <div>70%</div>
                                    </div>
                                    <ProgressBar percentage={70} />
                                </div>
                                <div className="explore-individual-campaign-days-left">
                                    <Clock />
                                    14 days left
                                    </div>
                            </div>
                        </Link>

                        <Link to={`/3/show`}>
                            <div className="explore-individual-campaig-div">
                                {/* <img src="https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcloud.netlifyusercontent.com%2Fassets%2F344dbf88-fdf9-42bb-adb4-46f01eedd629%2F242ce817-97a3-48fe-9acd-b1bf97930b01%2F09-posterization-opt.jpg&f=1" alt=""/> */}
                                <img className="explore-individual-campaign-image" src={`https://c1.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.0,f_auto,h_460/mkysuv3sc9nluaizhcls`} alt="" />
                                <div className="explore-individual-campaign-text-container">
                                    <div className="explore-individual-campaign-funding">
                                        funding
                                        </div>
                                    <h3 className="explore-individual-campaign-title">BladeX, The Slimmest On-the-Go Monitor.</h3>
                                    <h4 className="explore-individual-campaign-tagline">Slim, lightweight, touchscreen. BladeX is a super portable monitor to double your productivity!</h4>
                                </div>
                                <div className="explore-funding-section">
                                    <div className="explore-funding-row">
                                        <div className="explore-individual-funding-container">
                                            <div className="explore-individual-funding-amount">18000</div>
                                            USD raised
                                            </div>
                                        <div>90%</div>
                                    </div>
                                    <ProgressBar percentage={90} />
                                </div>
                                <div className="explore-individual-campaign-days-left">
                                    <Clock />
                                    6 days left
                                    </div>
                            </div>
                        </Link>
                    </div>
                </div>

                <Link className="home-learn-div-link" to="/about/what-we-do">
                    <div className="home-learn-div">
                        <div className="home-learn-gray-background">
                            <div className="home-learn-content-container">
                                <h2 className="home-learn-title">Back the project, take the ride</h2>
                                <p className="home-learn-desc">Indiegogo is your destination for clever innovations in tech, design, and more, often with special perks and pricing for early adopters. Back a campaign, share your ideas and feedback with the project team - and join the risks and rewards of bringing new products to life.</p>
                                <button className="home-learn-button"><b>LEARN ABOUT CROWDFUNDING</b></button>
                            </div>
                        </div>
                    </div>
                </Link>
                
                <Footer />
            </div>
        )
    }
}
