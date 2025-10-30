import React from "react";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button"; // Button is no longer needed
// import { CgWebsite } from "react-icons/cg"; // Icon is no longer needed

const ProjectCard = (props) => {
  return (
    <Card
      className="project-card-view"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: "200px",
          objectFit: "contain",
          alignSelf: "flex-start",
          borderRadius: "10%",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify",fontSize:"15px" }}>
          {props.description}
        </Card.Text>
        {/* The button code that was here has been removed */}
        
        {/* The conditional demo button code that was here has also been removed */}
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;