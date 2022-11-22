import React from "react";
import { Card, Carousel, Container } from "react-bootstrap";
import "./especies.css";

export default class especies extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container className="grid-container">
        <h2>
          Estas son algunas especies que se encuentran en nuestro municipio
        </h2>
        {/* Primera tarjeta  */}
        <Card className="grid-item" style={{ width: "18rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/273300484_506673837552372_588501523465757556_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEK0GiU6XQ2qbCX5BsqepqHD5WW7Q2fAMEPlZbtDZ8AwQavQVcwg9RwrZFxQ171OQw&_nc_ohc=lnqtmV66UY0AX_mEVjy&_nc_ht=scontent-bog1-1.xx&oh=00_AfDbLCURsqFBlOG_h1pfB4NR9yfzADJfPEh1kiDU3MWEnA&oe=63818A6A"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/211121816_365814554971635_1829317127441510404_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHn8129brolC1l3d9cJSuwaP5UXUQ79qjQ_lRdRDv2qNLvNoli10jX6oNKByBEEeLA&_nc_ohc=UX4MPgT5tG8AX9_zBvn&_nc_ht=scontent-bog1-1.xx&oh=00_AfAwvLXuw6teuICyfu_fSgypA6FMQaPv-UHyRLNfw8LpAA&oe=6381C114"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/101984642_171839461035813_7540210706155569152_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeG00fllFlUkwxuOxhvW6PfW4KEVuTmiPJzgoRW5OaI8nOSreLWWELV2H0nlQ0Y5RAQ&_nc_ohc=kt4TecOnZ1wAX8VwoWi&tn=Xm-2OVj0VYjYmVvw&_nc_ht=scontent-bog1-1.xx&oh=00_AfA7SSPHb5PWIb537g0Waz3OYRoNq6lWEZyWUslxeVfEyg&oe=63A48FFD"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>Sapos y Ranas</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* Segunda Tarjeta */}
        <Card className="grid-item" style={{ width: "18rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/123823461_218968722989553_434338599571205787_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeHNln_Rp7iTl6WFLuX7i_H1v2Gf19q8dIa_YZ_X2rx0htOZXS6IJJvhhd-BqRsw2T8&_nc_ohc=8R-JMW4mw7wAX-3NTHB&_nc_ht=scontent-bog1-1.xx&oh=00_AfBMD71u5Tnio_GvAyptWS7mBmQe-tRvooZnHUYPLO4JBA&oe=63A4AC11"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/308456754_500848985388310_8577146633649651923_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeEOTEkfatKqhiQL9Fd-35qw6lIMkiPbRSbqUgySI9tFJpG6jY3I55u9NgDIa_M01q8&_nc_ohc=jQLMwaI6idgAX95-RdZ&tn=Xm-2OVj0VYjYmVvw&_nc_ht=scontent-bog1-1.xx&oh=00_AfDlrHQExM_5hyE5Djd2uWDgaqqfEF2_wcXmmBYHlAavJQ&oe=63815B6D"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/309204143_500848982054977_6688826246143656836_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHdRnV514FzEZkkro0XkevVloMFeVFdrnuWgwV5UV2ue748L_hV4FC3UHXDDy0mwlc&_nc_ohc=HAjYiBhBhp0AX91Cess&tn=Xm-2OVj0VYjYmVvw&_nc_ht=scontent-bog1-1.xx&oh=00_AfAuI0SF3ETkpr82gej5zI0Bfxa2bb0-H6AgWXITnHd1Sw&oe=6382569A"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>Aves</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* tercera tarjeta */}
        <Card className="grid-item" style={{ width: "18rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/84875243_118492539703839_8922135490413461504_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeH8ol2X2cALkggJG8k80BDAHMCq8DXjjTQcwKrwNeONNBUru4MKgfiWhEGkTFhNWHs&_nc_ohc=shVkxfnjQQIAX9n69o3&_nc_ht=scontent-bog1-1.xx&oh=00_AfCxftJS4mo5xC64fG4iuJiEnZPcQS6AG3MZFhDWuVe87g&oe=63A48854"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/118624168_199489914937434_45432449281151966_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFvKB3kxQoniZ3Ft74JVyHYw7N59Yov_8PDs3n1ii__w3NHkGkRP3IxxtM3Wpp58i4&_nc_ohc=apnC6o6Qod0AX_jjF1w&_nc_ht=scontent-bog1-1.xx&oh=00_AfCqb5Msg8w2PO1KnttV3NNvc7yDUKxTLkkw3Qd_UodZOw&oe=63A49E4D"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/108318760_186218122931280_874945479426042309_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeFsukLX_0XBiGUGVMcBBd9IsgpQQracX1-yClBCtpxfX1KKXCDrVNSZBTBCopdHoYo&_nc_ohc=dBjhc5FZFWcAX8UgcGn&_nc_ht=scontent-bog1-1.xx&oh=00_AfBo_ZHrPJQFD7Y-nsFslgr2yWInlsIL0zpdrGG3HXFw3A&oe=63A4A969"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>Mamiferos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* cuarta tarjeta */}
        <Card className="grid-item" style={{ width: "18rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/94331254_158425435710549_3927759515021213696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFnxTDYNDnhcZZz7cKucAJF7x6vCVpyrM_vHq8JWnKsz8Src4l4F0DgOFZnyS5JamA&_nc_ohc=kQwpcRwblncAX8GeyOF&_nc_ht=scontent-bog1-1.xx&oh=00_AfAXzH1wvKoyOQq0tP4pHBE8ycGGySCotNQqVI4-kz-NBw&oe=63A48C57"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/175682257_322410965978661_6746862670018974061_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeEf4A1jxJ-aXqT8NWFkqKRfHGRqzLMHuSYcZGrMswe5JtdRWom65XsG8vSwUR5j15s&_nc_ohc=AxnGTqzTh74AX9WMS7M&_nc_ht=scontent-bog1-1.xx&oh=00_AfAJIoEdJgABOOpmOLhgTh5K2vBjJcG7znV1pKZJgP5MWw&oe=63A494BC"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t39.30808-6/269862413_480736016812821_3906255074383755222_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeFzgRoP6M3d8FNjg9y3siBkyOWRHO2NsfHI5ZEc7Y2x8YzykvRLkkD9kL4Vql4Oe0U&_nc_ohc=BXPTJ4ege6AAX_JKNd7&_nc_ht=scontent-bog1-1.xx&oh=00_AfBOZwdO_RAD5EoZJOpCAIWJlW_WAm6fu62DDCqZb7DQVQ&oe=63826FA0"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>Otros Anfibios</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* quinta tarjeta */}
        <Card className="grid-item" style={{ width: "18rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/139072598_264004561819302_6807203952761709087_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFs63ARJfSqwDvSLVUyVy7ROieuk3K-s7s6J66Tcr6zu2I_jMTlURCT4IlwsedWpCI&_nc_ohc=EPcqbUpYr-0AX8la3ny&_nc_ht=scontent-bog1-1.xx&oh=00_AfColqc64BT9qVNMSX6tWUnrzp-IOBmU9tu4fWet1EpLAg&oe=63A48CEC"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/118092238_198148575071568_2901378431983254054_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9267fe&_nc_eui2=AeGll91pI9Kpi7WI-JSp11D9I7yOAMUlz_8jvI4AxSXP_7Yge1jSzW5SU1yn8200oWA&_nc_ohc=lbmbM6eBqsoAX_dwD2o&tn=Xm-2OVj0VYjYmVvw&_nc_ht=scontent-bog1-1.xx&oh=00_AfD-XrLlER1X_CkNAOd03kghACFjISX5GaIssXVWd8PM-A&oe=63A49678"
                alt="Second slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>Serpientes</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>

        {/* sexta tarjeta */}
        <Card className="grid-item" style={{ width: "18rem" }}>
          <Carousel>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/117336158_196027065283719_8616416840318769307_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGCaabiWt4tFzHZ26W9SAhL-q5LnUO-u3r6rkudQ767eks53N7CMCw1d5xAm_AxRGg&_nc_ohc=kqQt8lOh2_IAX8KXmWw&_nc_ht=scontent-bog1-1.xx&oh=00_AfDKMvQZNZZmW9MY-4cHrmYJkTuNoZpF2u6OjdTgPSiInw&oe=63A49DB4"
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/104587143_179946770225082_992189789487936979_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeGKSWoNTXqXmDHR-zvXsZSE-__tyYL9wv_7_-3Jgv3C_9Oylw1VVpHldCH2yhkkAxs&_nc_ohc=ZUDWlAfThCwAX9kYiEz&tn=Xm-2OVj0VYjYmVvw&_nc_ht=scontent-bog1-1.xx&oh=00_AfA7renc3dTZRnwtlO4oJt3g3dlnKWlDoCx8xTEcQy3ZGw&oe=63A4A40D"
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://scontent-bog1-1.xx.fbcdn.net/v/t1.6435-9/84333693_121532479399845_5236046840176050176_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_eui2=AeHLjuSBnBfFonmjRavWLCVv9vnKCavKmob2-coJq8qahuMK9dltub2Wtkm3CwdH8YE&_nc_ohc=K29go_U9tuMAX9ejreL&_nc_ht=scontent-bog1-1.xx&oh=00_AfB8f-QOY0g1Cqcebi3I73PFleA5TcBQVIf7LUuWldvFKQ&oe=63A48AAA"
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          <Card.Body>
            <Card.Title>Insectos</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    );
  }
}
