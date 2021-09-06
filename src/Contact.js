import ReCAPTCHA from "react-google-recaptcha";
import React, { useState } from "react";

const {REACT_APP_LOCAL_PUBLIC_RECAPTCHA_SITE_KEY} = process.env;

const Contact = () => {

const [isVerified, setIsVerified] = useState(false);

const handleRecaptchaChange = (value) => {
    console.log("Captcha value:", value);
    setIsVerified(true);
}

const handleSubmit = (event) => {
    event.preventDefault();
    if(isVerified){

    }

}

    return ( 
        <div>
            <div className="topic-header">
                <h1>CONTACT</h1>
            </div>
            <div id="container-contact" className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-2"></div>
                    <div id="container-contact-info" className="col-4 align-self-center">
                        <h2 style={{fontWeight: "bold"}}>Contact Info</h2>
                        <p>E: <a href="mailto:info@monteithtaxcpa.com">info@monteithtaxcpa.com</a>
                        <br/>
                        T: <a href="tel:347-508-3407">347-508-3407</a>
                        </p>
                    </div>
                    <div id="container-submit" className="col-4">
                        <form onSubmit={handleSubmit}>
                            <label>Full Name<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <input type="text" required name="firstname" placeholder="First Name" style={{width: "40%"}} />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" required name="lastname" placeholder="Last Name" style={{width: "40%"}} />
                            <br/>
                            <br/>
                            <label>Email Address<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <input type="text" required name="email" placeholder="Email Address" style={{width: "60%"}} />
                            <br/>
                            <br/>
                            <label>Subject<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <input type="text" required name="subject" placeholder="Subject Line" style={{width: "60%"}} />
                            <br/>
                            <br/>
                            <label>Message<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <textarea id="contact-message-textarea" rows="5" type="text" required name="message" placeholder="Message"/>
                            <br/>
                            <label style={{color: "red"}}>*Box must filled out</label>
                            <br/>
                            <br/>
                            <button type="submit" id="contact-submit-btn" className="btn btn-lg">SUBMIT</button>
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
                    <div className="col-2"></div>
                </div>
             </div>
        </div>
     );
}
 
export default Contact;