import React, { Component } from 'react';
import './about.css';
// import funimage from '../../images/img2.jpg';
// import familyimage from '../../images/img4.jpg';
import Pagesheader from '../../components/pagesheader/pagesheader';
import aboutimg from '../../images/img5.jpg'

export class About extends Component {
    render() {
        return (
            <div className="newaboutpage">
                <Pagesheader title="Picture will be here" />
                <div className="container">
                    <div className="newabout">
                        <div className="newabout-img">
                            <img src={aboutimg} alt="loading"  />
                        </div>

                        <div className="newaboutgroup-text">
                            <div className="newabout-title">Who I am</div>
                            <div className="newabout-text">
                                My name is Joy Agunbiade and I am first a child of God, before anything else. Wait a minute, hold that thought before any conclusions are made, I am here to serve you. A people lover both in my specific purpose 
                                and my career path. A Human Resources professional by trade with a background in psychology from Unilag. 
                            </div>

                            <div className="newabout-text">
                                I have a strong passion for people discovering their purpose and walking in it fully. I believe life is much sweeter when you know what you’re called by God to be and you simply being that. I am the steward /co-founder of GWOP which is God’s Women of Purpose. 
                                A place where women are equipped with the tools, resources and environment needed to discover and fulfil purpose.
                            </div>

                            <div className="newabout-text">
                                When I’m not working I’ll be on some adventure solo trips, or supporting charity projects, hosting talk shows, podcasts and 
                                evangelistic events. I am on a mission to transmit God’s message from His heart to yours by any means possible. 
                            </div>

                            <div className="newabout-text">
                                And the journey continues <span>. . .</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // <div className="aboutpage">
            //     <div className="container">
            //         <div className="">
            //             <div className="row">
            //                 <div className="col-lg-7 col-md-12 col-sm-12">
            //                     <div className="about-content">
            //                         <div className="about-title">Fun</div>
            //                         <div className="about-text">
            //                             <p>The first thing you should know is that writing specifically to tell you 
            //                                 about myself is hugely unnerving for me.  So here’s what I’d tell you if I had a minute-to-spin-it.
            //                             </p>
            //                             <p>I'm a . . .</p>
            //                             <p>Jesus girl. Wife. Mom. Writer. Speaker. Singer. Homeschooler. Bibliovore. Techie. Hopeless
            //                                  Romantic. Starbucks Junkie. Foodie. Fashion Newbie. Runner Wannabe. Sweet Tea Connoisseur.</p>
            //                         </div>
            //                     </div>
            //                 </div>
            //                 <div className="col-lg-4 col-md-12 col-sm-12">
            //                     <div className="about-image">
            //                         <img src={funimage} alt="loading" className="funimage" />
            //                     </div>
            //                 </div>
            //             </div>

            //             <div className="aboutfamily">
            //                 <div className="row">
            //                     <div className="col-lg-4 col-md-12 col-sm-12">
            //                         <div className="about-image">
            //                             <img src={familyimage} alt="loading" />
            //                         </div>
            //                     </div>
            //                     <div className="col-lg-8 col-md-12 col-sm-12">
            //                         <div className="about-content about-content2">
            //                             <div className="about-title">Family</div>
            //                                 <div className="about-text">
            //                                     <p>The first thing you should know is that writing specifically to tell you 
            //                                         about myself is hugely unnerving for me.  So here’s what I’d tell you if I had a minute-to-spin-it.
            //                                     </p>
            //                                     <p>I consider myself blessed to be the mother in an awesome family and also to be a daughter in an awesome family.  I am the first born of a man and woman who have shown me what it means to love Jesus, love their family, and work hard to establish a legacy.  I am the 
            //                                         sister of siblings who value the legacy they’ve been handed and take their own callings and destinies seriously.</p>
            //                                 </div>
            //                             </div>
            //                     </div>
            //                 </div>
            //             </div>


            //             <div className="aboutfamily">
            //                 <div className="row">
                              
            //                     <div className="col-lg-8 col-md-12 col-sm-12">
            //                         <div className="about-content about-content2">
            //                             <div className="about-title">Education</div>
            //                                 <div className="about-text">
            //                                     <p>The first thing you should know is that writing specifically to tell you 
            //                                         about myself is hugely unnerving for me.  So here’s what I’d tell you if I had a minute-to-spin-it.
            //                                     </p>
            //                                     <p>I consider myself blessed to be the mother in an awesome family and also to be a daughter in an awesome family.  I am the first born of a man and woman who have shown me what it means to love Jesus, love their family, and work hard to establish a legacy.  I am the 
            //                                         sister of siblings who value the legacy they’ve been handed and take their own callings and destinies seriously.</p>
            //                                 </div>
            //                             </div>
            //                     </div>
            //                     <div className="col-lg-4 col-md-12 col-sm-12">
            //                         <div className="about-image">
            //                             <img src={familyimage} alt="loading" />
            //                         </div>
            //                     </div>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </div>
        )
    }
}

export default About
