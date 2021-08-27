import ReCAPTCHA from "react-google-recaptcha";

const {REACT_APP_LOCAL_PUBLIC_RECAPTCHA_SITE_KEY} = process.env;

const Contact = () => {

const handleOnChange = (value) => {
    console.log("Captcha value:", value);
    // setState isVerified: true
}

    return ( 
        <div>
            <div id="contact-header">
                <h1>CONTACT</h1>
            </div>
            <div id="container-contact" className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-2"></div>
                    <div id="container-contact-content" className="col-4 align-self-center">
                        <h2 style={{fontWeight: "bold"}}>Contact Info</h2>
                        <p>E: <a href="mailto:info@monteithtaxcpa.com">info@monteithtaxcpa.com</a>
                        <br/>
                        T: <a href="tel:347-508-3407">347-508-3407</a>
                        </p>
                    </div>
                    <div id="container-submit" className="col-4">
                        <form>
                            <label>Full Name<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <input type="text" name="fname" placeholder="First Name" />
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                            <input type="text" name="lname" placeholder="Last Name" />
                            <br/>
                            <br/>
                            <label>Email Address<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <input type="text" name="email" placeholder="Email Address" />
                            <br/>
                            <br/>
                            <label>Subject<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <input type="text" name="subject" placeholder="Subject Line" />
                            <br/>
                            <br/>
                            <label>Message<span style={{color: "red"}}>*</span></label>
                            <br/>
                            <input type="text" name="message" placeholder="Message" />
                            <br/>
                            <br/>
                            <label style={{color: "red"}}>*Box must filled out</label>
                            <br/>
                            <br/>
                            <button type="submit">SUBMIT</button>
                            <br/>
                            <br/>
                            <ReCAPTCHA 
                            sitekey={REACT_APP_LOCAL_PUBLIC_RECAPTCHA_SITE_KEY} //currently local token, need to replace with site token, how to link env?
                            onChange={handleOnChange}
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


//footer and content of contact are not working, the content of contact is being overlapped by the footer. This needs to be fixed.
//disable submit button if not verified
//public site key for reCAPTCHA needs to be changed before launching website