import React from "react";
import {
  Card,
  CardText,
  Row,
  Col,
  CardBody,
  CardTitle,
  Button,
} from "reactstrap";

const ProgramsList = () => {
  return (
    <Row>
      <Col xs="auto" className="mb-3">
        <Card body outline style={{ width: "18rem" }}>
          <CardBody>
            <CardTitle>Kortti 1</CardTitle>
            <CardText>
              Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe fufev
              ewtfvwuefuwefuwefv
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
              Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe fufev
              ewtfvwuefuwefuwefv
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
              Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe fufev
              ewtfvwuefuwefuwefv
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
              Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe fufev
              ewtfvwuefuwefuwefv
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
              Kortin teksti weugbvuweguywge w ug wetgywe gweu guwefg uwe fufev
              ewtfvwuefuwefuwefv
            </CardText>
            <Button>Nappi</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default ProgramsList;
