import React from 'react'
import { Outlet } from 'react-router-dom'
import Top from './Top'
import { Container, Row, Col } from 'react-bootstrap'
import RAside from './RAside'
import Footer from './Footer'
const Layout = () => {
  return (
    <>
      <Top />
      <Container>
        <Row>
          <Col md="9"><Outlet /></Col> 
          <Col md="3"><RAside /></Col>
        </Row>
      </Container>
      <Footer />
      
    </>
  )
}

export default Layout