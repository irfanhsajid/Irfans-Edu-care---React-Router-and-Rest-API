import React from 'react';
import './Contacts.css';
const Contacts = () => {
    return (
        <div className="container contacts d-flex justify-content-center align-items-center">
            <div className="text-center bg-dark text-danger px-5 py-3 rounded-3">
                <h1>Phone: +880123456780</h1>
                <h4>Email: irfanseducare@gmail.com</h4>
                <address>
                    Location:
                    <p><b>18/7</b> Shibpur,R/A <br />
                        Dhaka,Bangladesh</p>
                </address>
            </div>
        </div>
    );
};

export default Contacts;