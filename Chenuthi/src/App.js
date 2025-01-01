import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ServicePage from "./ServicePage"; // Import your ServicePage component
import TrainerSelection from "./TrainerSelection"; // Import your TrainerSelection component
import UploadCVPage from "./UploadCVPage"; // Import your UploadCVPage component
import MakeYourChoicePage from "./MakeYourChoicePage"; // Import your MakeYourChoicePage component
import VideoPage from "./VideoPage"; // Import your VideoPage component
import ServiceChoicePage from "./ServiceChoicePage"; // Import your ServiceChoicePage component

function App() {
    return (
        <Router>
            <Routes>
                {/* Route for the ServicePage */}
                <Route path="/" element={<ServicePage />} />
                {/* Route for the TrainerSelection */}
                <Route path="/trainer-selection" element={<TrainerSelection />} />
                {/* Route for the UploadCVPage */}
                <Route path="/upload-cv" element={<UploadCVPage />} />
                {/* Route for the MakeYourChoicePage */}
                <Route path="/make-your-choice" element={<MakeYourChoicePage />} />
                {/* Route for the VideoPage */}
                <Route path="/video" element={<VideoPage />} />
                {/* Route for the ServiceChoicePage */}
                <Route path="/service-choice" element={<ServiceChoicePage />} />
            </Routes>
        </Router>
    );
}

export default App;
