import React from 'react';
import './error.css'
const Error = () => {
    return (
        <div className="container error d-flex justify-content-center align-items-center">
            <div className="text-center text-danger px-5 py-5 rounded-3 shadow-lg">
                <h1 className="fw-bold">Error 404!!</h1>
                <h3>The page you looking for is not Found.</h3> <br />
                <h1 className="fw-bold">*,*</h1>
            </div>
        </div>
    );
};

export default Error;