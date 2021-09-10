import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import {FaFacebookF,FaTwitter, FaInstagram} from 'react-icons/fa';
import './footer.css';

export class Footer extends Component {
    render() {
        return (
            <div className="footerpage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-row">
                                <div className="footer-logo">
                                    Joy Agunbiade
                                </div>
                            </div>
                        </div> 
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-row">
                                <div className="footer-button">
                                    <NavLink to="/contact" className=" footer-navlink">Contact us</NavLink>
                                </div>
                                <div className="privacy-policy">
                                    <NavLink to="/privacy_policy" className="footer-privacy">Privacy policy</NavLink> | 
                                    <span> <NavLink to="http://abratemmy.github.io/myportfolio"  className="footer-privacy">Webmaster</NavLink></span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-row">
                                <div className="footer-social-title">
                                    Link me up on:
                                </div>
                                <div className="footer-social-media">
                                    <ul>
                                        <li><NavLink to="https://www.facebook.com" className="social-link"><FaFacebookF className="social-icon"/></NavLink></li>
                                        <li><NavLink to="https://www.instagram.com" className="social-link"><FaInstagram className="social-icon"/></NavLink></li>
                                        <li><NavLink to="https://www.twitter.com" className="social-link"><FaTwitter className="social-icon"/></NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default Footer
