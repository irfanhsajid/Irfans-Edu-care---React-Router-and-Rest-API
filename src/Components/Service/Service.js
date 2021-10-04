import React from 'react';
import './Service.css';
const Service = (props) => {
    const { title, level, students, teacher, img } = props.service;
    return (
        <div className="col-1 col-md-4 g-4">
            <div className="card h-100 card-container">
                <img src={img} alt="services img" className="card-img" />
                <div className="card-body">
                    <h3 className="card-title">{title}</h3>
                    <span className="card-text">
                        <h5>Teacher: {teacher}</h5>
                        <p>Category: {level}</p>
                        <p>Total {students} Students Enrolled</p>
                    </span>
                    <button className="border-0 rounded-2 px-3 py-1 enroll-btn">Enroll Now</button>
                </div>

            </div>
        </div>
    );
};

export default Service;