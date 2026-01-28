import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home.jsx';
import Page1 from './pages/page1.jsx';


import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {


  return (
    <>

      <Navbar expand="lg" className="bg-navbar-orange">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            <img src="src/img/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto full-width pr-15">
              <Form inline>
                <Row>
                  <Col xs="auto">
                    <Form.Control
                      type="text"
                      placeholder="Buscar por nombre, tipo, etc..."
                      className=" mr-sm-2"
                    />
                  </Col>
                </Row>
              </Form>

              <Nav.Link className='ml-auto' as={Link} to="/">Inicio</Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container fluid className='body-content'>
        <Row>
          <Col lg={3} md={12} >
            hola
          </Col>

          <Col className='filter-bar' lg={9} md={12} >
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </Col>
        </Row>

      </Container>
    </>
  )
}

export default App
