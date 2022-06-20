import React, { Component, Fragment } from 'react';
import "./blogitem.css";
import {ImQuotesLeft,ImQuotesRight} from "react-icons/im";
import ReactPlayer from 'react-player';
import Sidebar from '../sidebar';

export class Blogitem extends Component {
    
        state = {
             blogs:{},
             isLoaded:false
        }
    

    componentDidMount(){
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/blogs/${this.props.match.params.id}`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                blogs: responseJson,
                isLoaded:true
            
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    render() {
        const {blogs, isLoaded} =this.state;
        if(isLoaded){
            return (
                <Fragment>
                    {/* <Link to="/jaweb">Go back</Link> */}
                    
                    <div className="blogitem-background">
                        <h1 className="text-center">Joy Agunbiade</h1>
                        <p className="text-center" dangerouslySetInnerHTML={{__html:  blogs.title.rendered}} />
                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-lg-9 col-md-9 col-sm-12">
                                <div className="blog-item-container">
                                    <div className="blog-item-logo">
                                        <div className="row">
                                            <div className="col-2">
                                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641566846/Joyagunbiade.com/blogitem-logo_byljpv.jpg" alt="logo" />
                                            </div>
                                            <div className="col-10">
                                                <div className="blog-item-logo-text">From the office of <span>Joy agunbiade </span></div>
                                            </div>
                                        </div>
                                        
                                        
                                    </div>

                                    <div className="display-each-blog">
                                        <div className="each-blog-title">
                                            <span><ImQuotesLeft className="each-blog-quote" /></span>
                                            <span dangerouslySetInnerHTML={{__html:  blogs.title.rendered}} />
                                            <span className="each-blog-quote"><ImQuotesRight /></span>
                                        </div>

                                        <hr className="hr-line" />

                                        <div className="">
                                            { (blogs.acf.podcast) !== false ? (
                                                <div className="blog-podcast-audio">
                                                    <audio controls>
                                                        <source src={blogs.acf.podcast.url} type="audio/ogg" />
                                                    </audio>
                                                    <div className="blog-spotify-container">
                                                    Check <a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" className="blog-spotify"target="_blank" rel="noopener noreferrer" >spotify</a> for more of our Podcasts
                                                </div>
                                                </div>
                                                
                                            ) : (
                                                <div className="blog-spotify-container">
                                                    Check <a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" className="blog-spotify"target="_blank" rel="noopener noreferrer" >spotify</a> for our Podcasts
                                                </div>
                                            )}
                                        </div>

                                        <div className="display-each-img">
                                            <img src= {blogs.acf.image.url} alt="loading" width="100%" />
                                        </div>

                                        <p dangerouslySetInnerHTML={{__html:blogs.content.rendered}} />

                                        <div className="blog-watch" style={{margin: "20px 0px"}}>
                                            <ReactPlayer url="https://m.youtube.com/watch?v=MpvAw_VbD_4&list=PLRD0eUzezIu2-ibYbRz7-Y0deAMYfFQNc&index=10" 
                                             controls width="100%"
                                            />
                                        </div>
                                    </div>

                                    
                                  
                                </div>
                            </div>

                            <div className="col-lg-3 col-md-3 col-sm-12">
                                <div style={{marginTop:"30px"}}>
                                    <Sidebar />
                                </div>
                               
                            </div>
                        </div>
                    </div>
                    
                                
                               
                </Fragment>
            )
        }return <div className="loading" style={{margin: "30px"}}></div>
        
    }
}

export default Blogitem
