import React from 'react';
import './About.css';

const About = () => {
    return (
        <div className="container about mt-4">
            <div className="about-text text-center mt-5">
                <h1 className="abt-title text-danger">Irfan's Edu Care</h1>
                <p className="border-bottom  border-2 w-75 d-flex mx-auto"></p>
                <h2 className=" d-flex mx-auto w-75">
                    Our mission is to be the smartest
                    and most helpful online educational platform
                    in existence!
                </h2>
                <p className=" text-secondary d-flex mx-auto w-50">
                    We're fulfilling this mission by improving our course materials and make them free to
                    for millions of students around the world.
                </p>
                <p><b>Happy Learning!</b></p>
                <p className="fs-1 text-danger">&#10084;</p>
            </div>
        </div>
    );
};

export default About;