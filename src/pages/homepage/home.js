import React, { Component } from 'react';
import './home.css'
import { Link, NavLink } from 'react-router-dom';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { FaLightbulb, FaHandsHelping } from "react-icons/fa";
import { RiMusic2Line } from "react-icons/ri";
import { BiCalendarEvent } from "react-icons/bi";
import moment from "moment"

export class Home extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: [],
            loading: false,
        }
    }
    componentDidMount() {
        this.setState({
            loading: true,
        })
        return fetch(`https://joyagunbiadeserver.onrender.com/blog`)
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({
                    data: responseJson,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log(error)
            })
    }
    render() {
        return (
            <div className="homepage">
                <div className='homepage-banner'>
                    <div className='container'>
                        <div className='title wow slideInLeft' data-wow-duration="2s" data-wow-delay=".2s">It's time to arise and keep the light burning</div>
                        <p className='wow slideInLeft' data-wow-duration="2s" data-wow-delay=".3s" data-wow-offset="10">I have a strong passion for people discovering their purpose and walking in it fully. I believe life is much sweeter when you know what you’re called by God to be and you simply being that.</p>
                        <div className='wow slideInUp home-button' data-wow-duration="2s" data-wow-delay=".4s" data-wow-offset="20">
                            <NavLink to='/contact' className="navlinks-btn">Contact Me</NavLink>
                        </div>
                    </div>
                </div>

                <div className="home-introduction ">
                    <div className="container">
                        <div className="home-container">
                            <div className=" home-img-banner">
                                <div className="home-img-hi">Hi, I'm <span>Joy Agunbiade</span></div>
                            </div>
                            <p>I'm a Jesus girl with a passion, a fashionista, speaker, an experienced researcher, inventor, the steward /co-founder of GWOP which is God’s Women of Purpose and a lover of all things that refresh. </p>
                        </div>
                    </div>
                </div>

                <div className="home-about">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-4 col-sm-12">
                                <div className="home-about-image wow zoomIn" data-wow-duration="2s" data-wow-delay=".4s">
                                    <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641461422/Joyagunbiade.com/img5_kf4ngo.jpg" alt="loading" />
                                </div>

                            </div>
                            <div className="col-lg-8 col-md-8 col-sm-12">
                                <div className="home-about-text">
                                    <h1>You Get to Choose!</h1>
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6 col-sm-12 wow slideInUp" data-wow-duration="2s" data-wow-delay=".2s">
                                            <p>Each day you and I get to CHOOSE. The choice to take action to accomplish what you want or what you deserve is entirely up to you.
                                                Your choices reflects your hopes and not your fear. Every decision you make, makes you and I'm sure that you, like me, will never let other people choose who you're going to be.
                                                {/* We get this one life to live and I’m sure that you, like me, want to live it well. */}
                                            </p>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 wow slideInRight" data-wow-duration="2s" data-wow-delay=".4s">
                                            <p>I write, speak, and share my life in hopes that it might encourage you, help you grow, and inspire you to make choices today that will build the
                                                tomorrow of your dreams. <br />If you need a friend to cheer you on to choose right. . .

                                            </p>
                                            <span>I’m your girl.</span>
                                        </div>
                                    </div>
                                    <div className="button">
                                        <NavLink to='/about' className="navlinks-btn schedule-btn">Learn More</NavLink>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* schedule for a meeting */}
                <div className="home-schedule">
                    <div className="container">
                        <div className="home-schedule-col">
                            <h1>Want to Schedule us for an Event?</h1>
                            <div className="button ">
                                <NavLink to='/contact' className="navlinks-btn schedule-btn">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>
                </div>

                {/*this sections is for the blog, podcast and so on  */}
                <div className="home-card">
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
                        <div className="home-blog-heading wow slideInLeft" data-wow-duration="2s" data-wow-delay=".1s">
                            Latest from my <span>Blog</span>
                        </div>


                        {this.state.loading ? (<div>
                            <div className="loading" style={{ paddingBottom: "30px" }}></div>
                        </div>) : (
                            <div className="home-blog-design">
                                {this.state.data.sort((a, b) => moment(new Date(b.createdAt)) - moment(new Date(a.createdAt))).slice(0, 3).map((item, i) => {
                                    return (
                                        <div className="home-blog-card wow slideInUp" key={i}  >
                                            <div className='home-blog-img'><span><img src={item.image} alt="loading" /></span></div>
                                            <div className="home-blog-content">
                                                <div className="">
                                                    <p className="title">{item.title}</p>
                                                    <div className='blog-text-display'>
                                                        <p className="blog-text">{item.excerpt}...</p>

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
