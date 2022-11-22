import React from "react";
import axios from "axios";
import { Container, Form, Button} from "react-bootstrap";
import app from "../../app.json";
import "./login.css";
import { isNull } from "util";
import Cookies from "universal-cookie";
import { calcularExpirarSesion } from "../helper/helper";
import Loading from "../loading/loading";
import imglogin from "./login.png"
import logo from "./logo.png"

const { APIHOST } = app;
const cookies = new Cookies();

export default class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: '',
      pass: '',
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });
    axios.post(`${APIHOST}/usuarios/login`, {
        usuario: this.state.usuario,
        pass: this.state.pass,
      })
      .then((response) => {
        if (isNull(response.data.token)) {
          alert("Usuario y/o contraseña inválidos");
        } 
        else {
          cookies.set('_s', response.data.token, 
          {
            path: '/',
            expires:calcularExpirarSesion(),
          });
          this.props.history.push(window.open('/avistamientos')
          );
        }
        this.setState({ loading: false });
      })
      .catch((err) => {
        console.log(err);
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <Container >
        <Loading show={this.state.loading} />
        <div className="login-container">
          <div className="login-info-container">
              <h1 className="title">Iniciar Sesión</h1>
              <div className="social-login">
                <div className="social-login-element">
                  <img src={logo}/>
                </div>
              </div>           
            
              <Form className= "inputs-container">
                <Form.Group controlId="formBasicEmail">                  
                  <Form.Control className="input" placeholder="Usuario" onChange={(e) => this.setState({ usuario: e.target.value })}
                  />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">                  
                  <Form.Control className="input" type="password" placeholder="Contraseña" onChange={(e) => this.setState({ pass: e.target.value })}/>
                </Form.Group>
                <Button
                  className="btn1"                

                  onClick={() => {
                    this.iniciarSesion();
                  }}
                >
                  Iniciar Sesión
                </Button>
              </Form>
              </div>
              <img className="image-container" src={imglogin}/>          
          
        </div>
      </Container>
    );
  }
}
