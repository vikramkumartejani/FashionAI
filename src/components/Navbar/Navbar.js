import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import {IoMdClose} from 'react-icons/io'
import "./navbar.css";

const Navbar = () => {
    const [toggle, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!toggle);
    };

    const handleClose = () => {
        setToggle(false);
    };

    return (
        <div className="nav-container">
            <div className="navbar-container">
                <div className="toggle-menu" onClick={handleToggle}>
                    <FaBarsStaggered className="toggle-icon" />
                </div>
                <div className="links-container">
                    <ul>
                        <li>
                            <a href="/">FashionAI</a>
                        </li>
                    </ul>
                </div>
                <div></div>
            </div>

            <div className={`toggle-box ${toggle ? "open" : "closed"}`}>
                <div className="close-btn" onClick={handleClose}>
                    <IoMdClose className="close-icon"/>
                </div>
                <div className="nav-links">
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">About Us</a>
                        </li>
                        <li>
                            <a href="/">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
