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