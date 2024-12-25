import React from 'react';
import './ServiceChoicePage.css';
//import Navigation from './Navigation'; // Ensure you have your CSS file for styles

const ServiceChoicePage = () => {
    return (
        <div>
            <Navigation/>
            <img src={`./Images/avatar3.png`} alt="Mr.Will" />
            <p>Mr.Will</p>
            <div className="speech-bubble">
                Hello, this is a right-pointing speech bubble!
            </div>
            <Footer/>
        </div>
    );
};

export default ServiceChoicePage;