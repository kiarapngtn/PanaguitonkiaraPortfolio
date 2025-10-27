import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCard";
import Particle from "../components/Particle";
import lift from "../assets/projects/kk2.png";
import newProjectImage1 from "../assets/succor.jpeg"; 
import newProjectImage2 from "../assets/EmerGo.jpeg"; 

const Projects = () => {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recent Top <strong className="yellow">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Project 1: Awesome To Do's */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lift}
              isBlog={false}
              title="Awesome To Do's"
              description="This online ride-sharing platform boasts a responsive front-end design, complete with an admin panel built using React and Material-UI. With the integration of Google Maps API, users can easily access directions on the map. The platform allows for full CURD functionality on profiles and posts, and users can confirm or cancel a ride from a post and message each other after confirmation. Additionally, users can easily reset their password. The back-end is powered by a Node Express server and utilizes MongoDB for the database management."
              ghLink="https://kiangawesometodos.onrender.com"
            />
         </Col>

          {/* Project 2: New Project Placeholder */}
          <Col md={4} className="project-card">
            <ProjectCard

              imgPath={newProjectImage1} 
              isBlog={false}
              title="Succor" 
              description="Succor is a web-based platform designed to help upcoming and undecided college students choose the right course for their future. It provides personalized guidance, course information, and career insights to make decision-making easier and more informed. Through Succor, students can explore different academic paths and discover which course best fits their interests and goals."
              ghLink="Your GitHub or Live Demo Link Here"
            />
         </Col>

          {/* Project 3: Another New Project Placeholder */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={newProjectImage2} 
              isBlog={false}
              title="EmerGo - Emergency App" 
              description="Emergo is a smart and reliable emergency response app designed to keep you safe in any situation. With just one tap, you can alert authorities, share your real-time location, and notify your trusted contacts instantly. Whether it’s an accident, health issue, or natural disaster, Emergo helps you stay calm and respond fast."
              ghLink="Your GitHub or Live Demo Link Here"
            />
         </Col>

        </Row>
      </Container>
    </Container>
  )
}

export default Projects