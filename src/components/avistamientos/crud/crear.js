import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../avistamientos.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";

export default class AvistamientosCrear extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rediret: false,
      message:{
        text:"",
        show: false
      },
        loading: false,
        avistamiento:{
            nombre: "",
            especie: "",
            descripcion: "",
            vereda: "",
        }
    };
    this.onExitedMessage = this.onExitedMessage.bind(this);
  }
  setValue(inicioe,value){
    this.setState({
        avistamiento: {
            ...this.state.avistamiento,
            [inicioe]: value, 
        },
    });
  }
  guardarAvistamientos(){
    this.setState({ loading: true});
    request
    .post("/avistamientos", this.state.avistamiento)
    .then((response)=>{
        if (response.data.exito){
          this.setState({
            rediret: response.data.exito,
            message:{
              text: response.data.msg,
              show: true,
            },
          });          
        }
        this.setState({ loading: false});        
    })
    .catch((err)=> {
        console.error(err);
        this.setState({ loading: true});
    });
  }
  onExitedMessage(){
    if (this.state.rediret) this.props.changeTab('buscar');
  }
  render() {
    return (
      <Container id="avistamientos-crear-container">
        <MessagePrompt 
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
          />
        <Loading show={this.state.Loading}/>
        <Row>
          <h1>Crear Avistamientos</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control onChange={(e) => this.setValue("nombre", e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Especie</Form.Label>
              <Form.Control onChange={(e) => this.setValue("especie", e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripción</Form.Label>
              <Form.Control onChange={(e) => this.setValue("descripcion", e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Vereda</Form.Label>
              <Form.Control onChange={(e) => this.setValue("vereda", e.target.value)}/>
            </Form.Group>

            <Button variant="primary" onClick={() => console.log(this.guardarAvistamientos())}>
              Guardar avistamiento
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
