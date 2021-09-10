import React, { Component } from 'react';
import './home.css'
import joygif from '../../images/JOYAGIF.gif';
import homeaboutimage from '../../images/img9.jpg';
import { Link, NavLink } from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md';
import book from "../../images/book.JPG";
import podcast from "../../images/podcasts.JPG";
import mentor from '../../images/img4.jpg';

export class Home extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             isLoaded:false
        }
    }
    componentDidMount(){
        return fetch(`http://localhost/jaweb/wp-json/wp/v2/blogs?per_page=3`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                data: responseJson,
                isLoaded:true
            
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render() {
        const {data, isLoaded} =this.state;
        if(isLoaded){
            return (
                <div className="homepage">
                <div className="container">                  
                        <h1 >It's time to <br />Keep the <span>light burning</span></h1>  
                    </div>
                    
                    <div className="home-img">
                        <img src={joygif} alt="loading" width="100%"/>
                    </div>

                    <div className="home-introduction ">
                        <div className="container">
                            <div className="home-container">
                                <h1 className="home-title-cursive">Hi there! I’m Joy!</h1>
                                <p>Wife, Mother, Pastor, Author, Mentor,  Podcaster, Traveller. Welcome to my classroom, podcast and all things JESUS!  </p>
                            </div>
                        </div>
                    </div>

                    <div className="home-about">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-12">
                                    <div className="home-about-image">
                                        <img src={homeaboutimage} alt="loading"/>
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
                                    <div className="button">
                                        <NavLink to='/jaweb/about' className="navlinks-btn">Learn More</NavLink>
                                    </div>
                                </div>
                            </div>                        
                        </div>
                    </div>

                    {/* schedule for a meeting */}
                    <div className="home-schedule">
                        <div className="container">
                            <h1>Want to Schedule us for an Events?</h1>
                            <div className="button">
                                <NavLink to='/contact' className="navlinks-btn">Contact Us</NavLink>
                            </div>
                        </div>
                    </div>  

                    {/*this sections is for the blog, podcast and so on  */}
                    <div className="home-card">
                        <div className="container">
                            <div className="home-card-title">
                                Here's what <br /><span>I have for you</span>
                            </div>
                            <div className="row">
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <NavLink to="/books" className="card-navlink">
                                    <div className="card card-style" >
                                        <img className="card-img-top" src={book} alt="Card  cap" />
                                        <div className="card-body">
                                            <p className="card-text">Books</p>
                                        </div>
                                        <div className="card-hover"></div>
                                    </div>
                                    <div className="card-arrow">
                                        <MdKeyboardArrowRight className="icon-arrow" />
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <NavLink to="/mentorship" className="card-navlink">
                                    <div className="card card-style card-style2" >
                                        <img className="card-img-top card-img2" src={mentor} alt="Card image cap" />
                                        <div className="card-body">
                                            <p className="card-text">Mentorship</p>
                                        </div>
                                        <div className="card-hover card-hover2"></div>
                                    </div>
                                    <div className="card-arrow">
                                        <MdKeyboardArrowRight className="icon-arrow" />
                                    </div>
                                </NavLink>
                            </div>
                            <div className="col-lg-4 col-md-12 col-sm-12">
                                <NavLink to="/podcast" className="card-navlink">
                                    <div className="card card-style" >
                                        <img className="card-img-top" src={podcast} alt="Card image cap" />
                                        <div className="card-body">
                                            <p className="card-text">Podcast</p>
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
                            <p className="jesustext">“Jesus knows right where you are and He knows how long you’ve been there. “</p>
                        </div>
                    </div>

                    {/* blog section starts here. just to display 3 only  */}
                    <div className="home-blog">
                        <div className="container">
                            <div className="home-blog-heading">
                                Latest from my <span>Blog</span>
                            </div>

                            <div className="home-blog-design">
                                {this.state.data.map((item,i)=>{
                                    return(
                                        <div className="home-blog-card" key={i}>
                                            <img src={item.acf.Image_here.url} alt="loading" width="100%" />
                                            <div className="home-blog-content">
                                                <div className="date">{item.date}</div>
                                                <div className="">
                                                    <p className="title">{item.title.rendered}</p>
                                                    <p className="blog-text" dangerouslySetInnerHTML={{__html: item.excerpt.rendered}}/>
                                                </div>
                                            </div>
                                            <div className="button blog-button">
                                                <Link to= {`/jaweb/blogs/${item.id}`} className="navlinks-btn">Read More</Link>
                                            </div>

                                        </div>
                                    )
                                }
                                    )}
                                
                            </div>
                        </div>
                    </div>
                        
                </div>
            )
        }return<h3>Loading</h3>
    }
}

export default Home
