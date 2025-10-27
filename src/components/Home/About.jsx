import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import LaptopImg from "../../assets/kiara.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";



const About = () => {
    return (
        <Container fluid className="home-about-section" id="about">
          <Container>
            <Row>
              <Col md={8} className="home-about-description">
                <h1 style={{ fontSize: "2.9em" }}>
                  LET ME <span className="yellow"> INTRODUCE </span> MYSELF
                </h1>
                <p 
                  className="home-about-body" 
                  style={{ fontSize: "1.2em", lineHeight: "1.8" }}
                >
                 Hi, my name is <b className="yellow">Kiara Panaguiton </b>
                 and I'm from <b className="yellow"> Ingore, La Paz, iloilo City.</b>
                <br />
                <br />
                I am currently pursuing a  <span className="yellow">Bachelor of Science in Information Technology (BSIT)</span> at <span className="yellow"> Western Institue of Technology.
                </span>
                <br />
                <br />
                As an <span className="yellow">IT student</span> I’m passionate about technology and how it shapes our everyday lives. From <span className="yellow">programming languages</span> to <span className="yellow">network systems,</span> I’m excited to explore every aspect of this ever-evolving field.
                  <br />
                  <br />I’m currently focused on  <span className="yellow">web development</span> and  <span className="yellow">networking,</span> as I find both fields exciting and full of opportunities,
                  <br />
                  <br />
                  I am passionate about continuously <span className="yellow">improving my skills,</span> wether it's <span className="yellow"> coding, designing, </span> or  <span className="yellow">troubleshooting networks.</span>
                  
                    <span className="yellow">
                      {" "}
                      I'm excited to <span className="yellow">learn, collaborate, </span> and <span className="yellow"> grow in this field.</span> Looking forward to connecting with you all!
                    </span>
                 
                </p>
              </Col>
              
              <Col 
                md={4} 
                className="myAvtar"
                style={{ marginTop: "-50px" }} // <--- ADDED: Negative margin to shift the image upward
              >
                <Tilt>
                  <img src={LaptopImg} className="img-fluid" alt="avatar" />
                </Tilt>
              </Col>
            </Row>
            <Row>
              <Col md={12} className="home-about-social">
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                <ul className="home-about-social-links">
                  <li className="social-icons">
                    <a
                      href="https://www.instagram.com/invites/contact/?i=135xarahqmk9a&utm_content=nfry940"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="Instagram"
                    >
                      <AiFillInstagram />
                    </a>
                  </li>
                  <li className="social-icons">
                    <a
                      href="https://facebook.com/ms.kia02"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-colour  home-social-icons"
                      aria-label="Facebook"
                    >
                      <AiOutlineFacebook/>
                    </a>
                  </li>
                </ul>
              </Col>
            </Row>
          </Container>
        </Container>
      );
    
}

export default About