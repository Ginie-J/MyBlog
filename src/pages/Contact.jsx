import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { SlEnvolope } from "react-icons/sl";
import ContactForm from './ContactForm';

const Contact = () => {
  return (
    <Container className='pt-5'>
      <h1>Contact Me</h1>
      <Row className='mt-5'>
        <Col md='6' className='contact-box'>
          <h3 className='mb-4'>e-mail<SlEnvolope className='mail-icon' /></h3>
          <ContactForm />
        </Col>
        <Col md='6'>
        </Col>
      </Row>
      
    </Container>
  )
}

export default Contact