import ReCAPTCHA from "react-google-recaptcha";
import React, { useState, useEffect } from "react";
const {REACT_APP_LOCAL_PUBLIC_RECAPTCHA_SITE_KEY} = process.env; //currently local token, need to replace with site token, how to link env?

const Contact = () => {

const [isVerified, setIsVerified] = useState(false);
const [values, setValues] = useState({
    firstname: '', lastname: '', email: '', phonenumber: '', subject: '', message: ''
});
const [status, setStatus] = useState("Submit");
const [contactSubmit, setContactSubmit] = useState(false);
const [isDesktop, setIsDesktop] = useState(window.innerWidth > 1023)

useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia)
});

const handleValueChange = (name) => {
    return ({ target: {value} }) => {
        setValues(oldValues => ({...oldValues, [name]: value }));
    }
};

const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsVerified(true);
};

const updateMedia = () => {
    setIsDesktop(window.innerWidth > 1023)
};

const handleSubmit = async (event) => {
    event.preventDefault();
    if(isVerified){
       setStatus("Sending...");
       const response = await fetch("http://localhost:3001/contact", {
           method: "POST",
           headers: {
               "Content-Type": "application/json;charset=utf-8",
           },
           body: JSON.stringify(values),
       });
       setStatus("Submit");
       const result = await response.json();
       alert(result.status);
       setContactSubmit(true);
    }
    else{
        console.log("reCAPTCHA not verified");
    }
};

    if(!contactSubmit & isDesktop){
        return ( 
            <div>
                <div className="topic-header">
                    <h1>CONTACT</h1>
                </div>
                <div id="container-contact" className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-1"></div>
                        <div id="container-contact-info" className="col-4 align-self-center">
                            <h2 id="contact-info-title">Contact Info</h2>
                            <p>E: <a href="mailto:info@monteithtaxcpa.com">info@monteithtaxcpa.com</a>
                            <br/>
                            T: <a href="tel:347-508-3407">347-508-3407</a>
                            </p>
                        </div>
                        <div className="col-1"></div>
                        <div id="container-submit" className="col-4">
                            <form onSubmit={handleSubmit}>
                                <label>Full Name<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="text" required name="firstname" placeholder="First Name" value={values.firstname} onChange={handleValueChange('firstname')} style={{width: "40%"}} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" required name="lastname" placeholder="Last Name" value={values.lastname} onChange={handleValueChange('lastname')} style={{width: "40%"}} />
                                <br/>
                                <br/>
                                <label>Email Address<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="email" required name="email" placeholder="Email Address" value={values.email} onChange={handleValueChange('email')} style={{width: "60%"}} />
                                <br/>
                                <br/>
                                <label>Phone Number</label>
                                <br/>
                                <input type="phonenumber" placeholder="Phone Number" value={values.phonenumber} onChange={handleValueChange('phonenumber')} style={{width: "60%"}} />
                                <br/>
                                <br/>
                                <label>Subject<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="text" required name="subject" placeholder="Subject Line" value={values.subject} onChange={handleValueChange('subject')} style={{width: "60%"}} />
                                <br/>
                                <br/>
                                <label>Message<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <textarea id="contact-message-textarea" rows="5" type="text" required name="message" placeholder="Message" value={values.message} onChange={handleValueChange('message')} />
                                <br/>
                                <label style={{color: "red"}}>*Box must be filled out</label>
                                <br/>
                                <br/>
                                <button type="submit" disabled={!isVerified} id="contact-submit-btn" className="btn btn-lg">SUBMIT</button>
                                <br/>
                                <br/>
                                <ReCAPTCHA 
                                className="container-recaptcha"
                                sitekey={REACT_APP_LOCAL_PUBLIC_RECAPTCHA_SITE_KEY} //currently local token, need to replace with site token, how to link env?
                                onChange={handleRecaptchaChange}
                                />
                            </form>
                            <br/><br/>
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        );
    }
    else if (!contactSubmit & !isDesktop){
        return (
            <div>
                <div className="topic-header">
                    <h1>CONTACT</h1>
                </div>
                <div id="container-contact" className="container-fluid">
                    <div className="col justify-content-md-center">
                        <div className="row-1"></div>
                        <div id="container-contact-info" className="row-4 align-self-center">
                            <h2 id="contact-info-title">Contact Info</h2>
                            <p>E: <a href="mailto:info@monteithtaxcpa.com">info@monteithtaxcpa.com</a>
                            <br/>
                            T: <a href="tel:347-508-3407">347-508-3407</a>
                            </p>
                        </div>
                        <div className="row-1"></div>
                        <div id="container-submit" className="row-4">
                            <form onSubmit={handleSubmit}>
                                <label>Full Name<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="text" required name="firstname" placeholder="First Name" value={values.firstname} onChange={handleValueChange('firstname')} style={{width: "40%"}} />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <input type="text" required name="lastname" placeholder="Last Name" value={values.lastname} onChange={handleValueChange('lastname')} style={{width: "40%"}} />
                                <br/>
                                <br/>
                                <label>Email Address<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="email" required name="email" placeholder="Email Address" value={values.email} onChange={handleValueChange('email')} style={{width: "60%"}} />
                                <br/>
                                <br/>
                                <label>Phone Number</label>
                                <br/>
                                <input type="phonenumber" placeholder="Phone Number" value={values.phonenumber} onChange={handleValueChange('phonenumber')} style={{width: "60%"}} />
                                <br/>
                                <br/>
                                <label>Subject<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <input type="text" required name="subject" placeholder="Subject Line" value={values.subject} onChange={handleValueChange('subject')} style={{width: "60%"}} />
                                <br/>
                                <br/>
                                <label>Message<span style={{color: "red"}}>*</span></label>
                                <br/>
                                <textarea id="contact-message-textarea" rows="5" type="text" required name="message" placeholder="Message" value={values.message} onChange={handleValueChange('message')} />
                                <br/>
                                <label style={{color: "red"}}>*Box must be filled out</label>
                                <br/>
                                <br/>
                                <button type="submit" disabled={!isVerified} id="contact-submit-btn" className="btn btn-lg">SUBMIT</button>
                                <br/>
                                <br/>
                                <ReCAPTCHA 
                                className="container-recaptcha"
                                sitekey={REACT_APP_LOCAL_PUBLIC_RECAPTCHA_SITE_KEY} //currently local token, need to replace with site token, how to link env?
                                onChange={handleRecaptchaChange}
                                />
                            </form>
                            <br/><br/>
                        </div>
                        <div className="row-1"></div>
                    </div>
                </div>
            </div>
         );
    }
    else if (contactSubmit & isDesktop) {
        return (
            <div>
                <div className="topic-header">
                    <h1>CONTACT</h1>
                </div>
                <div id="container-contact" className="container-fluid">
                    <div className="row justify-content-md-center">
                        <div className="col-1"></div>
                        <div id="container-contact-info" className="col-4 align-self-center">
                            <h2 id="contact-info-title">Contact Info</h2>
                            <p>E: <a href="mailto:info@monteithtaxcpa.com">info@monteithtaxcpa.com</a>
                            <br/>
                            T: <a href="tel:347-508-3407">347-508-3407</a>
                            </p>
                        </div>
                        <div className="col-1"></div>
                        <div id="container-after-submit" className="col-4">
                        Thank you for contacting Russell Monteith CPA PLLC. Your message has been successfully sent. Russell will respond to you as soon as possible. Thank you for your interest.
                        </div>
                        <div className="col-1"></div>
                    </div>
                </div>
            </div>
        );
    }
    else if (contactSubmit & !isDesktop){
        return (
            <div>
                <div className="topic-header">
                    <h1>CONTACT</h1>
                </div>
                <div id="container-contact" className="container-fluid">
                        <div id="container-after-submit">
                        Thank you for contacting Russell Monteith CPA PLLC. Your message has been successfully sent. Russell will respond to you as soon as possible. Thank you for your interest.
                        </div>
                        <br/>
                        <br/>
                        <div id="container-contact-info">
                            <h2 id="contact-info-title">Contact Info</h2>
                            <p>E: <a href="mailto:info@monteithtaxcpa.com">info@monteithtaxcpa.com</a>
                            <br/>
                            T: <a href="tel:347-508-3407">347-508-3407</a>
                            </p>
                        </div>
                    </div>
            </div>
         );
    }
    else {
        return (
            <div id="contact-after-submit-error">
                There has been an error. Please contact the system administrator.
            </div>
        );
    }
}
 
export default Contact;

