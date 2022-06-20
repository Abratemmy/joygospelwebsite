import React from 'react';
import { NavLink } from 'react-router-dom';
import Pagesheader from '../../components/pagesheader/pagesheader';
import './contact.css';
import Form from './contactone';



const Contact = () =>{
 
    return (
        <div className="contactpage">
            <Pagesheader title="contact" />

            <div className="container">
                <div className="contact-text">
                    <p>Hi there! I’m honored that you would like to connect with me 
                    </p>
                    
                    <ul>
                        <li>If you are interested in booking me for a speaking event, <NavLink to="/speaking_request" className="contact-nav"> Click Here</NavLink></li>
                        <li>If you would like to contact me for any other reason, I’d love to hear from you! 
                            Simply use the form below to send me a message!</li>
                    </ul>
                    <p>Please allow 2-3 business days for a reply. I receive a lot of email on a
                        daily basis but I always make sure to reply and get in touch with everyone that contacts me. To get to recent post <NavLink to="/blogs" className="contact-nav"> Click here.</NavLink> </p>
                </div>
            </div>

            <div className="container">
                <Form />
            </div>
            
        </div>
    )
    
}

export default Contact
