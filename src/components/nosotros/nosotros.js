import React from 'react'
import { Container } from 'react-bootstrap';
import "./nosotros.css"


export default class nosotros extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    
    render() { 
        return ( 
            <Container>
                <div className="row mb-2 my-2 ">
                <div className="col-md-6 my-5">
                    <img className="bd-placeholder-img" width="500" height="500" src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/301896385_474906577982551_3720569550789031312_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=Z-4UeTyxhNAAX_y_A6D&_nc_ht=scontent-bog1-1.xx&oh=00_AfDs7dEQgeUJVww7eo1KwE_3XgCkg6I08Uex8LlFpuBUlw&oe=637D144D"/>
                </div>
                <div className="col-md-6 aling-middle">
                    <h1 className="u-text u-text-1 my-5">Sobre nosotros</h1>
                    <p className="u-text u-text-grey-50 u-text-2 mx-5 my-5 ">Somos un grupo de biólogos de El Carmen de Viboral que busca promover la biodiversidad de fauna y flora que tiene nuestro municipio, a través de fotografías y videos con información interesante acerca de las especies registradas. ¡Juntos podemos proteger la biodiversidad de nuestro territorio!.</p>
                    </div>
            </div>
            </Container>
                
         );
    }
}
 
 