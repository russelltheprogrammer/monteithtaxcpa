import { Link } from 'react-router-dom';

const ContactHomePageLink = ({props}) => {
    
    if(props){
        return ( 
            <div>
            Click here to go back to the <Link to="/">homepage</Link>.
            </div>
     );
    }
    else if (!props) {
        return (
            <div></div>
        )
    }
}
 
export default ContactHomePageLink;