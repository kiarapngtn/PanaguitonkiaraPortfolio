import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
// import { CgWebsite } from "react-icons/cg"; // CgWebsite icon is no longer needed

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
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "flex-end",
            textAlign: "center",
            position: "relative",
            bottom: "0px",
          }}
        >
          {props.isBlog ? "Blog" : ""}
        </Button>
        {"\n"}
        {"\n"}

        
      </Card.Body>
    </Card>
  );
};
export default ProjectCard;