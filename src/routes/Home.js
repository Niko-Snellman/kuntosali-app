import React from "react";
import { Container, Row, Col } from "reactstrap";

const Home = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col className="mb-3">
            <h2>Sivun tarkoitus</h2>
            <p>
              Kuntosali App on sovellus, jonka avulla voi seurata omaa
              kehittymistä kuntosalilla.
            </p>
            <p>Ohjelmat sivulla voi rakentaa oman kuntosaliohjelman.</p>
            <p>
              Tilastot sivulla voi tarkastella omaa edistymistä kuntosalilla.
            </p>
            <p>
              Päiväkirja sivulla voi kirjata ylös kuntosalikerran jälkeen oman
              suorituksen. Kun valitsee suoritettavan ohjelman, voi valita mitkä
              liikkeet on suorittanut sinä päivänä ja liikkeille voi asettaa
              toistot, sarjat ja painot.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
