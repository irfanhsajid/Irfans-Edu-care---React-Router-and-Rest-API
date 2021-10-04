import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Service from '../Service/Service';



const Home = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./fakeData.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);
    return (
        <div className="">
            <Banner></Banner>

            <div className="container">
                <div className="text-center my-4">
                    <p className="border-bottom  border-2 w-75 d-flex mx-auto"></p>
                    <h1>Our All Courses</h1>
                    <p className="border-bottom w-50 d-flex mx-auto"></p>
                </div>
                <div className="row">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        >

                        </Service>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;