import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const Navbar = () => {

    const [isNavCollapsed, setIsNavCollapsed] = useState(true);

    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

    return ( 
        <div className="container-navbar">
            <nav className="navbar navbar-expand-md navbar-light">
                <div className="container-fluid">
                    <span className="navbar-brand" id="navbar-logo"><img alt="Logo" width="30" height="24" className="d-inline-block align-top" /><span className="hidden">My Logo</span></span>
                    <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#toggleMobileMenu"
                    aria-controls="toggleMobileMenu"
                    aria-expanded={!isNavCollapsed ? true : false}
                    aria-label="Toggle navigation"
                    onClick={handleNavCollapse}
                    >
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse`} id="toggleMobileMenu">
                        <ul className="navbar-nav ms-auto text-center">
                            <li className="nav-item">
                                <Link to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="tools">Tools</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="links">Links</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
     );
}
 
export default Navbar;