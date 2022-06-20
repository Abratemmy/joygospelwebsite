import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import "./Footer.css";
import {FaInstagram} from 'react-icons/fa';
import {RiLinkedinFill} from 'react-icons/ri';
// import logo from "../../images/logo.png"

export class Footer extends Component {
    render() {
        return (
            <div className="footerpage">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-12 col-sm-12">
                            <div className="footer-container">
                                <div className="footer-title">About</div>
                                {/* <div className="footer-logo">
                                    <NavLink to="/" className="footer-logo-nav"><img src="{logo}" alt="JoyLogo" /></NavLink>
                                </div> */}
                                <div className="footer-about">
                                    <p>Joy Agunbiade has a strong passion for people discovering their purpose and walking in it fully . . .</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-12 col-sm-12">
                            <div className="footer-container">
                                <div className="footer-title">Quick Links</div>
                                <div className="footer-text">
                                    <ul>
                                        <li><NavLink to="/speaking_request" className="footer-link">Speaking</NavLink></li>
                                        <li><a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" className="footer-link">Podcast</a></li>
                                        <li><a href="https://gwop.joyagunbiade.com" className="footer-link">GWOP</a></li>
                                        <li><NavLink to="/contact" className="footer-link">Contact</NavLink></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 offset-lg-1 col-md-12 col-sm-12">
                            <div className="footer-container">
                                <div className="footer-title">Contact-info</div>
                                <div className="footer-text">
                                    <span>Email: </span> <a href="mailto:joyagunbiadeweb@gmail.com" target="_blank"  rel="noopener noreferrer" className="footer-mail">joyagunbiadeweb@gmail.com</a>
                                </div>
                                <div className="footer-text">
                                    <ul className="footer-social">
                                        {/* <li><a href="/jaweb/blogs" className="footer-link"><FaFacebookF className="footer-navlink" /></NavLink></li> */}
                                        <li><a href="https://ca.linkedin.com/in/joy-agunbiade-chrp-cdr-38740a123" target="_blank"  rel="noopener noreferrer" className="footer-link"><RiLinkedinFill className="footer-navlink" /></a></li>
                                        <li><a href="https://www.instagram.com/joy_ajay/" className="footer-link" target="_blank"  rel="noopener noreferrer"><FaInstagram className="footer-navlink" /></a></li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    <hr className="hr-line" />

                    <div className="footer-copyright text-center">
                        Copyright © JoyAgunbiade.com  <span> |
                            <a href="https://abratemmy.github.io/myportfolio/" target="_blank"  rel="noopener noreferrer" className="footer-webmaster">Webmaster</a>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
