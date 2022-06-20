import React, { Component } from 'react';
import "./stories.css";
import {BsArrowDown} from "react-icons/bs";
import {Link} from "react-scroll";
import Slider from 'react-slick';
import {BsArrowLeft, BsArrowRight} from 'react-icons/bs';

export class Successtories extends Component {
    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);    

        this.state = {
            data:[],
       }
    }
    componentDidMount(){
        return fetch(`https://wp.joyagunbiade.com/wp-json/wp/v2/gwopfeedback`)
        .then((response) =>response.json())
        .then((responseJson) =>{
            this.setState({
                data: responseJson,
            });
        })
        .catch((error)=>{
            console.log(error)
        })
    }

    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    render(){
        const successStories = {
            dots:false,
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true  ,
            draggable:false  ,
            cssEase:'linear',
            responsive: [
                {
                  breakpoint: 900,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                    }
                  }
            ]
        }

        
        return (
            <div className= "successStories-container">
                <div className="container">
                    <div className="success-bg">
                        <div className="suceessimg-container">
                            <div className="success-img"><img src="https://res.cloudinary.com/hayteetech/image/upload/v1641830400/Joyagunbiade.com/successbg_ehrebs.jpg" alt="loading" /></div>
                        </div>
                        <div className="success2bg">
                            <h1 >Our success stories</h1>
                            <div className="success-text">
                                I have had the privilege of meeting with these ladies from different walks of life and 
                                it has been an exciting experience. Want to know what they think about my programs?
                            </div>
                            <Link to='successStories' spy={true} smooth={false} className="success-link" style={{cursor:"pointer"}}> Read More
                                <span><BsArrowDown className="speaking-arrow" /> </span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="event-schedule"  id="successStories" style={{marginBottom:"30px"}}>
                    <div className="container" >
                        <div className="bg-button" style={{textAlign:"center"}}>
                            <a href="https://us20.list-manage.com/contact-form?u=2080aebe8d57f05901717ffc6&form_id=d98a92d344db8f30b7ca3f5ddcf79bd4" className="bg-navlinkbtn" style={{border:"none"}} >
                                <span>Join Our GWOP program </span>
                            </a>
                        </div>                  
                    </div>
                </div>

                <div className="slider-testimony">
                    <div className="container">
                        <Slider ref={c=> (this.slider = c)} {...successStories} className="Testimony-container" >
                            {this.state.data.map((gwopfeedback, i)=>{
                                return(
                                    <div className="slider-container" key={i} >
                                        <div className="slide-img">
                                            {(gwopfeedback.acf.image) !== false ? (
                                            <img src={gwopfeedback.acf.image.url}  alt="loading"/> 
                                            ) : (
                                                <img src="https://res.cloudinary.com/hayteetech/image/upload/v1641762029/Joyagunbiade.com/avatar_k8x5l3.png"  alt="loading"/>
                                            )} 
                                        </div>
                                        <div className="content-container">
                                            <div className="names">{gwopfeedback.acf.name}</div>
                                            <div className="location">{gwopfeedback.acf.city}</div>
                                            <div className="tesstimony" >{gwopfeedback.acf.feedback}</div>
                                        </div>
                                            
                                    </div>
                                )
                            })}
                        </Slider>
                        <div className="slider-arrow" style={{textAlign:'right'}}>
                            <button className="arrow-btn prev" onClick={()=>this.slider.slickPrev()}><BsArrowLeft  className="slider-arrow-left"/></button>
                            <button className="arrow-btn next" onClick={()=>this.slider.slickNext()}><BsArrowRight className="slider-arrow-right" /></button>
                        </div>
                    </div>
                </div>            
            </div>
        )
    }
}

export default Successtories
