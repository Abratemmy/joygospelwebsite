import React from 'react';
import './modal.css';
// import emailjs from "emailjs-com";

function Modal({closeModal}) {
    function  sendEmail(e){
        e.preventDefault();

    }
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="container">
                    <div className="modal-heading">
                        <div className="modal-title">Get in touch</div>
                        <button onClick={()=>closeModal(false)} className="modal-btn">X</button>
                    </div>
                    <form className="modal-form" onSubmit={sendEmail}>
                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-form">
                                    <label>First Name</label>
                                    <input type="text" rules="required|max:255" name="firstname"placeholder="First Name"  className="inputfield"/>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12">
                                <div className="contact-form">
                                    <label>Last Name</label>
                                    <input type="text" rules="required|max:255" name="lastname"placeholder="Last Name"  className="inputfield"/>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <label>Email</label>
                                    <input type="email" rules="required|max:255" name="firstname"placeholder="First Name"  className="inputfield"/>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <div className="contact-form">
                                    <label>Message</label>
                                    <textarea rules="required|max:255" name="message"placeholder="message"  className="textarea" rows="2"></textarea>
                                </div>

                                <input type="submit" value="send" />
                            </div>
                        </div>
                    </form>
                </div>
                
            
            </div>
        </div>
    )
}

export default Modal
