import React, { useState } from "react";
  import { FaBarsStaggered } from "react-icons/fa6";
import "./navbar.css";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };
 

    return (
        <div className="nav-container">
            <div className="navbar-container">
                <div className="links-container">
                    <ul>
                        <li>
                            <a href="/">Navbar</a>
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
                        <ul>
                            <li>
                                <a href="/">Navbar</a>
                            </li>

                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;
