import React from "react";
import { Container, Nav, Row } from "react-bootstrap";
import "./avistamientos.css";
import AvistamientosBuscar from "./crud/buscar";
import AvistamientosCrear from "./crud/crear";
import AvistamientosEditar from "./crud/editar";

export default class Avistamientos extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        currentTab: "buscar", 
        _id: null,
    };
    this.changeTab = this.changeTab.bind(this);
    this.setIdAvistamiento = this.setIdAvistamiento.bind(this);
    this.getIdAvistamiento = this.getIdAvistamiento.bind(this);
  }

  changeTab(tab){
    this.setState({ currentTab: tab});
  }

  setIdAvistamiento(id){
    this.setState({_id: id});
  }

  getIdAvistamiento(){
    return this.state._id;
  }

  render() {
    return (
      <Container id="avistamientos-container">
        <Row>
          <Nav fill variant="tabs" defaultActiveKey="/buscar" 
          onSelect={(eventKey)=> this.setState({ currentTab: eventKey })}>            
            <Nav.Item>
              <Nav.Link eventKey="buscar">Buscar</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="crear">Crear</Nav.Link>
            </Nav.Item>            
          </Nav>
        </Row>
        <Row>
            {this.state.currentTab === "buscar" ? (
            <AvistamientosBuscar 
            changeTab={this.changeTab}
            setIdAvistamiento={this.setIdAvistamiento}/>
            ) : this.state.currentTab === "crear" ? (
            <AvistamientosCrear changeTab={this.changeTab}/>
            ) : (
              <AvistamientosEditar 
                changeTab={this.changeTab}
                getIdAvistamiento={this.getIdAvistamiento}
                />
            )}
        </Row>
      </Container>
    );
  }
}
