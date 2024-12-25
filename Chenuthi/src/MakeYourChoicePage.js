import React from 'react';
import './MakeYourChoicePage.css'; // Create a separate CSS file for styles

const MakeYourChoicePage = () => {
    const handleLoginClick = () => {
        alert('Login button clicked!');
    };

    return (
        <div>
            <Navigation/>
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
            <p>Make <span id="span1">Your</span> Choice ✨ </p>
            <fieldset id='fieldset'>
                <label>What Type Of Questions You Want To Be Asked ? </label>
                <button>Based On My CV</button>
                <button>Based On My Projects</button>
            </fieldset>
            <Footer/>
        </div>
    );
};

export default MakeYourChoicePage;