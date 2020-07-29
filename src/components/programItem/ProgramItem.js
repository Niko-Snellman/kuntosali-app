import React from "react";
import { Col, Card, CardTitle, CardText, Button } from "reactstrap";
import PropTypes from "prop-types";
import "./ProgramItem.css";
import axios from "../../api/Axios";

const ProgramItem = (props) => {
  //Poistaa ohjelman rajapinnasta
  const handleClick = () => {
    axios
      .delete("/programs/", { data: { id: props.id } })
      .then((result) => {
        console.log(result);
        alert("Ohjelma poistettu!");

        props.removeItem(props.id);
      })
      .catch((error) => {
        console.log(error);
        alert("Ohjelman poistaminen epäonnistui!");
      });
  };

  return (
    <Col xs="auto" className="mb-3">
      <Card body outline style={{ width: "18rem" }}>
        <CardTitle className="font-weight-bold">{props.name}</CardTitle>
        <CardText>{props.desc}</CardText>
        <Button className="delete" color="danger" onClick={handleClick}>
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
