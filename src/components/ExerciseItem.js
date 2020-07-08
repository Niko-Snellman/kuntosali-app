import React from "react";
import { ListGroupItem, Row, Col, Label, Input } from "reactstrap";
import PropTypes from "prop-types";

const ExerciseItem = (props) => {
  const handleChange = (e) => {
    props.saveValue(props.id, e.target.value, e.target.id);
  };

  return (
    <ListGroupItem>
      <Row>
        <Col md={4} className="mb-1">
          <Label for="liikeName">Liike</Label>
          <Input
            placeholder="Nimi"
            type="text"
            name="liike"
            id="liikeName"
            onChange={handleChange}
            required
          />
        </Col>
        <Col md={2} className="align-self-end mb-1">
          <Input
            placeholder="Toistot"
            type="number"
            name="reps"
            id="reps"
            value={props.reps}
            onChange={handleChange}
          />
        </Col>
        <Col md={2} className="align-self-end mb-1">
          <Input
            placeholder="Sarjat"
            type="number"
            name="sets"
            id="sets"
            value={props.sets}
            onChange={handleChange}
          />
        </Col>
        <Col md={2} className="align-self-end mb-1">
          <Input
            placeholder="Painot(Kg)"
            type="number"
            name="weights"
            id="weights"
            value={props.weight}
            onChange={handleChange}
          />
        </Col>
      </Row>
    </ListGroupItem>
  );
};

ExerciseItem.propTypes = {
  name: PropTypes.string.isRequired,
  reps: PropTypes.number,
  sets: PropTypes.number,
  weight: PropTypes.number,
};

export default ExerciseItem;
