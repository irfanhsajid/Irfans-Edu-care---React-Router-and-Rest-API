import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="container">
            <div className="text-center my-4">
                <h1 className="abt-title">A broad selection of courses</h1>
                <p>All course materials are being updated day by day and free of Cost. Just press the enroll Button and Keep rocking! <br />
                    <b>Happy Online Education</b>
                </p>
                <p className="border-bottom  border-2 w-50 d-flex mx-auto"></p>
            </div>
            <div className="row">
                {
                    services.map(service =>


                        <div className="col-1 col-md-4 g-4">
                            <div className="card h-100 card-container">
                                <img src={service.img} alt="services img" className="card-img" />
                                <div className="card-body">
                                    <h3 className="card-title">{service.title}</h3>
                                    <span className="card-text">
                                        <h5>Teacher: {service.teacher}</h5>
                                        <p>Category: {service.level}</p>
                                        <p>Total {service.students} Students Joined</p>
                                    </span>
                                    <button className="border-0 rounded-2 px-3 py-1 enroll-btn">Enroll Now</button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Services;