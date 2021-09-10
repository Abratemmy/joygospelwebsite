import React, { useState} from 'react';
import { NavLink } from 'react-router-dom';
import Pagesheader from '../../components/pagesheader/pagesheader';
import './contact.css';
import Modal from './Modal';

function Contact(){
    const[openModal, setOpenModal]= useState(false);
    return (
        <div className="contactpage">
            <Pagesheader title="contact" />

            <div className="contact-form-container">
                <div className="container">
                    <h4>Get in touch</h4>
                    <p>Please click on the contact us button to send us a message, <br />
                        someone will get across to you. Thanks
                    </p>
                    <button className="openModalbtn" 
                        onClick={()=>{
                            setOpenModal(true)
                        }}
                    >Contact us</button>                    
                </div>                
            </div>
            {openModal && <Modal closeModal = {setOpenModal}/>}

            <div className="container">
                <div className="contact-text">
                    <p>Hi there! I’m honored that you would like to connect with me and I want to 
                        make it as easy as possible for your message to end up in the right spot! Check out the list of frequently
                    </p>
                    <ul>
                        <li>If you are interested in booking me for a speaking event, <NavLink to="/jaweb/speaking" className="contact-nav"> Click Here</NavLink></li>
                        <li>If you would like to contact me for any other reason, I’d love to hear from you! 
                            Simply use the form above to send me a message!</li>
                    </ul>
                    <p>I want you to know that I personally read and value every email that I receive and every comment on my blog. Unfortunately I may not be able to respond personally to each one, but know that I cherish your thoughts, 
                        treasure your encouragement, and pray over every prayer request. To get to today’s post <NavLink to="/jaweb/blog" className="contact-nav"> Click here.</NavLink> </p>
                </div>
            </div>
            
        </div>
    )
    
}

export default Contact
