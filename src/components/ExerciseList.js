import React from "react";
import { ListGroup, Button, ListGroupItem } from "reactstrap";
import ExerciseItem from "./ExerciseItem";
import PropTypes from "prop-types";

const ExerciseList = (props) => {
  const saveValue = (index, value, id) => {
    props.saveValue(index, value, id);
  };

  return (
    <ListGroup>
      {props.exercises.map((exercise, index) => (
        <ExerciseItem
          key={index}
          id={index}
          name={exercise.name}
          saveValue={saveValue}
        ></ExerciseItem>
      ))}
      <ListGroupItem>
        <Button onClick={props.addExercise}>Lisää liike</Button>
      </ListGroupItem>
    </ListGroup>
  );
};

ExerciseList.propTypes = {
  exercises: PropTypes.array.isRequired,
  addExercise: PropTypes.func.isRequired,
};

export default ExerciseList;
