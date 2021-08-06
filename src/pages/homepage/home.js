import React, { Component } from 'react';
import './home.css';
import joygif from '../../images/JOYAGIF.gif'
import aboutimage from '../../images/img3.jpg'

export class Home extends Component {
    render() {
        return (
            <div className="pages">
                <div className="page-container">
                    <div className="homepage">
                        <h1>It's time to <br /> Keep the light burning</h1>
                    </div>
                </div>

                <div className="home-img">
                    <img src={joygif} alt="loading" width="100%"/>
                    {/* <div className="home-video"><video src="/videos/joyagunbiade.mp4" autoPlay loop muted width="100%" /></div> */}
                </div>
                            
                <div className="home-introduction ">
                    <div className="page-container">
                        <div className="home-container">
                            <h1 className="home-title-cursive">Hi there! I’m Joy!</h1>
                            <p>Wife, Mother, Pastor, Author, Mentor,  Podcaster, Traveller. Welcome to my classroom, podcast and all things JESUS!  </p>
                        </div>
                    </div>
                </div>

                <div className="home-about">
                    <div className="page-container">
                        <div className="row">
                            <div className="col-lg-5 col-md-5 col-sm-12">
                                <div className="home-about-image">
                                    <img src={aboutimage} alt="loading" />
                                </div>

                            </div>
                            <div className="col-lg-7 col-md-7 col-sm-12">
                                <div className="home-about-text">
                                    <h1>You Get to Choose!</h1>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <p>Each and every day you and I get to CHOOSE. The choices we make decide whether or not we will embrace our potential, explore our possibilities, 
                                                or live fully in our purpose. We get this one life to live and I’m sure that you, like me, want to live it well.
                                            </p>
                                        </div> 
                                        <div className="col-lg-6 col-md-6 col-sm-12">
                                            <p>I write, speak, and share my life in hopes that it might encourage you, help you grow, and inspire you to make choices today that will build the 
                                                tomorrow of your dreams. If you need a friend for the journey who will keep it real, make it plain, and cheer you on to choose well…
                                                <span>I’m your girl.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                    
                    
            </div>
        )
    }
}

export default Home
