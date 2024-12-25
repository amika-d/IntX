import React, { useEffect } from 'react';
import './VideoPage.css'; // Ensure you have your CSS file for styles

const VideoPage = () => {
    useEffect(() => {
        const video = document.getElementById("myVideo");
        video.play().catch((error) => {
            console.log("Autoplay with muted sound failed. Trying again.");
        });

        setTimeout(() => {
            video.muted = false;
            video.play();
        }, 2000);
    }, []);

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
                    <button className="login-button">Log In</button>
                </nav>
            </section>
            <p>Your Session With<br /> <b>Mr.Will</b> is ready<br /><span id="span1">Good Luck!</span></p>
            <button>Join Now</button>
            <video id="myVideo" autoPlay loop muted>
                <source src={`./Images/avatar video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <Footer/>
        </div>
    );
};

export default VideoPage;