import React, {Component} from "react";
import './blog.css';
import blogimage from "../../images/img3.jpg";
import { NavLink } from "react-router-dom";
import {FaFacebookF,FaTwitter, FaInstagram} from 'react-icons/fa';
import { BiSearch } from "react-icons/bi";


class Blog extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
             data:[],
             searchTerm:"",
        }
    }
    setSearchTerm=this.setState({
        
    })
    componentDidMount(){
        return fetch(`http://localhost/jaweb/wp-json/wp/v2/blogs`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({data: responseJson});
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return(
            <div className="blogpage">
                <div className="blog-background">
                    <div className="container">
                        <div className="text-center blog-background-text">
                            <h2>JOY AGUNBIADE</h2>
                            <div>The blog</div>
                            <h4>Chronicles</h4>
                        </div>
                    </div>
                </div>

                {/* blog display section starts here */}
                <div className="blog-display-section">
                    <div className="container">
                        <div className="row" >
                            <div className="col-lg-9 col-md-9 col-sm-12">                               
                                {this.state.data.filter((item)=>{
                                    if(this.state.searchTerm === ""){
                                        return item 
                                    }else if(item.title.rendered.toLowerCase().includes(this.state.searchTerm.toLowerCase())){
                                        return item
                                    }
                                }).map((item,i)=>{
                                return(
                                <div className="blog-container"  key={i}>
                                    <div className="row">
                                        <div className="col-lg-2 col-md-2 col-sm-2">
                                            <div className="blog-date">
                                                {item.date}
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-7 col-sm-7">
                                            <div className="blog-date">
                                            <img src={item.acf.Image_here.url} alt="loading" width="100%" />
                                            </div>
                                        </div>
                                        <div className="col-lg-5 col-md-12 col-sm-12">
                                            <div className="blog-date">
                                                blog content {item.title.rendered}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )}
                                )}
                            </div>
                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div className="blog-sidebar">
                                <div className="blog-sidebar-content">
                <div className="blog-sidebar-title">
                    Search
                </div>
                <div className="input-group blog-input-group">
                    <input type="text" className="form-control blog-input" placeholder="Search for..." 
                        onChange={(event) => {
                            this.setSearchTerm(event.target.value)
                        }} 
                    />
                    <span className="input-group-btn blog-input-group">
                        <button className="btn btn-search" type="button"><BiSearch className="search-icon" /></button>
                    </span>
                </div>
            </div>

                                    <div className="blog-sidebar-content">                                       
                                        <div className="blog-sidebar-title">
                                            About me
                                        </div>
                                        <NavLink to="/jaweb/about" className="blogabout-nav">
                                            <div className="sidebar-content">
                                                <img src={blogimage} alt="loading" className="sidebar-img" />
                                                
                                                <div className="blog-about-text">Hi, I'm joy. <br /> Come say hi . . . </div> 
                                            </div>
                                        </NavLink>
                                    </div>

                                    <div className="blog-sidebar-content">                                       
                                        <div className="blog-sidebar-title">
                                            Connect with me :.
                                        </div>
                                        <div className="blog-sidebar-list">
                                            <ul>
                                                <li><NavLink to="http://www.facebook.com" className="blog-connect"><FaFacebookF className="connect-icon" /></NavLink></li>
                                                <li><NavLink to="http://www.twitter.com" className="blog-connect"><FaTwitter className="connect-icon" /></NavLink></li>
                                                <li><NavLink to="http://www.instagram.com" className="blog-connect"><FaInstagram className="connect-icon" /></NavLink></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* recent post starts here */}
                                    <div className="blog-sidebar-content">                                       
                                        <div className="blog-sidebar-title">
                                            Recent Posts
                                        </div>
                                        <div className="sidebarposts">
                                            <NavLink to="/" className="sidebarposts-nav">
                                            {this.state.data.map((item,i)=>{
                                                return(
                                                <div className="sidebar-post">
                                                    <img src={item.acf.Image_here.url} alt="loading" />
                                                    <div className="sidebar-postcontent">
                                                        {item.title.rendered} <br />
                                                        <span>{item.date}</span>
                                                    </div>
                                                </div>)}
                                            )}
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.state.data.map((item,i) =>(<p key={i}>{item.title.rendered}</p>))}
                </div>
            </div>
        )
    }
    
}

export default Blog;
