import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className="container">
            <h1 className="abt-title text-center">Students Review</h1>
            <p className="border-bottom border-2 w-50 d-flex mx-auto"></p>
            <div className="blogs-container">
                <div className="text-center border-1 m-3 blogs">
                    <h5 className="blog-title fw-bold" >Name : Ashik khan</h5>
                    <p>
                        "This is such an amazing learning platform that offers complete package of Web Development. The uniqueness of programming hero is, It’s Impactful syllabus by which you will get maximum sufficient output with minimum sufficient knowledge
                        "</p>
                </div>
                <div className="text-center border-1 m-3 blogs">
                    <h5 className="blog-title fw-bold" >Name : Rafi Bin</h5>
                    <p>
                        "Firstly I thanks, Almighty Allah. Then the Irfans Edu team. They build me a soldier. Now I can face any problem that will come into my life. They help to overcome any situation. Not only for programming but also in my real life. I am very grateful to them
                        "</p>
                </div>
                <div className="text-center border-1 m-3 blogs">

                    <h5 className="blog-title fw-bold" >Name : Rakin Ahsan</h5>
                    <p>
                        "I will always be thankful to the Irfans Edu Care team. Their guideline, support, motivation, especially the process of their mentoring system outstanding."</p>
                </div>
                <div className="text-center border-1 m-3 blogs">
                    <h5 className="blog-title fw-bold" >Name : Nabil Afnan</h5>
                    <p>
                        "I am from a different engineering background. The overall course structure is pretty well organized. Working on various projects as assignments helped solidify the knowledge of the new topics that I learnt here. Would highly recommend this course.
                        "</p>
                </div>
                <div className="text-center border-1 m-3 blogs">
                    <h5 className="blog-title fw-bold" >Name : IH Sajid</h5>
                    <p>
                        "Thanks a Lot to the Whole edu Care Team, because they are also a fun and personalized platform. in this day, my dream is also full fill.
                        "</p>
                </div>



            </div>

        </div>
    );
};

export default Blogs;