import React, {Component} from "react";
import './blog.css';
import { NavLink} from "react-router-dom";
import {FaInstagram} from 'react-icons/fa';
import {RiLinkedinFill} from 'react-icons/ri'
import moment from 'moment'
import Blogpost from "./blogpost";
import Searchbar from "./searchbar";
import ReactPlayer from "react-player";
import Pagesheader from "../../components/pagesheader/pagesheader";


class Blog extends Component{
    constructor(props) {
        super(props)
    
        this.state = {
            data:[],
            searchTerm:"",
            music: [],
            loading: false,
        }
    }
    setSearchTerm=this.setState({
        
    })
      

    componentDidMount(){
        this.setState({
            loading: true,
        })
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/blogs?per_page=5`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                data: responseJson,
                loading:false
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    componentDidMount(){
        this.setState({
            loading: true,
        })
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/podcasts`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                music: responseJson,
                loading: false
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }
    render(){
        return(
            <div className="blogpage">
                <Pagesheader title="My Chronicles" />
                <div className="container">
                    <div className="blogbackground-container">
                        <p className="text-center">Be <span>inspired</span>!!!</p>
                        <div className="row">
                            <div className="col-lg-7 col-sm-7 col-sm-12">
                                <div className="player-wrapper">
                                    <div className="video-overlay"></div>
                                    <ReactPlayer
                                        url="https://youtube.com/embed/MpvAw_VbD_4"
                                        className="react-player"
                                        playing
                                        muted={true}
                                        loop={true}
                                        controls={true}
                                    />
                                </div>
                                <div className="youtube-playlist">Check our Youtube playlists <a href="https://youtube.com/playlist?list=PLm1J2EyF0MNTCxp7Ko3kVZnCp4wZMUtEA" target="_blank" rel="noopener noreferrer">Here</a></div>
                            </div>

                            <div className="col-lg-5 col-md-5 col-sm-12">
                                {this.state.loading ? (<div>
                                        <div className="loading" style={{padding: "30px 0px"}}></div>
                                    </div>) : (
                                    <div className="blog-spotify"> 
                                        <div className="blog-spotify-title">Listen to my podcast</div>
                                        {this.state.music.map((music,i)=>{
                                            return(
                                                <div className="" key={i}>
                                                    <span>{music.title.rendered}</span>
                                                    <audio controls controlsList='download'  className='container'>
                                                        
                                                        <source src={music.acf.Music.url} type='audio/mpeg'></source>
                                                    </audio>
                                                </div>
                                            )
                                            })
                                        }                                    
                                    </div>
                                )}
                            </div>
                            
                        </div>
                        
                    </div>
                   
                </div>

               
                {/* blog display section starts here */}
                <div className="blog-display-section">
                    <div className="container">
                        <div className="row" >
                            <div className="col-lg-9 col-md-8 col-sm-12">                               
                                <Blogpost />
                            </div>

                            
                            <div className="col-lg-3 col-md-4 col-sm-12">                               
                                <div className="blog-sidebar">
                                    <Searchbar  placeholder="Search for blog..."/>
                               
                                    <div className="blog-sidebar-content">                                       
                                        <div className="blog-sidebar-title">
                                            About me
                                        </div>
                                        <NavLink to="/about" className="blogabout-nav">
                                            <div className="sidebar-content">
                                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641829371/Joyagunbiade.com/img3_tvwlt0.jpg" alt="loading" className="sidebar-img" />
                                                
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
                                                <li><a href="https://www.instagram.com/joy_ajay/" className="blog-connect" target="_blank"  rel="noopener noreferrer"><FaInstagram className="connect-icon" /></a></li>
                                                <li><a href="https://ca.linkedin.com/in/joy-agunbiade-chrp-cdr-38740a123" target="_blank"  rel="noopener noreferrer" className="blog-connect"><RiLinkedinFill className="connect-icon" /></a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    {/* recent post starts here */}

                                    {this.state.loading ? (<div>
                                            <div className="loading" style={{padding: "30px 0px"}}></div>
                                        </div>) : (
                                        <div className="blog-sidebar-content">                                       
                                            <div className="blog-sidebar-title">
                                                Recent Posts
                                            </div>
                                            <div className="sidebarposts">                                
                                                {this.state.data.map((item,i)=>{
                                                    return(
                                                        <NavLink to={`/blogs/${item.id}`} className="sidebarposts-nav">
                                                            <div className="sidebar-post" key={i}>
                                                                <div>{item.id}</div>
                                                                <img src={item.acf.image.url} alt="loading" />
                                                                <div className="sidebar-postcontent">
                                                                    <h2>Hello</h2>
                                                                    <span dangerouslySetInnerHTML={{__html:  item.title.rendered}} /><br />
                                                                    <span>{moment(item.date).format("MMMM")} {moment(item.date).format("Do")}, {moment(item.date).format("YYYY")}</span>
                                                                </div>
                                                            </div>
                                                        </NavLink>
                                                        )}
                                                )}
                                                
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default Blog;
