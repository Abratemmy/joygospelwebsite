import React from 'react';
import Pagesheader from '../../components/pagesheader/pagesheader';
import "./gwop.css";
import {NavLink} from "react-router-dom";

function Gwop() {
    return (
        <div className="GWOP">
            <Pagesheader title="God's Women of Purpose" />
            <div className="gwopbackground-pic">
                <div className="gwopbg">
                    <div className="container">
                        <div className="bg-text">
                            Ready to Live <span>Meaningfully?</span>
                        </div>

                        <div className="bg-button" style={{paddingTop:"40px"}}>
                            <NavLink to='/' className="bg-navlinkbtn">
                                <span>Join the Program</span>
                            </NavLink>
                        </div>
                        
                        <div className="gwopvertical">
                            The lord will withhold no good things from them that do right
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-gwop">
                <div className="container">
                    <h1 className="title">What is GWOP</h1>

                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="gwop-text">
                                God’s women of purpose is an intentional arena, coaching women for healing, growth and repositioning, to discover and fulfil destiny in Christ. We are made to serve you 
                                by creating an environment for purpose discovery and equipping you with the tools, resources and atmosphere to walk in purpose. 
                            </div>

                            <div className="gwop-text">
                                We are walking towards the mandate of knowing Jesus and making Jesus known in our spheres of influence as women of purpose. We are the salt of the earth in
                                every home, office, marketplace and society at large. We are bounded by Love that is, God.
                            </div>

                            <div className="gwop-text">
                                Join us to embark on that journey together to discover purpose and live it out loud!
                            </div>

                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
            </div>

            <div className="event-schedule">
                <div className="container">
                    <div className="bg-button gwopbutton" style={{textAlign:"center"}}>
                        <a href='https://us20.list-manage.com/contact-form?u=2080aebe8d57f05901717ffc6&form_id=d98a92d344db8f30b7ca3f5ddcf79bd4' target="_blank" rel="noopener noreferrer" className="bg-navlinkbtn" >
                            <span>Click here to register for GWOP</span>
                        </a>
                    </div>
                </div>
            </div>


            <div className="gwop-success">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                        <div className="col-lg-10 col-md-10 col-sm-10">
                            <div className="gwopsuccess-container">
                                <h1 className="title">
                                    Who is the program for?
                                </h1>
                                <div className="gwopsuccesslist">
                                    <div className="sub-title">This Gwop program is for women who want to:</div>
                                    <ul>
                                        <li>Understand the right approach to life</li>
                                        <li>Understandd your purpose</li>
                                        <li>Discover and fulfill destiny in Christ</li>
                                        <li>Turn your purpose into actionable steps</li>
                                        <li>Recognise who you are, Why you are and where you are going</li>
                                    </ul>

                                    <div className="">
                                        <div className="bg-button" style={{paddingTop:"40px", textAlign:"center"}}>
                                            <NavLink to='/jaweb/success_stories' className="bg-navlinkbtn">
                                                <span>Success Stories</span>
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1 col-md-1 col-sm-1"></div>
                    </div>
                </div>
                
            </div>

            {/* gwop form start here */}
          
            {/* <a href="https://us20.list-manage.com/contact-form?u=269bbf5457062df84e12282b8&form_id=068f6c0e0bdfefe92cb7f41d9c1908f0">fill form</a> */}
            {/* <div className="gwop-form">
                <div id="mc_embed_signup">
                    <form action="https://joyagunbiade.us20.list-manage.com/subscribe/post?u=269bbf5457062df84e12282b8&amp;id=13427490c4" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"  noValidate>
                        <div id="mc_embed_signup_scroll">                
                            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
                            
                            <div className="mc-field-group">
                                <label htmlFor="mce-EMAIL">Email Address  <span className="asterisk">*</span></label>
                                <input type="email" value="" name="EMAIL" className="required email" id="mce-EMAIL" />
                            </div>

                            <div className="mc-field-group">
                                <label htmlFor="mce-FNAME">Name  <span className="asterisk">*</span></label>
                                <input type="text" value="" name="FNAME" className="required" id="mce-FNAME" />
                            </div>

                            <div className="mc-field-group">
                                <label htmlFor="mce-MMERGE2">City  <span className="asterisk">*</span></label>
                                <input type="text" value="" name="MMERGE2" className="required" id="mce-MMERGE2" />
                            </div>

                            <div className="mc-field-group">
                                <label htmlFor="mce-BIRTHDAY">What are your goals for joining this group? </label>
                                <input type="text" value="" name="BIRTHDAY" className="" id="mce-BIRTHDAY" />
                            </div>

                            <div className="mc-field-group size1of2">
                                <label htmlFor="mce-MMERGE6">Phone Number </label>
                                <input type="text" name="MMERGE6" className="" value="" id="mce-MMERGE6" />
                            </div>

                            <div className="mc-field-group input-group">
                                <strong>Are you saved? </strong>
                                <ul>
                                    <li><input type="radio" value="Yes" name="MMERGE7" id="mce-MMERGE7-0" /><label htmlFor="mce-MMERGE7-0" >Yes</label></li>
                                    <li><input type="radio" value="No" name="MMERGE7" id="mce-MMERGE7-1" /><label htmlFor="mce-MMERGE7-1">No</label></li>
                                    <li><input type="radio" value="I don't know what that means honestly" name="MMERGE7" id="mce-MMERGE7-2" /><label htmlFor="mce-MMERGE7-2">I don't know what that means honestly</label></li>
                                </ul>
                            </div>

                            <div className="mc-field-group input-group">
                                <strong>How committed are you to reaching the goal(s) you have set? </strong>
                                <ul>
                                    <li><input type="checkbox" value="1" name="group[183484][1]" id="mce-group[183484]-183484-0"/><label htmlFor="mce-group[183484]-183484-0">Somewhat committed</label></li>
                                    <li><input type="checkbox" value="2" name="group[183484][2]" id="mce-group[183484]-183484-1" /><label htmlFor="mce-group[183484]-183484-1">Really committed</label></li>
                                    <li><input type="checkbox" value="4" name="group[183484][4]" id="mce-group[183484]-183484-2" /><label htmlFor="mce-group[183484]-183484-2">Absolutely committed</label></li>
                                </ul>
                            </div>

                            <div id="mce-responses" className="clear foot">
                                <div className="response" id="mce-error-response" style={{display:"none"}}></div>
                                <div className="response" id="mce-success-response" style={{display:"none"}}></div>
                            </div>

                            <div style={{position: "absolute", left: "-5000px", ariaHidden:"true"}}><input type="text" name="b_269bbf5457062df84e12282b8_13427490c4" tabIndex="-1" value="" /></div>
                            
                            <div className="optionalParent">
                                <div className="clear foot">
                                    <input type="submit" value="Submit" name="submit" id="mc-embedded-subscribe" className="button" />
                                    
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                   
                    
            </div> */}



        </div>
    )
}

export default Gwop
