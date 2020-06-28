import React from "react";
import { Col, Card, CardTitle, CardText, Button } from "reactstrap";
import PropTypes from "prop-types";
import "./ProgramItem.css";

const ProgramItem = (props) => {
  return (
    <Col xs="auto" className="mb-3">
      <Card body outline style={{ width: "18rem" }}>
        <CardTitle>{props.name}</CardTitle>
        <CardText>{props.desc}</CardText>
        <Button className="delete" color="danger">
          X
        </Button>
      </Card>
    </Col>
  );
};

ProgramItem.propTypes = {
  name: PropTypes.string.isRequired,
  desc: PropTypes.string,
};

export default ProgramItem;
