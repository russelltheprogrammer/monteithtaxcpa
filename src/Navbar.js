import { Link } from 'react-router-dom';
import './index.css';

const Navbar = () => {

    return ( 
        <div className="navbar-container">
            <nav className="navbar-nav">
            <div id="navbar-links" className="navbar ms-auto">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="services">Services</Link>
                    </li>
                    <li>
                        <Link to="tools">Tools</Link>
                    </li>
                    <li>
                        <Link to="links">Links</Link>
                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
     );
}
 
export default Navbar;