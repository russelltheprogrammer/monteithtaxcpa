const ContactInfo = () => {

const username = "info";
const hostname = "monteithtaxcpa.com";
const firstnum = "347-50";
const secondnum = "8-3407";

    return ( 
        <div id="container-contact-info" className="row-4 align-self-center">
            <h2 id="contact-info-title">Contact Info</h2>
                <p><i className="fas fa-envelope"></i>&nbsp;&nbsp;<a href={`mailto:${username}@${hostname}`}>{username}@{hostname}</a>
                <br/>
                <i className="fas fa-phone"></i>&nbsp;&nbsp;<a href={`tel:${firstnum}${secondnum}`}>{firstnum}{secondnum}</a>
                </p>
        </div>
     );
}
 
export default ContactInfo;