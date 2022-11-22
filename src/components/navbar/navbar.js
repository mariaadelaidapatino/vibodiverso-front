import React from "react";
import { Container, Nav, Navbar, DropdownButton, Dropdown, Row } from "react-bootstrap";
import './navbar.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons"
import Cookies from 'universal-cookie/es6';


const cookies = new Cookies();

export default class menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  Logout(){
    cookies.remove('_s');
    window.location.reLoad();
  }

  render() {
    return (
      <Navbar fixed="top" variant="dark" expand="lg" id="navbar">
        <Container>
          <Navbar.Brand href="/">Viboral Biodiverso</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/especies">Especies</Nav.Link>
              <Nav.Link href="/nosotros">Nosotros</Nav.Link>
              <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
            </Nav>
            <DropdownButton id="dropdown-basic-button" title="Usuario">              
              <Dropdown.Header>
                <Row>
                <FontAwesomeIcon icon={faUser} />
                </Row>
                <Row>
                    #USUARIO#
                </Row>                
              </Dropdown.Header>
              <Dropdown.Divider/>
              <Dropdown.Item onClick={() => this.Logout()}>Cerrar Sesion</Dropdown.Item>
              {/* <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item> */}
            </DropdownButton>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
