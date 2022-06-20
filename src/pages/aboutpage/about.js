import React, { Component } from 'react';
import './about.css';
import Quote from '../../components/quote/quote';
import {FaInstagram} from 'react-icons/fa';
import {RiLinkedinFill} from 'react-icons/ri'

export class About extends Component {
    render() {
        return (
            <div className="newaboutpage">
                <div className="about-banner">
                    <div className="container">
                        <div className="about-speaking">
                            <h1 className=" speaking-header" style={{paddingTop:"30px"}}>Building Values <br />With Passion</h1>
                            <p style={{paddingTop:"35px"}}>I have a strong passion for people discovering their purpose and walking in it fully.</p>
                           
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-container"> 
                                <div className='newabout-img'>
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641461422/Joyagunbiade.com/img5_kf4ngo.jpg" alt="loading"  />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="about-container">
                                <div className="newaboutgroup-text">
                                    <div className="newabout-title">Passionate for God</div>
                                    <div className="newabout-text wow slideInRight" data-wow-duration="2s" data-wow-delay=".2s">
                                        My name is Joy Agunbiade and I am first a child of God, before anything else. Wait a minute, hold that thought before any conclusions are made, I am here to serve you. A people lover both in my specific purpose 
                                        and my career path. A Human Resources professional by trade with a background in psychology from Unilag. 
                                    </div>

                                    <div className="newabout-text wow slideInRight" data-wow-duration="2s" data-wow-delay=".4s">
                                        I have a strong passion for people discovering their purpose and walking in it fully. I believe life is
                                         much sweeter when you know what you’re called by God to be and you simply being that. I am the steward /co-founder of GWOP which is God’s Women of Purpose. 
                                        A place where women are equipped with the tools, resources and environment needed to discover and fulfil purpose.
                                    </div>

                                    <div className="newabout-text wow slideInRight" data-wow-duration="2s" data-wow-delay=".6s">
                                        When I’m not working I’ll be on some adventures like solo trips, or supporting charity projects, hosting talk shows, podcasts and 
                                        evangelistic events. I am on a mission to transmit God’s message from His heart to yours by any means possible. 
                                    </div>

                                    <div className="newabout-text newabout-continue" >
                                        <em style={{fontWeight:"500"}}>A</em><span>nd the Journey Continues . . .</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Quote />

                <div className="about-session container" id="success">
                    <div className="about-social ">Connect with <span>Me On</span></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-2 col-md-1 col-sm-12"></div>
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                <div className="about-social-container wow slideInUp" data-wow-duration="2s" data-wow-delay=".1s">    
                                    <div className='about-social-url'>
                                        <a href="https://www.instagram.com/joy_ajay/" className="about-link" target="_blank"  rel="noopener noreferrer">
                                            <div className="">
                                                <FaInstagram className="icon" /> 
                                            </div>
                                            <div className='social-icon'>Instagram</div>
                                            </a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-5 col-sm-10">
                                <div className="about-social-container wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <div className='about-social-url'>
                                        <a href="https://ca.linkedin.com/in/joy-agunbiade-chrp-cdr-38740a123" className="about-link" target="_blank"  rel="noopener noreferrer">
                                            <div className="">
                                                <RiLinkedinFill className="icon" /> 
                                            </div>
                                            <div className='social-icon'>Linkedin</div>
                                            </a>
                                    </div>
                                 
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-1 col-sm-12"></div>
                        </div>
                    </div>
                </div>
            </div>
            
        )
    }
}

export default About
