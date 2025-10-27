import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillInstagram,
  AiOutlineFacebook,
  
} from "react-icons/ai";
import './Social.css'

const Social = () => {
  return (
    <Container style={{padding: '30px'}}>
    <Row>
              <Col md={12} className="contact-social">
                <div className='contact-text'>
                <h1>FIND ME ON</h1>
                <p>
                Please don't hesitate to reach out to me and <span className="yellow">connect.</span>
                </p>
                </div>
                <ul className="contact-social-links">
                  <li className="contact-icons">
                    <a
                      href="https://www.instagram.com/invites/contact/?i=135xarahqmk9a&utm_content=nfry940"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiFillInstagram/>
                    </a>
                  </li>
                  <li className="contact-icons">
                    <a
                      href="https://facebook.com/ms.kia02"
                      target="_blank"
                      rel="noreferrer"
                      className="icon-color  contact-social-icons"
                    >
                      <AiOutlineFacebook />
                    </a>
                  </li>
                  
                  
                </ul>
              </Col>
            </Row>
          </Container>
  )
}

export default Social