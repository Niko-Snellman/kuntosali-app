import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  Button,
  Container,
  Row,
  Col,
  CardBody,
} from "reactstrap";

const Programs = () => {
  return (
    <div>
      <h2 className="m-4">Programs</h2>

      <Container className="mt-4">
        <Row>
          <Col className="mb-3">
            <Button>Luo uusi</Button>
          </Col>
        </Row>

        <Row>
          <Col xs="auto" className="mb-3">
            <Card body outline style={{ width: "18rem" }}>
              <CardBody>
                <CardTitle>Kortti 1</CardTitle>
                <CardText>
                  Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe
                  fufev ewtfvwuefuwefuwefv
                </CardText>
                <Button>Nappi</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="auto" className="mb-3">
            <Card body outline style={{ width: "18rem" }}>
              <CardBody>
                <CardTitle>Kortti 2</CardTitle>
                <CardText>
                  Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe
                  fufev ewtfvwuefuwefuwefv
                </CardText>
                <Button>Nappi</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="auto" className="mb-3">
            <Card body outline style={{ width: "18rem" }}>
              <CardBody>
                <CardTitle>Kortti 3</CardTitle>
                <CardText>
                  Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe
                  fufev ewtfvwuefuwefuwefv
                </CardText>
                <Button>Nappi</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="auto" className="mb-3">
            <Card body outline style={{ width: "18rem" }}>
              <CardBody>
                <CardTitle>Kortti 4</CardTitle>
                <CardText>
                  Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe
                  fufev ewtfvwuefuwefuwefv
                </CardText>
                <Button>Nappi</Button>
              </CardBody>
            </Card>
          </Col>
          <Col xs="auto" className="mb-3">
            <Card body outline style={{ width: "18rem" }}>
              <CardBody>
                <CardTitle>Kortti 5</CardTitle>
                <CardText>
                  Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe
                  fufev ewtfvwuefuwefuwefv
                </CardText>
                <Button>Nappi</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Programs;
