import React, { useState} from 'react';
import Pagesheader from '../../components/pagesheader/pagesheader';
import "./speaking.css";
import data from '../../pages/speaking/country'

function Speaking(){

    const[form, setForm]= useState({
        firstname:"",
        email:"",
        country:"Canada",
    })

    const onChange =(e)=>{
        const {value, name} = e.target;
        setForm((state)=>({
            ...state,
            [name]:value
        }));
    }
    return (
        <div className="speakingpage">
            <Pagesheader title="Speaking Request"/>

            picture will be display here also. i will need your speaking picture

            <div className="text-center speakingcontent">
                <div className="title">Invite Joy as a <span>guest Speaker</span></div>
                <p>I am honored for your interest in booking me to speak at your events. Simply complete the form below and someone from my team will attend to you promptly</p>
            </div>

            <div className="container">
                <div className="speaking-container">
                    <div className="sendform">Send a Form</div>
                    <form>
                        <div className="speaking-text">Fields marked with an <span>*</span> are required</div>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="speaking-form">
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" rules="required|max:255" name="lastname"placeholder="Last Name"  className="inputfield"/>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="speaking-form">
                                    <label>Last Name <span>*</span></label>
                                    <input type="text" rules="required|max:255" name="lastname"placeholder="Last Name"  className="inputfield"/>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Email <span>*</span></label>
                                    <input type="email" rules="required|max:255" name="email"placeholder="Email"  className="inputfield"/>
                                </div>
                            </div>
                            
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Phone number <span>*</span></label>
                                    <input type="text" rules="required|max:255" name="Phone number"placeholder="Phone number"  className="inputfield"/>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Organisation Name <span>*</span></label>
                                    <input type="text" rules="required|max:255" name="organisation"placeholder="Organisation name"  className="inputfield"/>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Organisation Website </label>
                                    <input type="url" rules="required|max:255" placeholder="organisation url"  className="inputfield"/>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Country <span>*</span></label>
                                    <select type="text" rules="required|max:255" name="email"placeholder="country"  className="inputfield"
                                        
                                    >
                                            {data.map(item =>{
                                                return(
                                                    <option value="Canada" key={item.id}>{item.country}</option>
                                                )
                                            })}

                                    </select>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Event theme <span>*</span></label>
                                    <input type="text" rules="required|max:255" placeholder="event theme"  className="inputfield"/>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Event date <span>*</span></label>
                                    <input type="date" rules="required|max:255" placeholder="Date"  className="inputfield"/>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="speaking-form">
                                    <label>Number of speaking times <span>*</span></label>
                                    <input type="text" rules="required|max:255" placeholder="Example: 2 times"  className="inputfield"/>
                                </div>
                            </div>

                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="speaking-form">
                                    <label>Speaking hour<span>*</span></label>
                                    <input type="text" rules="required|max:255" placeholder="example: 30 minutes"  className="inputfield"/>
                                </div>
                            </div>

                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Event Description <span>*</span></label>
                                    <textarea type="text" rules="required|max:255" placeholder="event theme"  className="textareafield" rows="4"></textarea>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="speaking-form">
                                    <label>Event Location <span>*</span></label>
                                    <textarea type="text" rules="required|max:255" placeholder="Location"  className="textareafield" rows="4"></textarea>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
    
}

export default Speaking
