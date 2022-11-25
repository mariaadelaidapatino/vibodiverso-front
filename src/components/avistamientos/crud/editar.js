import React from "react";
import { Container, Row, Form, Button } from "react-bootstrap";
import "../avistamientos.css";
import { request } from "../../helper/helper";
import Loading from "../../loading/loading";
import MessagePrompt from "../../prompts/message";
import ConfirmationPromprs from "../../prompts/confirmation";

export default class AvistamientosEditar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idAvistamiento: this.props.getIdAvistamiento(),
      rediret: false,
      message:{
        text: '',
        show: false,
      },
      confirmation:{
        title: 'Modificar avistamiento',
        text: '¿Deseas modificar el avistamiento?',
        show: false,
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
    this.onCancel = this.onCancel.bind(this);
    this.onConfirm = this.onConfirm.bind(this);
  }

  componentDidMount(){
    this.getAvistamiento();
  }
  
  getAvistamiento(){
    this.setState({ loading: true});
    request
    .get(`/avistamientos/${this.state.idAvistamiento}`)
    .then((response) => {      
      this.setState({
        avistamiento: response.data,
        loading:false,  
      });
    })
    .catch((err)=> {
      console.error(err);
      this.setState({ loading: false});
    });
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
    .post("/avistamientos", this.state.avistamiento) //put
    .then((response)=>{
        if (response.data.exito){
          this.setState({    // updateone
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

  onCancel(){
    this.setState({
      confirmation: {
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm(){
    this.setState({
      confirmation:{
        ...this.state.confirmation,
        show:false,
      },
    },
    this.guardarAvistamientos()
    );    
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
        <ConfirmationPromprs
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        />
        <Loading show={this.state.Loading}/>
        <Row>
          <h1>Editar Avistamientos</h1>
        </Row>
        <Row>
          <Form>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                  value={this.state.avistamiento.nombre} 
                  onChange={(e) => this.setValue("nombre", e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Especie</Form.Label>
              <Form.Control 
                value={this.state.avistamiento.especie} 
                onChange={(e) => this.setValue("especie", e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                value={this.state.avistamiento.descripcion}  
                onChange={(e) => this.setValue("descripcion", e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasic">
              <Form.Label>Vereda</Form.Label>
              <Form.Control
                value={this.state.avistamiento.vereda}  
                onChange={(e) => this.setValue("vereda", e.target.value)}/>
            </Form.Group>

            <Button 
              variant="primary" 
              onClick={() => 
                this.setState({
                  confirmation: { ...this.state.confirmation, show: true},
                })
              }
            >
              Guardar avistamiento
            </Button>
          </Form>
        </Row>
      </Container>
    );
  }
}
