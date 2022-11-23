import React from "react";
import biologa from "./biologa.png";
import biologos from "./biologos.png"
import "./index.css";


export default class inicio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      
      <>
        <div class="container1">
            <div class="info">
                <h1>Biodiversidad de El Carmen de Viboral</h1>
                <p>
                    Exaltamos la gran Biodiversidad que tiene El Carmen de Viboral. <br>                                       
                    </br>
                    Por que nuestro municipio es Viboral biodiverso
                </p>                
            </div>
            <div class="image">
                <img src={biologos} />
            </div>            
        </div>
        <main>
          <section class="services contenedor" id="servicio">
            <h2 class="subtitulo"> ¿Como Funciona?</h2>
            <div class="contenedor-servicio">
              <img src={biologa}></img>
              <div class="checklist-servicio">
                <div class="service">
                  <h3 class="n-service">
                    <span class="number"> 1 </span> Foto
                  </h3>
                  <p>Toma una foto del animal</p>
                </div>
                <div class="service">
                  <h3 class="n-service">
                    <span class="number"> 2 </span> Formulario
                  </h3>
                  <p>Llena el formulario para registar el nuevo avistamiento</p>
                </div>
                <div class="service">
                  <h3 class="n-service">
                    <span class="number"> 3 </span> Identificación
                  </h3>
                  <p>Un biologo lo identificará</p>
                </div>
              </div>
            </div>
          </section>
          <section class="galery" id="portafolio">
            <div class="contenedor">
              <h2 class="subtitulo">Galeria</h2>
              <div class="contenedor-galeria">
                <img
                  src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/309204143_500848982054977_6688826246143656836_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=kySdDh6ArOQAX-HJamo&_nc_ht=scontent-bog1-1.xx&oh=00_AfB0x0glQBgP6PChb-3ACEOcbEV_yqkXTteKX4sTWLRQbg&oe=637C67DA"
                  class="img-galeria"
                />
                <img
                  src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/279253639_556804125872676_4530941393815731962_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=730e14&_nc_ohc=_WZtEUB4K8wAX8pydMx&_nc_ht=scontent-bog1-1.xx&oh=00_AfCV6F1gIfcYEUtYj_SrHQRbLrwGg8ePFiWjOCK_vpRzIw&oe=637C7878"
                  class="img-galeria"
                />
                <img
                  src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/108318760_186218122931280_874945479426042309_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_ohc=mTQnuj-qsSMAX-BqgXc&_nc_ht=scontent-bog1-1.xx&oh=00_AfBneJobZbjbtHw_qiGSFsFo61gwhh8qAXXN4RDq4g6gKg&oe=638B64A9"
                  class="img-galeria"
                />
                <img
                  src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/90594334_146348023584957_2591685173095432192_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_ohc=If9hO22k9WQAX-u0mJx&tn=k5nHpe5cbMjvvyYt&_nc_ht=scontent-bog1-1.xx&oh=00_AfCFpkeCCKMWSH4qwbeIOCB6J9UfZfmVPnAYxXwzTvDK2g&oe=638B66D2"
                  class="img-galeria"
                />
                <img
                  src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/139072598_264004561819302_6807203952761709087_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=lXzuIdMd_x8AX-boWMe&tn=k5nHpe5cbMjvvyYt&_nc_ht=scontent-bog1-1.xx&oh=00_AfCNg9y95kwZhdYwMRaojVHo6ELT4Cz0sy1yo5aevq5_ig&oe=638B806C"
                  class="img-galeria"
                />
                <img
                  src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/117336158_196027065283719_8616416840318769307_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=7UpGiEec1eYAX8Mcs6z&_nc_ht=scontent-bog1-1.xx&oh=00_AfBq0UnjhgXD9PG5gdVL37qGQpsUXvakU51UOltohnmgxg&oe=639F57B4"
                  class="img-galeria"
                />
              </div>
            </div>
          </section>
        </main>
        
      </>
    );
  }
}
