import React, { useState, useEffect, Fragment} from 'react';
import axios from 'axios';
import "./speaking.css";
import {Link} from "react-scroll";
import {BsArrowDown} from "react-icons/bs";
import Countryform from './countryform';
import { useHistory } from 'react-router-dom';
import emailjs from "emailjs-com";

function Speaking () {
    const [event, setEvent] = useState([]);

    useEffect(() =>{
        const fetchEvents = async () =>{
            const res = await axios.get('https://wp.joyagunbiade.com/wp-json/wp/v2/events');
            setEvent(res.data);
        }
        fetchEvents()
    }, []);

	const currentDate = new Date();


    const history = useHistory();
	const [values, setValues] = useState({
		fullname: "",
		email:"",
        phonenumber:"",
        organisation:"",
        date:"",
        speakingtime:"",
        speakinghour:"",
        description:"",
        location:""
	});
	const [errors, setErrors] = useState({});
	// get input values
	const handleChange = (ev) => {
		setValues({
			...values,
			[ev.target.name]: ev.target.value,
		});
	};

	// handle errors
	const handleError = (targets) => {
		let errorsValue = {};
		if (!targets.fullname) errorsValue.fullname = "Name is required";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if(!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (!targets.phonenumber) errorsValue.phonenumber = "Number is required";
        if (!targets.organisation) errorsValue.organisation = "Organisation name is required";
        if (!targets.date) errorsValue.date = "Event date is required";
        if (!targets.speakingtime) errorsValue.speakingtime = "Time is required";
        if (!targets.speakinghour) errorsValue.speakinghour = "Speaking hour is required";
        if (!targets.description) errorsValue.description = "Give details about the event";
        if (!targets.location) errorsValue.location = "Event location is required";
		
		if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
		else setErrors({});

		return Object.keys(errorsValue).length;

	};

	// submit form
    const submitForm = async (ev) => {
		ev.preventDefault();
		let v = handleError(values);

	
		if (v > 0) console.log("error");
	
		else {
            sendEmail(ev);
            history.push('/formsucess');
            console.log("submitted");
        }
	};

    function sendEmail(ev){
        emailjs.sendForm(
            'service_dc5k058',
            'template_rk581sj', 
            ev.target,
            'user_yoxh48pUvyJLh1hnCQlKt'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err))
    }
    return (
        <div className="speakingpage">
            <div className="speaking-picture">
                <div className="container">
                    <div className="speaking-pictext">
                        <h1 className=" speaking-header">Your audience deserve to be fascinated with the act of storytelling </h1>
                        <p>Your event deserves a speaker who seeks to invest in you and your attendees more than you invest in them.</p>
                        
                        <div className="button ">
                            <Link to='main' className="navlinks-btn schedule-btn text-left"style={{cursor:"pointer"}}>Invite me to speak
                                <span><BsArrowDown className="speaking-arrow" /> </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="speakingBanner">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-md-5 col-sm-12">
                            <div className="speaking-banner-title">
                                <h1>I INVEST IN THE SUCCESS OF YOUR EVENT</h1>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7 col-sm-12">
                            <div className="speaking-banner">
                                <p>I partner with you to help promote your event by sharing your event details with my audience on social media platforms. I have experience 
                                    planning conferences and discovered promotion is a pivotal part of a successful event.
                                </p>
                                <p>Whether it’s a pre-interview before the event or creating a welcome video, I want to do whatever I can to give your attendees
                                    a preview of the value they will receive at your event.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="event-schedule" style={{marginBottom:"30px"}}>
                <div className="container">
                    <div className="upcoming-event" id="upcoming" >
                        <div className="event-header"><span>Here's my </span> Upcoming Event</div>
                        <div className="event-display">
                            {event.map((event, i) => (
                            <Fragment>
                            
                                {new Date(event.acf.startdate) >= currentDate ? (
                                    <div className="" key={i}>
                                        <a href={event.acf.url} className="event-link" >
                                            <div className="event-title">
                                            <div dangerouslySetInnerHTML={{__html: event.title.rendered}}/>
                                            </div>
                                        </a>
                                        <div className="event-date">
                                            {event.acf.startdate}
                                        </div>
                                        <div className="event-location">
                                            {event.acf.location}
                                        </div>
                                    </div>
                                ) : (
                                    ""
                                )}
                            </Fragment>
                            ))}                        
                        </div>
                    </div>               
                </div>
            </div>
        
            <div className="form-style" id="main" >
                <div className="text-center speakingcontent " >
                    <div className="title">Invite Joy as a <span>guest Speaker</span></div>
                    <p>I am honored for your interest in booking me to speak at your events. Simply complete the form below and someone from my team will attend to you promptly</p>
                </div>

                <div className="container">
                    <div className="speaking-container" >
                        <div className="sendform">Send a Form</div>
                        <form onSubmit={submitForm}>
                            <div className="speaking-text">Fields marked with an <span>*</span> are required</div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Full Name <span>*</span></label>
                                        <input type="text"  name="fullname" onChange={handleChange} placeholder="Full Name"  className="inputfield"/>
                                        {errors ? <p> {errors.fullname }</p>: ""}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Email <span>*</span></label>
                                        <input type="email"  name="email"placeholder="Email" onChange={handleChange} className="inputfield"/>
                                        {errors ? <p> {errors.email }</p>: ""}
                                    </div>
                                </div>
                                
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Phone number <span>*</span></label>
                                        <input type="phone" name="phonenumber" onChange={handleChange} placeholder="Phone number"  className="inputfield"/>
                                        {errors ? <p> {errors.phonenumber }</p>: ""}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Organisation Name <span>*</span></label>
                                        <input type="text"  name="organisation" onChange={handleChange} placeholder="Organisation name"  className="inputfield"/>
                                        {errors ? <p> {errors.organisation }</p>: ""}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Organisation Website </label>
                                        <input type="url"  placeholder="example:  https://google.com" name="url"  className="inputfield"/>
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <Countryform  name="country"/>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Event date <span>*</span></label>
                                        <input type="date"  placeholder="Date" name="date" onChange={handleChange} className="inputfield"/>
                                        {errors ? <p> {errors.date }</p>: ""}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Number of speaking times <span>*</span></label>
                                        <input type="text"  placeholder="Example: 2 times" name="speakingtime" onChange={handleChange} className="inputfield"/>
                                        {errors ? <p> {errors.speakingtime }</p>: ""}
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Speaking hour<span>*</span></label>
                                        <input type="text" placeholder="example: 30 minutes"name="speakinghour"onChange={handleChange}  className="inputfield"/>
                                        {errors ? <p> {errors.speakinghour }</p>: ""}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Event Description <span>*</span></label>
                                        <textarea type="text" placeholder="event theme" name="description" onChange={handleChange}  className="textareafield" rows="4"></textarea>
                                        {errors ? <p> {errors.description }</p>: ""}
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="speaking-form">
                                        <label>Event Location <span>*</span></label>
                                        <textarea type="text" placeholder="Location" name="location" onChange={handleChange} className="textareafield" rows="4"></textarea>
                                        {errors ? <p> {errors.location}</p>: ""}
                                    </div>
                                </div>
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <button type="submit" className="submitButton"value="Submit" >Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Speaking
