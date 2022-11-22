import React from "react";
import { Container, Row } from "react-bootstrap";
import "../avistamientos.css";
import DataGrid from "../../grid/grid";
import { request } from "../../helper/helper";
import ConfirmationPromprs from '../../prompts/confirmation'
import Loading from "../../loading/loading";
import MessagePrompt from '../../prompts/message';


const columns =[
    {
        dataField: "_id",
        text:"ID",
        hidden: true,
    },
    {
        dataField: "nombre",
        text:"Nombre",
    },
    {
        dataField: "especie",
        text:"Especie",
    },
    {
        dataField: "descripcion",
        text:"Descripcion",
    },
    {
        dataField: "vereda",
        text:"Vereda",
    },    
];
export default class AvistamientosBuscar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      idAvistamiento: null,
      confirmation:{
        title:'Eliminar el avistamiento', 
        text: '¿Deseas eliminar el avistamiento?',
        show: false,
      },
      message:{
        text:'',
        show: false,
      },
    };
    this.onClickEditButton = this.onClickEditButton.bind(this);
    this.onClickDeleteButton = this.onClickDeleteButton.bind(this);
    this.onCancel =this.onCancel.bind(this);
    this.onConfirm= this.onConfirm.bind(this);
  }
  
  componentDidMount(){
    request
    .get(this.props.url)
    .then((response) =>{
        this.setState({ rows: response.data});
    })
    .catch((error) => {
        console.log(error);
    });
  }

  onClickEditButton(row){
    this.props.setIdAvistamiento(row._id);

    this.props.changeTab('editar');
  }

  onClickDeleteButton(row) {
    this.setState({
      idAvistamiento: row._id,
      confirmation:{
        ...this.state.confirmation,
        show:true,
      },
    });
  }

  onCancel(){
    this.setState({
      confirmation:{
        ...this.state.confirmation,
        show: false,
      },
    });
  }

  onConfirm() {
    this.setState(
      {
        confirmation:{
          ...this.state.confirmation,
          show: false,
        },
      },
      this.eliminarAvistamiento()
    );
  }

  eliminarAvistamiento(){
    this.setState({loading: true});
    request
    .delete(`/avistamientos/${this.state.idAvistamiento}`)
    .then((response) =>{
        this.setState({
          loading:false,
          message:{
            text:response.data.msg,
            show: true,
          },
        });
        if(response.data.exito) this.reloadPage();
    })
    .catch((err) =>{
      console.error(err);
      this.setState({loading: false});
    });
  }

  reloadPage(){
    setTimeout(() => {
      window.location.reload();
    }, 2500);
  }

  render() {    
    return (
      <Container id="avistamientos-buscar-container">
        <ConfirmationPromprs
          show={this.state.confirmation.show}
          title={this.state.confirmation.title}
          text={this.state.confirmation.text}
          onCancel={this.onCancel}
          onConfirm={this.onConfirm}
        /> 
        
        <MessagePrompt
          text={this.state.message.text}
          show={this.state.message.show}
          duration={2500}
          onExited={this.onExitedMessage}
        />
        <Loading show={this.state.loading} />
        <Row>
          <h1>Buscar avistamientos</h1>
        </Row>
        <Row>
          <DataGrid 
          url="/avistamientos" 
          columns={columns} 
          showEditButton={true}
          showDeleteButton={true}
          onClickEditButton={this.onClickEditButton}
          onClickDeleteButton={this.onClickDeleteButton}
          />
        </Row>
      </Container>
    );
  }
}
