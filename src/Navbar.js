import { Link } from 'react-router-dom';

const Navbar = () => {

    return ( 
        <div className="container-navbar">
            <nav className="navbar-nav">
            {/* <div id="navbar-logo" className="navbar me-auto">
                <ul>
                    <li>
                    LOGO TO BE INSERTED
                    </li>
                </ul>
            </div> */}
            <div className="navbar ms-auto">
                <ul>
                    <li id="navbar-logo">
                        LOGO TO BE INSERTED
                    </li>
                    <li className="navbar-links">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="navbar-links">
                        <Link to="about">About</Link>
                    </li>
                    <li className="navbar-links">
                        <Link to="services">Services</Link>
                    </li>
                    <li className="navbar-links">
                        <Link to="tools">Tools</Link>
                    </li>
                    <li className="navbar-links">
                        <Link to="links">Links</Link>
                    </li>
                    <li className="navbar-links">
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
            </nav>
        </div>
     );
}
 
export default Navbar;