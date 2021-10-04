import React from 'react';
import './error.css'
const Error = () => {
    return (
        <div className=" error my-5 container p-5 text-center rounded-3">
            <div className="error-text">
                <h1>Eror 404!!</h1>
                <h2 >Sorry, the page you're looking for is not found!</h2>
            </div>
        </div>
    );
};

export default Error;