import React from 'react';
import './error.css'
const Error = () => {
    return (
        <div className="container error d-flex justify-content-center align-items-center">
            <div className="text-center text-danger px-5 py-5 rounded-3">
                <h1>Error 404!!</h1>
                <h3>The page you looking for is not available.</h3>
            </div>
        </div>
    );
};

export default Error;