import React, {useState} from 'react';
import Pagesheader from '../../components/pagesheader/pagesheader';
import "./prayerrequest.css";
import { useHistory } from 'react-router-dom';
import emailjs from "emailjs-com";

function Prayerrequest() {
    const history = useHistory();
	const [values, setValues] = useState({
		fullName: "",
        message:"",
		email:""
	});
	const [errors, setErrors] = useState({});

	// get input values
	const handleChange = (ev) => {
		setValues({
			...values,
			[ev.target.name]: ev.target.value,
		});
	};


    const handleError = (targets) => {
		let errorsValue = {};
		if (!targets.fullName) errorsValue.fullName = "Name is required";
        if (!targets.message) errorsValue.message = "Type  a required";
        if (!targets.email) errorsValue.email = "Email  is required";
        else if(!/\S+@\S+\.\S+/.test(targets.email)) errorsValue.email = "Email is invalid";
		
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

    function sendEmail(ev){
        emailjs.sendForm(
            'service_ls8cek1',
            'template_9v2zxrj', 
            ev.target,
            'user_yoxh48pUvyJLh1hnCQlKt'
            ).then(res=>{
                console.log(res);
            }).catch(err=> console.log(err))
    }
  return (
    <div className='prayerpage'>
        <Pagesheader title="Share a prayer request" />

        <div className='container'>
            <div className='prayer-container'>
                <div className='row'>
                    <div className='col-lg-8 col-md-8 col-sm-12'>
                        <div className='prayer'>
                            <p>Prayer is something we need daily. As helpful as our smartphones are, we still have to deal with glitches when Wi-Fi fails, cell phone signals 
                                or the phone stops working for no apparent reason. But while man-made gadgets can and do fail, prayer never fails.
                                No matter where we are or what we’re doing, we always have immediate and unfailing communication with God.
                            </p>

                            <p>
                            Tell us how we can pray with you today. Your requests will remain private. We will also send you an email of encouragement to let you know that we are remembering you in prayer.
                            </p>
                        </div>
                    </div>
                    <div className='col-lg-4 col-md-4 col-sm-12'>
                        <div className='prayer-bg'>
                            <p>Would you rather send us an email directly? You can do so here:
                                <span>Email : <a href="mailto:joyagunbiadeweb@gmail.com" target="_blank"  rel="noopener noreferrer">joyagunbiadeweb@gmail.com</a></span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='prayer-form'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-3 col-2m-12'></div>
                        <div className='col-lg-6 col-md-6 col-2m-12'>
                            <div className='prayer-request-form'>
                                <h3>Submit prayer request</h3>
                                <form onSubmit={submitForm}>
                                    <div className="contact-details">    
                                        <div className="contact-field">field marks with <span>*</span> are required</div>
                                        <div className="row">
                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="contact-form">
                                                    <label>Full Name <span>*</span></label>
                                                    <input type="text" id="" onChange={handleChange} name="fullName"placeholder="Full name" className="inputfield"/>
                                                    {errors ? <p> {errors.fullName }</p>: ""}
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="contact-form">
                                                    <label>Email <span>*</span></label>
                                                    <input type="email" id="" onChange={handleChange} name="email" placeholder="email"  className="inputfield" />
                                                    {errors ?  <p>{errors.email }</p>: ""}
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <div className="contact-form">
                                                    <label>Prayer Request <span>*</span></label>
                                                    <textarea id="" onChange={handleChange} name="message"placeholder="message" className="textarea" rows="4"></textarea>
                                                    {errors ? <p>{errors.message }</p>: ""}
                                                </div>
                                            </div>

                                            <div className="col-lg-12 col-md-12 col-sm-12">
                                                <input type="submit" value="Submit"   className="submitButton"/>
                                                
                                            </div>

                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-3 col-md-3 col-2m-12'></div>
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Prayerrequest