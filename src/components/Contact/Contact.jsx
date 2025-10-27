import React, { useState, useRef } from 'react'
import emailjs from "@emailjs/browser";
import { Container, Row, Col } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import './Contact.css'

const Contact = () => {
    const form = useRef();
    const [done, setDone] = useState(false);
    const [notDone, setNotDone] = useState(false);
    const [sending, setSending] = useState(false);
    const [formData, setFormData] = useState({
        from_name: '',
        reply_to: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        });
        setDone(false);
        setNotDone(false);
    };

    const sendEmail = async (e) => {
        e.preventDefault();

        // Validate form
        if (!formData.from_name || !formData.reply_to || !formData.message) {
            setNotDone(true);
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.reply_to)) {
            alert('Please enter a valid email address');
            return;
        }

        setSending(true);

        try {
            const result = await emailjs.sendForm(
                'service_ewg952g',
                'template_48gawwy',
                form.current,
                'XD5f0vc1M_1IPz7J0'
            );

            if (result.text === 'OK') {
                setDone(true);
                setFormData({
                    from_name: '',
                    reply_to: '',
                    message: ''
                });
                form.current.reset();
            }
        } catch (error) {
            console.error('Email send failed:', error);
            alert('Failed to send message. Please try again.');
        } finally {
            setSending(false);
        }
    };

    return (
        <Container style={{paddingTop: '50px'}} >
            <Row >
                <Col md={6} className="c-left" >
                    <h1>Get in Touch</h1>
                    <h1 className="yellow">Contact me</h1>
                </Col>
                <Col md={6} className="c-right">
                    <form ref={form} onSubmit={sendEmail}>
                        <input 
                            type="text" 
                            name="from_name" 
                            className="user" 
                            placeholder="Name" 
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="email" 
                            name="reply_to" 
                            className="user" 
                            placeholder="Email" 
                            onChange={handleChange}
                            required
                        />
                        <textarea 
                            name="message" 
                            className="user" 
                            placeholder="Message" 
                            onChange={handleChange}
                            required
                        />
                        <input 
                            type="hidden" 
                            name="time" 
                            value={new Date().toLocaleString()} 
                        />
                        {notDone && (
                            <span className='not-done'>Please fill all the input fields</span>
                        )}
                        <Button 
                            type="submit" 
                            className="button" 
                            disabled={sending}
                        >
                            {sending ? 'Sending...' : 'Send'}
                        </Button>
                        {done && (
                            <span className='done'>
                                Thanks for your message! I'll get back to you soon.
                            </span>
                        )}
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default Contact;