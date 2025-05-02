import React, { Component } from 'react';
import './home.css'
import { Link, NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight, MdCheck } from 'react-icons/md';
import { FaLightbulb, FaHandsHelping } from "react-icons/fa";
import { RiMusic2Line } from "react-icons/ri";
import { BiCalendarEvent } from "react-icons/bi";
import moment from "moment";
import blogData from '../../components/data/BlogData';
import about from '../../images/about.jpg';
import { FaInstagram } from 'react-icons/fa';
import { RiLinkedinFill } from 'react-icons/ri';
import joyimage from '../../images/jjoybg.jpg'


export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            loading: false,
        }
    }
    componentDidMount() {
        // this.setState({
        //     loading: true,
        // })
        // return fetch(`https://joyagunbiadeserver.onrender.com/blog`)
        //     .then((response) => response.json())
        //     .then((responseJson) => {
        //         this.setState({
        //             data: responseJson,
        //             loading: false,
        //         });
        //     })
        //     .catch((error) => {
        //         console.log(error)
        //     })
    }
    render() {
        return (
            <div className="homepage">
                <div className='homepage-banner'>
                    <div className='container'>
                        <div className='title wow slideInLeft' data-wow-duration="2s" data-wow-delay=".2s"><span>Unleash the Vision God Placed Within You. </span> Build a Business That Overflows with Purpose</div>
                        <p className='wow slideInLeft' data-wow-duration="2s" data-wow-delay=".3s" data-wow-offset="10">I am a faith-driven speaker and purpose coach, dedicated to helping individuals unleash the vision God placed within them. Through inspiring messages and practical guidance, I empowers others to build businesses and careers that overflow with purpose, impact, and divine direction</p>
                        <div className='wow slideInUp home-button' data-wow-duration="2s" data-wow-delay=".4s" data-wow-offset="20">
                            <NavLink to='/contact' className="navlinks-btn">Contact Me</NavLink>
                        </div>
                    </div>
                </div>

                {/* new session1 */}
                <div className="home-Newsession1">
                    <div className="container">
                        <div className="home-Newsession1-col">
                            <div className='pageSubtitle'>GET STARTED</div>
                            <div className="pageTitle">I have you covered</div>
                            <div className='row gy-4 gx-4' style={{ marginTop: "20px" }}>
                                <div className="col-lg-4 col-md-4 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <div className='NewSession1Card'>
                                        <div className='title'>Public Speaking</div>
                                        <div className="hoverarea">
                                            <div className="pageText">Inspiring lives through faith-based and purpose-driven messages.</div>
                                        </div>
                                    </div>
                                </div><div className="col-lg-4 col-md-4 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <div className='NewSession1Card'>
                                        <div className='title'>Podcast Hosting</div>
                                        <div className="hoverarea">
                                            <div className="pageText">Sharing Godly wisdom and real-life conversations that empower.</div>
                                        </div>
                                    </div>
                                </div><div className="col-lg-4 col-md-4 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <div className='NewSession1Card'>
                                        <div className='title'>HR Services</div>
                                        <div className="hoverarea">
                                            <div className="pageText">Connecting job seekers to the right opportunities with integrity.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <div className='NewSession1Card'>
                                        <div className='title'>God's Women of Purpose</div>
                                        <div className="hoverarea">
                                            <div className="pageText">Leading and coordinating a powerful community of faith-filled women.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <div className='NewSession1Card'>
                                        <div className='title'>Cleaning Agency</div>
                                        <div className="hoverarea">
                                            <div className="pageText">Providing reliable and professional cleaning services with excellence.</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                    <div className='NewSession1Card'>
                                        <div className='title'>And Many More</div>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                {/* <div className="home-introduction ">
                    <div className="container">
                        <div className="home-container">
                            <div className=" home-img-banner">
                                <div className="home-img-hi">Hi, I'm <span>Joy Gospel</span></div>
                            </div>
                            <p>I'm a Jesus girl with a passion, a fashionista, speaker, an experienced researcher, inventor, the steward /co-founder of GWOP which is God’s Women of Purpose and a lover of all things that refresh. </p>
                        </div>
                    </div>
                </div> */}

                <div className="home-about">
                    <div className="home-aboutContent">
                        <div className="container">
                            <div className="row gx-0">
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="home-about-image wow zoomIn" data-wow-duration="2s" data-wow-delay=".4s">
                                        <img src={about} alt="loading" />
                                    </div>

                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="home-about-text">
                                        <div className='pageTitle'>You Get to Choose!</div>
                                        <div className="row">
                                            <div className=" wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                                <div className='text'>Each day you and I get to CHOOSE. The choice to take action to accomplish what you want or what you deserve is entirely up to you.
                                                    Your choices reflects your hopes and not your fear. Every decision you make, makes you and I'm sure that you, like me, will never let other people choose who you're going to be.
                                                    {/* We get this one life to live and I’m sure that you, like me, want to live it well. */}
                                                </div>

                                                <div className='text'>I write, speak, and share my life in hopes that it might encourage you, help you grow, and inspire you to make choices today that will build the
                                                    tomorrow of your dreams. <br />If you need a friend to cheer you on to choose right. . .

                                                </div>
                                                <span>I’m your girl.</span>
                                            </div>

                                        </div>
                                        {/* <div className="button">
                                            <NavLink to='/about' className="navlinks-btn schedule-btn">Learn More</NavLink>
                                        </div> */}
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* added this new session */}
                <div className='newBanner1'>
                    <div className='container'>
                        <div className='content'>
                            <div className='pageTitle'>
                                This Isn’t Just Business— <span>It’s Kingdom Assignment</span>
                            </div>

                            <div className='pageText'>
                                Every service I offered is rooted in purpose, driven by faith, and aligned with God’s calling. From speaking and mentoring to HR services and business ventures, it’s all about impact, not just income. This is more than a platform—it’s a divine mandate to serve, uplift, and advance the Kingdom through excellence.
                            </div>

                            <div className='pageSubtitle'>Connect with me to get started</div>
                            <ul className="social">
                                <li><a href="https://ca.linkedin.com/in/joy-agunbiade-chrp-cdr-38740a123" target="_blank" rel="noopener noreferrer" className="footer-link"><RiLinkedinFill className="footer-navlink" /></a></li>
                                <li><a href="https://www.instagram.com/joy_ajay/" className="footer-link" target="_blank" rel="noopener noreferrer"><FaInstagram className="footer-navlink" /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* added this new session */}
                <div className='homeMeet'>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='content'>
                                    <div className='pageSubtitle'>Nice to meet you</div>
                                    <div className='pageTitle'>I'm Joy Gospel</div>
                                    <div className='pageText'>I am first a child of God, before anything else. Wait a minute, hold that thought before any conclusions are made, I am here to serve you. is a faith-driven speaker, mentor, and human resource professional with a passion for helping others walk boldly in their God-given purpose. With a heart for ministry and a mission to empower, I blend spiritual insight with practical tools to guide individuals in building lives and businesses that overflow with purpose.</div>
                                    <div className='pageText'>Whether I'm speaking at events, mentoring one-on-one, or connecting job seekers with the right opportunities, my message is clear: you were created for more. My work is rooted in faith, driven by purpose, and designed to inspire action.</div>
                                    <div className='pageText'>When I’m not working I’ll be on some adventures like solo trips, or supporting charity projects, hosting talk shows, podcasts and evangelistic events. I am on a mission to transmit God’s message from His heart to yours by any means possible.</div>
                                </div>

                                <div className='cc'>And the Journey Continues . . .</div>
                            </div>

                            <div className='col-lg-6 col-md-6 col-sm-12'>
                                <div className='image'>
                                    <img src={joyimage} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* schedule for a meeting */}
                <div className="home-schedule">
                    <div className="container">
                        <div className="home-schedule-col">
                            <div className='pageTitle'>Want to Schedule us for an Event?</div>
                            <div className="button ">
                                <NavLink to='/contact' className="navlinks-btn schedule-btn">Contact Us</NavLink>
                            </div>
                            <div className='pageSubtitle' style={{ paddingTop: '20px' }}>or</div>
                            <div className='email'><span className='pageSubtitle'>Send us an email: </span><a href="mailto:joyagunbiadeweb@gmail.com" target="_blank" rel="noopener noreferrer" className="mail">joyagunbiadeweb@gmail.com</a> </div>
                        </div>
                    </div>
                </div>

                {/*this sections is for the blog, podcast and so on  */}
                {/* <div className="home-card">
                    <div className="container">
                        <div className="home-card-title wow slideInLeft" data-wow-duration="2s" data-wow-delay=".3s">
                            Here's what I have for you
                        </div>
                        <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                <a href="https://gwop.joyagunbiade.com" className="card-navlink">
                                    <div className="card card-style" >
                                        <div className="home-card-bg">
                                            <FaHandsHelping className="home-card-icon" />
                                            <p className="card-text">GWOP</p>
                                        </div>
                                        <div className="card-hover"></div>
                                    </div>
                                    <div className="card-arrow">
                                        <MdKeyboardArrowRight className="icon-arrow" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".4s">
                                <a href="https://ges.joyagunbiade.com" className="card-navlink">
                                    <div className="card card-style card-style2" >
                                        <div className="home-card-bg">
                                            <BiCalendarEvent className="home-card-icon" />
                                            <p className="card-text">THERAPY CONSULTING</p>
                                        </div>
                                        <div className="card-hover card-hover2"></div>
                                    </div>
                                    <div className="card-arrow">
                                        <MdKeyboardArrowRight className="icon-arrow" />
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".6s">
                                <NavLink to="/podcasts" className="card-navlink">
                                    <div className="card card-style" >
                                        <div className="home-card-bg">
                                            <RiMusic2Line className="home-card-icon " />
                                            <p className="card-text">PODCAST</p>
                                        </div>
                                        <div className="card-hover"></div>
                                    </div>
                                    <div className="card-arrow">
                                        <MdKeyboardArrowRight className="icon-arrow" />
                                    </div>
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div> */}

                {/* new session here */}
                <div className='WhatyouGet'>
                    <div className='container'>
                        <div className='content'>
                            <div className='pageTitle'>Here's what you'll get when you connect with me:</div>
                            <div className="wrapper">
                                <div className='wrapperContent'>
                                    <div className='icon1'><MdCheck className='icon' /></div>
                                    <div className='text'>Clarity of Purpose</div>
                                </div>
                                <div className='wrapperContent'>
                                    <div className='icon1'><MdCheck className='icon' /></div>
                                    <div className='text'>Spiritual Encouragement</div>
                                </div>
                                <div className='wrapperContent'>
                                    <div className='icon1'><MdCheck className='icon' /></div>
                                    <div className='text'>Empowerment to Act</div>
                                </div>
                                <div className='wrapperContent'>
                                    <div className='icon1'><MdCheck className='icon' /></div>
                                    <div className='text'>Balance and Focus</div>
                                </div>
                                <div className='wrapperContent'>
                                    <div className='icon1'><MdCheck className='icon' /></div>
                                    <div className='text'>Breakthrough Mindset </div>
                                </div>
                                <div className='wrapperContent'>
                                    <div className='icon1'><MdCheck className='icon' /></div>
                                    <div className='text'>Bold Confidence</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* another section starts here */}
                <div className="home-schedule">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-1 col-md-1 col-sm 1">
                                <div className="jesustext-col">
                                    <FaLightbulb className="icon-light" />
                                </div>
                            </div>
                            <div className="col-lg-11 col-md-11 col-sm-11">
                                <div className="jesustext-col">
                                    <p className="jesustext">Shine your light and make a positive impact on the world; there is nothing so honourable as helping improve the lives of others. </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>


                {/* blog section starts here. just to display 3 only  */}
                <div className="home-blog">
                    <div className="container">
                        <div className="pageTitle wow slideInLeft" data-wow-duration="2s" data-wow-delay=".1s">
                            Latest from my <span>Blog</span>
                        </div>


                        {this.state.loading ? (<div>
                            <div className="loading" style={{ paddingBottom: "30px" }}></div>
                        </div>) : (
                            <div className="home-blog-design wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                {blogData.sort((a, b) => b.id - a.id).slice(0, 3).map((item, i) => {
                                    return (
                                        <div className="home-blog-card wow slideInUp" key={i}  >
                                            <div className="overlay"></div>
                                            <div className='home-blog-img'><span><img src={item.image} alt="loading" /></span></div>
                                            <div className="home-blog-content">
                                                <div className="">
                                                    <p className="title">{item.title}</p>
                                                    <div className='blog-text-display'>
                                                        <p className="blog-text">{item.text.map((data, index) => {
                                                            return (
                                                                <p className=''>{data.content}</p>
                                                            )
                                                        })}...</p>

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="button ">
                                                <Link to={`/blogs/${item.title.split(" ").join("-")}`} className="navlinks-btn schedule-btn schedule-btn1">Read More</Link>
                                            </div>

                                        </div>
                                    )
                                }
                                )}

                            </div>
                        )}
                    </div>
                </div>

            </div>
        )

    }
}

export default Home
