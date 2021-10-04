import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner-container ">
            <div className="col-md-6 mx-auto text-center">
                <div className="title">
                    <h1 className="fw-bolder heading">Quality of Excellence in Online Education</h1>
                    <p className="mt-3 discription">
                        Online learning is rapidly becoming one of the most cost-effective ways to educate the world’s rapidly expanding workforce.So, We are here to give you the education with utmost outcome! <br />
                        Happy Schooling with <b>Irfans Edu Care</b>!
                    </p>
                    <button className="about-btn border-0 px-5 py-2 rounded-3"><span className="meet-btn">Meet With Us</span></button>
                </div>

            </div>
            <div className="col-md-6"></div>
        </div>
    );
};

export default Banner;