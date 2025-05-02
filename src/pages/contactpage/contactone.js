import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import emailjs from "emailjs-com";

export default function Form() {
    const history = useHistory();
    const [values, setValues] = useState({
        fullName: "",
        message: "",
        email: ""
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
        if (!targets.fullName) errorsValue.fullName = "Name is required";
        if (!targets.message) errorsValue.message = "Type  a required";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if (!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";

        if (Object.keys(errorsValue).length > 0) setErrors({ ...errorsValue });
        else setErrors({});

        return Object.keys(errorsValue).length;

    };

    // submit form
    const submitForm = async (ev) => {
        ev.preventDefault();
        let v = handleError(values);

        // check if there is any eror available and handle here 
        if (v > 0) console.log("error");
        //submit form here if no error availble
        else {
            sendEmail(ev);
            history.push('/formsucess');
            console.log("submitted");
        }
    };
    function sendEmail(ev) {
        emailjs.sendForm(
            'service_ls8cek1',
            'template_9v2zxrj',
            ev.target,
            'user_yoxh48pUvyJLh1hnCQlKt'
        ).then(res => {
            console.log(res);
        }).catch(err => console.log(err))
    }

    return (
        <div>
            <div className="pageTitle text-center">Get in Touch</div>
            <div className="row">
                <div className="col-lg-3 col-md-2 col-sm-1"></div>
                <div className="col-lg-6 col-md-8 col-sm-10">
                    <form onSubmit={submitForm}>
                        <div className="contact-details">
                            <div className="contact-field">field marks with <span>*</span> are required</div>
                            <div className="row">
                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="contact-form">
                                        <label>Full Name <span>*</span></label>
                                        <input type="text" id="" onChange={handleChange} name="fullName" placeholder="Full name" className="inputfield" />
                                        {errors ? <p> {errors.fullName}</p> : ""}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="contact-form">
                                        <label>Email <span>*</span></label>
                                        <input type="email" id="" onChange={handleChange} name="email" placeholder="email" className="inputfield" />
                                        {errors ? <p>{errors.email}</p> : ""}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <div className="contact-form">
                                        <label>Message <span>*</span></label>
                                        <textarea id="" onChange={handleChange} name="message" placeholder="message" className="textarea" rows="4"></textarea>
                                        {errors ? <p>{errors.message}</p> : ""}
                                    </div>
                                </div>

                                <div className="col-lg-12 col-md-12 col-sm-12">
                                    <input type="submit" value="Submit" className="submitButton" />

                                </div>

                            </div>
                        </div>
                    </form>
                </div>

                <div className="col-lg-3 col-md-2 col-sm-1"></div>
            </div>
        </div>
    );
}
