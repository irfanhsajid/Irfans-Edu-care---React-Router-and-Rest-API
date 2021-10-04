import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div id="footer-bottom">
                <div class="container footer-bottom">
                    <div id="footer-copyrights">
                        <p>Copyrights &copy; 2021 All Rights Reserved by Irfans Edu Care.</p>
                    </div>
                    <div id="footer-menu">
                        <ul>
                            <li><a href="#home">Home</a>/</li>
                            <li><a href="#services">Services</a>/</li>
                            <li><a href="#team">Blogs</a>/</li>
                            <li><a href="#stats">About Us</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <a href="#home" id="back-to-top" class="back-to-top" title="home" role="button">
                <i class="fas fa-hashtag"></i>
            </a>
        </div>
    );
};

export default Footer;