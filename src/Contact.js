import { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const Contact = () => {

    // const reRef = useRef();

    return ( 
        <div>
            <form>
                <label>Full Name*</label>
                <br/>
                <input type="text" name="fname" placeholder="First Name" />
                <input type="text" name="lname" placeholder="Last Name" />
                <br/>
                <label>Email Address*</label>
                <br/>
                <input type="text" name="email" placeholder="Email Address" />
                <br/>
                <label>Subject*</label>
                <br/>
                <input type="text" name="subject" placeholder="Subject Line" />
                <br/>
                <label>Message*</label>
                <br/>
                <input type="text" name="message" placeholder="Message" />
                <br/>
                <label>*Box must filled out</label>
                <br/>
                <button type="submit">SUBMIT</button>
            </form>
            {/* <ReCAPTCHA 
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} 
                size="invisible"
                ref={reRef}
             /> */}
            <div>
                <h4>Contact Info</h4>
                <p><a href="mailto:info@monteithtaxcpa.com">info@monteithtaxcpa.com</a>
                    <br/>
                    347-508-3407
                    </p>
            </div>
        </div>
     );
}
 
export default Contact;