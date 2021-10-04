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
                <h1>A broad selection of courses</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt voluptatem quas est asperiores deleniti itaque sit, beatae vel reiciendis qui.</p>
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
                                        <p>Total {service.students} Students Enrolled</p>
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