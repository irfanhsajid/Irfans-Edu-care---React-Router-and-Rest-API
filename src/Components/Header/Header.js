import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="NavBar-Container py-4">
            <div className="container align-items-center">
                <div className="row">
                    <div className="col-md-2">
                        <div className="logo-name">
                            <h2>Irfans Care</h2>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <div className="menu-container ">
                            <ul className="d-flex align-items-end justify-content-end">
                                <Link to="/home" className="items">
                                    <li>Home</li>
                                </Link>
                                <Link to="/services" className="items">
                                    <li>Services</li>
                                </Link>
                                <Link to="/blogs" className="items">
                                    <li>Blogs</li>
                                </Link>
                                <Link to="/about" className="items">
                                    <li>About us</li>
                                </Link>
                                <Link to="/contact" className="items">
                                    <li><button className="border-0 rounded-2 px-3 py-0 contact-btn">Contact</button></li>
                                </Link>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default Header;