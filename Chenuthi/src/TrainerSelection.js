import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./TrainerSelection.css"; // Import the CSS file

const TrainerCard = ({ trainer, onViewClick }) => {
  return (
    <fieldset>
      <img src={trainer.imgSrc} alt={trainer.name} />
      <h3>{trainer.name}</h3>
      <p>{trainer.title}</p>
      <button
        className="view-button"
        onClick={() =>
          onViewClick(
            trainer.name,
            trainer.title,
            trainer.company,
            trainer.experience,
            trainer.rating
          )
        }
      >
        View
      </button>
    </fieldset>
  );
};

const TrainerModal = ({
  trainerDetails,
  isOpen,
  onClose,
  onBookSession,
  generateStars,
}) => {
  if (!isOpen) return null;

  return (
    <div className="overlay active" onClick={onClose}>
      <div className="modal active" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <span id="trainer-name">
            {trainerDetails.name}{" "}
            <span className="rating-stars" style={{ marginLeft: "20px" }}>
              {generateStars(trainerDetails.rating)} {trainerDetails.rating}
            </span>
          </span>
          <button className="close-button" onClick={onClose}>
            ✖
          </button>
        </div>
        <div className="modal-body">
          <p>
            <strong>Title:</strong> {trainerDetails.title}
          </p>
          <p>
            <strong>Company:</strong> {trainerDetails.company}
          </p>
          <p>
            <strong>Experience:</strong> {trainerDetails.experience}
          </p>
        </div>
        <button className="modal-button" onClick={onBookSession}>
          Book a Session
        </button>
      </div>
    </div>
  );
};

const TrainerSelection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrainer, setSelectedTrainer] = useState(null);
  const navigate = useNavigate(); // Use useNavigate for navigation

  const trainers = [
    {
      name: "James Carter",
      title: "Senior Hiring Manager",
      company: "ABC Corp",
      experience: "10 years",
      rating: 4.8,
      imgSrc: "./Images/Trainer1.png",
    },
    {
      name: "Michael Reed",
      title: "Leadership Coach",
      company: "XYZ Ltd",
      experience: "8 years",
      rating: 4.7,
      imgSrc: "./Images/Trainer2.png",
    },
    {
      name: "Robert Peterson",
      title: "Career Consultant",
      company: "CareerPro",
      experience: "12 years",
      rating: 4.9,
      imgSrc: "./Images/Trainer5.jpeg",
    },
    {
      name: "Thomas Bennett",
      title: "HR Specialist",
      company: "HR Solutions",
      experience: "6 years",
      rating: 4.6,
      imgSrc: "./Images/Trainer6.jpeg",
    },
    {
      name: "William Harris",
      title: "Recruitment Expert",
      company: "Elite Recruiters",
      experience: "9 years",
      rating: 4.9,
      imgSrc: "./Images/Trainer3.png",
    },
    {
      name: "Ethan Blake",
      title: "Soft Skills Trainer",
      company: "SkillsPro",
      experience: "7 years",
      rating: 4.5,
      imgSrc: "./Images/Trainer4.png",
    },
    {
      name: "Olivia Brown",
      title: "Team Management Coach",
      company: "TeamWorks",
      experience: "11 years",
      rating: 4.7,
      imgSrc: "./Images/Trainer7.jpeg",
    },
    {
      name: "Isabella Clark",
      title: "Public Speaking Coach",
      company: "SpeakEasy",
      experience: "15 years",
      rating: 4.8,
      imgSrc: "Images/Trainer8.jpeg",
    },
  ];

  const openModal = (name, title, company, experience, rating) => {
    setSelectedTrainer({ name, title, company, experience, rating });
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const bookSession = () => {
    setModalOpen(false);
    navigate("/book-session"); // Navigate to the BookSession page
  };

  const generateStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let stars = "";
    for (let i = 0; i < fullStars; i++) {
      stars += "★"; // Full star
    }
    if (halfStar) {
      stars += "☆"; // Half star
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += "☆"; // Empty star
    }
    return stars;
  };

  return (
    <div>
      <h1>
        Select <span>Your</span> Trainer ...
      </h1>
      <div className="container">
        {trainers.map((trainer, index) => (
          <TrainerCard key={index} trainer={trainer} onViewClick={openModal} />
        ))}
      </div>

      <TrainerModal
        trainerDetails={selectedTrainer}
        isOpen={modalOpen}
        onClose={closeModal}
        onBookSession={bookSession} // Pass the bookSession function
        generateStars={generateStars}
      />
    </div>
  );
};

export default TrainerSelection;
