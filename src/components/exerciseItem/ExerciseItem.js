import React from "react";
import { ListGroupItem, Row, Col, Label, Input } from "reactstrap";
import PropTypes from "prop-types";
import store from "../../store";
import { connect } from "react-redux";

const ExerciseItem = (props) => {
  const handleNameChange = (e) => {
    store.dispatch({ type: "ADD_EXERCISE", payload: { name: e.target.value } });
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
            onChange={handleNameChange}
          />
        </Col>
        <Col md={2} className="align-self-end mb-1">
          <Input
            placeholder="Toistot"
            type="number"
            name="reps"
            id="reps"
            value={props.reps}
          />
        </Col>
        <Col md={2} className="align-self-end mb-1">
          <Input
            placeholder="Sarjat"
            type="number"
            name="sets"
            id="sets"
            value={props.sets}
          />
        </Col>
        <Col md={2} className="align-self-end mb-1">
          <Input
            placeholder="Painot(Kg)"
            type="number"
            name="weight"
            id="weight"
            value={props.weight}
          />
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default connect((store) => {
  return {
    exercises: store.exercises.initialStore.exercises,
  };
})(ExerciseItem);

ExerciseItem.propTypes = {
  name: PropTypes.string.isRequired,
  reps: PropTypes.number,
  sets: PropTypes.number,
  weight: PropTypes.number,
};

//export default ExerciseItem;
