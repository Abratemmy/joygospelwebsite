import React, { Component } from 'react';
import Slider from 'react-slick';
import "./reactslick.css";
import {IoIosArrowForward, IoIosArrowBack} from "react-icons/io"

export class Reactslick extends Component {
    
    constructor(props) {
        super(props);
        this.next=this.next.bind(this);
        this.previous=this.previous.bind(this);        
    }
    next(){
        this.slider.slickNext();
    }
    previous(){
        this.slider.slickPrev();
    }

    render() {
        var settings = {
            infinite: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 10000,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase:'linear',
            fade:true,
            className:"homeslides"
          };
        return (
            <div style={{width: "100%", position:"relative"}}>
                <div className="background-pictures background-image2 ">
                    <div className='container'>
                        <Slider ref={c=> (this.slider = c)} {...settings} className="Slider">
                            <div className="animated slideInDown background-text container" style={{animationDelay:'1s'}} >
                                <div className="row">
                                    <div className="col-lg-5 col-md-7 col-sm-10">
                                        <div className="">
                                            <h1 className="background-header">Its time to arise and build a new you!!!</h1>
                                                                                
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="animated slideInDown background-text container" style={{animationDelay:'1s'}} >
                                <div className="row">
                                    <div className="col-lg-5 col-md-7 col-sm-10">
                                        <div className="">
                                                <h1 className="background-header">Discover and fulfill destiny in christ!!!</h1>
                                                                                
                                            </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                </div>
               
               {/* <div className="container">
                    <div className="homeslide-arrow" >
                        <button className="arrow-btn prev" onClick={()=>this.slider.slickPrev()}><IoIosArrowBack  className="slider-arrow-left"/></button>
                        <button className="arrow-btn next" onClick={()=>this.slider.slickNext()}><IoIosArrowForward className="slider-arrow-right" /></button>
                    </div>
                </div> */}
                
            </div>
        )
    }
}

export default Reactslick
