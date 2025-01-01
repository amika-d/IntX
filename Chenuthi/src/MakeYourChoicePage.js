import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './MakeYourChoicePage.css'; // Create a separate CSS file for styles

const MakeYourChoicePage = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleButtonClick = () => {
        navigate('/video'); // Navigate to VideoPage
    };

    const handleLoginClick = () => {
        alert('Login button clicked!');
    };

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
                    <button className="login-button" onClick={handleLoginClick}>Log In</button>
                </nav>
            </section>
            <p className='p'>Make <span id="span1">Your</span> Choice ✨ </p>
            <fieldset className='choice'>
                <label id='label'>What Type Of Questions You Want To Be Asked? </label>
                <button onClick={handleButtonClick}className='button'>Based On My CV</button>
                <button onClick={handleButtonClick}className='button'>Based On My Projects</button>
            </fieldset>
        </div>
    );
};

export default MakeYourChoicePage;
