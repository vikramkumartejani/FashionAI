import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoCloseSharp } from "react-icons/io5";
import "./navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="nav-container">
            <div className="navbar-container">
                <div className="links-container">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                    </ul>
                </div>
                <div className="toggle-menu">
                    <FaBarsStaggered onClick={toggleMobileMenu} className="toggle-icon" />
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="mobile_navigation">
                    <div className="navigation-links">
                        <div className="close-nav" onClick={closeMobileMenu}>
                            <IoCloseSharp />
                        </div>
                        <ul>
                            <li>
                                <a href="/">Home</a>
                            </li>
                            <li>
                                <a href="/">About Us</a>
                            </li>
                            <li>
                                <a href="/">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
