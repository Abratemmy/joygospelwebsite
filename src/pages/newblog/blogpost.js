import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import moment from 'moment';
import ReactPaginate from "react-paginate";

const Blogpost = () => {

    // const [search, setSearch] = useState("")
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(false);

    // const filteredBlogname= blogs.filter(blogsearch =>{
    //    return  blogsearch.title.rendered.toLowerCase().includes(search.toLowerCase())
    // })

    useEffect(() => {
        const fetchBlogs = async () => {
            setLoading(true);
            const res = await axios.get('https://joyagunbiadeserver.onrender.com/blog');
            setBlogs(res.data);
            setLoading(false);
        }
        fetchBlogs()
    }, []);

    const [pageNumber, setPageNumber] = useState(0);
    const blogPerPage = 3
    const blogVisited = pageNumber * blogPerPage
    // this.state.data
    const displayBlogs = blogs.sort((a, b) => moment(new Date(b.createdAt)) - moment(new Date(a.createdAt))).slice(blogVisited, blogVisited + blogPerPage).map((item, i) => {
        return (
            <div className="blogpageposts" key={i}>
                <div className="row blogpagepostsrow">
                    <div className="col-lg-2 col-md-3 col-sm-12">
                        <div className="blog-date" >
                            <div className="blog-date-days">{moment(item.createdAt).format("D")}</div>
                            <div className="blog-date-monthyear">{moment(item.createdAt).format("MM")},
                                <span> {moment(item.createdAt).format("YYYY")}</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-8 col-sm-12">
                        <div className="blog-image">
                            <img src={item.image} alt="loading" width="100%" />
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12 col-sm-12">
                        <div className="blog-text">
                            <div className="blog-title">
                                <p>{item.title}</p>
                            </div>
                            <div className="blog-title-details">
                                By <span>{item.publisher}</span> | {moment(item.createdAt).format("MMMM")} {moment(item.createdAt).format("Do")}, {moment(item.createdAt).format("YYYY")}
                            </div>

                            <div className="blog-podcast" >
                                {item.podcast !== "" ? (
                                    <div className="blog-podcast-audio">
                                        <audio controls>
                                            <source src={item.podcast} type="audio/ogg" />
                                        </audio>
                                    </div>

                                ) : (
                                    <div className="blog-spotify-container">
                                        Check <a href="https://open.spotify.com/show/5o1MOtBi5EqZcmczN7RRt9" className="blog-spotify" target="_blank" rel="noopener noreferrer" >spotify</a> for our Podcasts
                                    </div>
                                )}

                            </div>

                            <div className="">
                                <p><span className="blog-readmore" >{item.content}</span></p>
                            </div>

                            <div className="blogposts-btn text-right">
                                <Link to={`/blogs/${item.title.split(" ").join("-")}`} className="blogpost-nav">Read More</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="hr-line" />
            </div>
        )
    })

    const pageCount = Math.ceil(blogs.length / blogPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected);
        // this is to scroll up when 
        window.scrollTo(0, 0)
    }

    if (loading) {
        return <div className="loading" style={{ margin: "30px" }}></div>
    } else {
        return (
            <div className="blogpostpage">
                {displayBlogs}
                <ReactPaginate
                    previousLabel={"Prev"}
                    nextLabel={"Next"}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={"paginationBttns"}
                    previousLinkClassName={"previousBttn"}
                    nextLinkClassName={"nextBttn"}
                    activeClassName={"paginationActive"}
                    disabledClassName={"paginationDisabked"}
                />

            </div>

        )
    }
}

export default Blogpost
