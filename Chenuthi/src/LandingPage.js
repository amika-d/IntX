import React from 'react';
import './LandingPage.css'; // Move styles into a CSS file for better organization

const LandingPage = () => {
    // Optional: Uncomment this if you want to redirect after 5 seconds
    // React.useEffect(() => {
    //   const timer = setTimeout(() => {
    //     window.location.href = "/home"; // Adjust the URL as needed
    //   }, 5000);
    //   return () => clearTimeout(timer);
    // }, []);

    return (
        <div className="landing-page">
            <img src="Images/logo12.png" alt="The Logo" className="logo" />
        </div>
    );
};

export default LandingPage;
