import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineFacebook,
} from "react-icons/ai";
const Footer = () => {
    let date = new Date();
    let year = date.getFullYear();
    return (
      <Container fluid className="footer">
        <Row>
          <Col md="4" className="footer-copywright">
          </Col>
          <Col md="4" className="footer-copywright">
            <span> © Kiara Panaguiton {year}</span>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/invites/contact/?i=135xarahqmk9a&utm_content=nfry940"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://facebook.com/ms.kia02"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <AiOutlineFacebook />
                </a>
              </li>
              
                
              
            </ul>
          </Col>
        </Row>
      </Container>
    );  
}

export default Footer