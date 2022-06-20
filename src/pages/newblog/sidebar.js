import React, { Component } from 'react';
import { NavLink} from "react-router-dom";
import {FaInstagram} from 'react-icons/fa';
import {RiLinkedinFill} from 'react-icons/ri'
import moment from 'moment';
import Searchbar from './searchbar/searchbar';

export class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
        data:[],
        searchTerm:"",
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
  render() {
    return (
      <div>
        <div className="blog-sidebar">
          <Searchbar placeholder="Search here"  />
      
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
                                      <img src={item.acf.image.url} alt="loading" />
                                      <div className="sidebar-postcontent">
                                          <span dangerouslySetInnerHTML={{__html:  item.title.rendered}} /><br />
                                          <p>{moment(item.date).format("MMMM")} {moment(item.date).format("Do")}, {moment(item.date).format("YYYY")}</p>
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
    )
  }
}

export default Sidebar