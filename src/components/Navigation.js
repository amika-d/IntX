import React from "react"; // Import React
import { useNavigate } from "react-router-dom"; // Import useNavigate
import styled from "styled-components";
import intXLogo from "../assets/Thasara.png";

// Styled Components
const Section = styled.section`
  width: 100vw;
  height: 85px; /* Fixed height for the navigation bar */
  padding: 1rem 0;
  display: flex;
  justify-content: center; /* Center content horizontally */
  position: fixed; /* Fix the navigation bar to the top */
  top: 0; /* Position it at the top */
  left: 0; /* Align to the left */
  z-index: 1000; /* Ensure it stays above other content */
`;

const NavContainer = styled.nav`
  width: 85%; /* Space on both sides */
  background-color: rgba(255, 248, 230, 0.9); /* Semi-transparent yellow background for the navbar */
  border-radius: 15px; /* Rounded corners */
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
`;

const LogoImage = styled.img`
  margin-top: -5px;
  width: 55px;
  height: 25px; /* Adjust the height as needed */
  margin-left: 50px;
`;

const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media (max-width: 768px) {
    display: none; /* Hide menu for smaller screens */
  }
`;

const MenuItem = styled.li`
  margin: 0 1.5rem;
  font-size: 1rem;
  font-weight: 500;
  color: #000; /* Black text */
  cursor: pointer;

  &:hover {
    color: #f0c300; /* Yellow text on hover */
  }
`;

const StyledButton = styled.a`
  background-color: #000; /* Black background */
  color: #fff; /* White text */
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 20px; /* Rounded corners */
  cursor: pointer;
  text-decoration: none; /* Remove underline for links */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #333; /* Darker black on hover */
  }
`;

// Navigation Component
const Navigation = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleScrollTo = (id) => {
    navigate("/"); // Navigate to Home page
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest",
        });
      }
    }, 100); // Delay to ensure navigation completes before scrolling
  };

  return (
    <Section id="navigation">
      <NavContainer>
        <Logo>
          <LogoImage src={intXLogo} alt="intX Logo" />
        </Logo>
        <Menu>
          <MenuItem onClick={() => handleScrollTo("home")}>Home</MenuItem>
          <MenuItem onClick={() => handleScrollTo("Roadmap")}>Services</MenuItem>
          <MenuItem onClick={() => handleScrollTo("about")}>About Us</MenuItem>
          <MenuItem onClick={() => handleScrollTo("faq")}>FAQ</MenuItem>
        </Menu>
        <div className="desktop">
          <StyledButton href="https://www.google.com.br/">Log In</StyledButton>
        </div>
      </NavContainer>
    </Section>
  );
};

export default Navigation;
