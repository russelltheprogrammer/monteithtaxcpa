import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>Sorry, but this page cannot be found</h2>
            <Link to="/">Click here to get back to the homepage</Link>
        </div>
      );
}
 
export default NotFound;