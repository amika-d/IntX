import React from 'react';
import './ServiceChoicePage.css';
//import Navigation from './Navigation'; // Ensure you have your CSS file for styles

const ServiceChoicePage = () => {
    return (
        <div>
            <section className="section">
                <nav className="nav-container">
                    <h1 className="logo">intX</h1>
                    <ul className="menu">
                        <li className="menu-item">Home</li>
                        <li className="menu-item">Services</li>
                        <li className="menu-item">About Us</li>
                        <li className="menu-item">FAQ</li>
                    </ul>
                    <button className="login-button">Log In</button>
                </nav>
            </section>
            <img src={`./Images/avatar3.png`} alt="Mr.Will" />
            <p className='p'>Mr.Will</p>
            <div className="speech-bubble">
                Hello, this is a right-pointing speech bubble!
            </div>
        </div>
    );
};

export default ServiceChoicePage;
