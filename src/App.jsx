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
        <Container fluid={true}>
          <Navbar.Brand as={Link} to="/">
            <img src="src/img/logo.png" alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto full-width pr-15">
              <Form inline={true}>
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
      <Container fluid={true} className='body-content'>
        <Row>
          <Col lg={2} md={12} >
            <Row>
              <Col>
                <div className='left-input-container'>

                  <h3 className="input-title">Generación</h3>
                  <Form.Select size="lg">
                    <option defaulChecked={""} disabled={true}>Generación</option>
                    <option value={1}>Generación 1</option>
                    <option value={2}>Generación 2</option>
                    <option value={3}>Generación 3</option>
                  </Form.Select>
                </div>

              </Col>
            </Row>
            <Row>
              <Col>
                <div className='left-input-container'>
                  <h3 className="input-title">Tipo principal</h3>
                  <Button className='input-type input-fire' variant="primary">Fuego</Button>
                  <Button className='input-type input-psychic' variant="primary">Psíquico</Button>
                  <Button className='input-type input-water' variant="primary">Agua</Button>
                  <Button className='input-type input-grass' variant="primary">Planta</Button>
                </div>
              </Col>
            </Row>
          </Col>

          <Col className='filter-bar' lg={10} md={12} >
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
