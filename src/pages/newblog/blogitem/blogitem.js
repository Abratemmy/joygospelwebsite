import React, { useState, useEffect, Fragment } from 'react';
import "./blogitem.css";
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im";
import ReactPlayer from 'react-player';
import Sidebar from '../sidebar';
import { useParams } from 'react-router-dom';
import blogData from '../../../components/data/BlogData';


function Blogitem() {
    const { title } = useParams();
    // const [singleblog, setSingleblog] = useState([]);
    const [loading, setLoading] = useState(false);
    const singleblog = blogData.find(data => ((data.title).split(" ").join("-")) === title)


    // useEffect(() => {
    //     const getTemplate = async () => {
    //         setLoading(true);
    //         let response = await blogData;
    //         console.log("resp", response)
    //         setSingleblog(response);
    //         setLoading(false);
    //     }
    //     getTemplate();
    // }, [title])



    return (
        <Fragment>
            <div className="blogitem-background">
                <h1 className="text-center">Joy Gospel</h1>
                <p className="text-center">{singleblog.title}</p>
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
                                        <div className="blog-item-logo-text">From the office of <span>Joy Gospel </span></div>
                                    </div>
                                </div>


                            </div>

                            <div className="display-each-blog">
                                <div className="each-blog-title">
                                    <span><ImQuotesLeft className="each-blog-quote" /></span>
                                    <span>{singleblog.title}</span>
                                    <span className="each-blog-quote"><ImQuotesRight /></span>
                                </div>

                                <hr className="hr-line" />


                                <div className="">
                                    {/* {singleblog.podcast !== "" ?
                                        <div className="blog-podcast-audio">
                                            <audio controls autoPlay>
                                                <source src={singleblog.podcast} id="src_mpeg" type="audio/mpeg" />
                                            </audio>

                                            <audio src={singleblog.podcast} controls autoPlay id="src_mpeg" type="audio/mp3" />

                                            <div className="blog-spotify-container">
                                                Check <a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" className="blog-spotify" target="_blank" rel="noopener noreferrer" >spotify</a> for our Podcasts
                                            </div>
                                        </div>

                                        :
                                       
                                    } */}
                                    <div className="blog-spotify-container">
                                        Check <a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" className="blog-spotify" target="_blank" rel="noopener noreferrer" >spotify</a> for our Podcasts
                                    </div>


                                    {/* {(singleblog.podcast) !== false ? (
                                        <div className="blog-podcast-audio">
                                            <audio controls>
                                                <source src={singleblog.podcast} type="audio/mpeg" />
                                            </audio>
                                            <div className="blog-spotify-container">
                                                Check <a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" className="blog-spotify" target="_blank" rel="noopener noreferrer" >spotify</a> for more of our Podcasts
                                            </div>
                                        </div>

                                    ) : (
                                        
                                    )} */}
                                </div>

                                <div className="display-each-img">
                                    <img src={singleblog.image} alt="loading" width="100%" />
                                </div>

                                <p >{singleblog.text.map((data, i) => {
                                    return (
                                        <p key={i}>{data.content}</p>
                                    )
                                })}</p>

                                <div className="blog-watch" style={{ margin: "20px 0px" }}>
                                    <ReactPlayer url="https://m.youtube.com/watch?v=MpvAw_VbD_4&list=PLRD0eUzezIu2-ibYbRz7-Y0deAMYfFQNc&index=10"
                                        controls width="100%"
                                    />
                                </div>
                            </div>



                        </div>
                    </div>

                    <div className="col-lg-3 col-md-3 col-sm-12">
                        <div style={{ marginTop: "30px" }}>
                            <Sidebar />
                        </div>

                    </div>
                </div>
            </div>



        </Fragment>
    )
}


export default Blogitem
