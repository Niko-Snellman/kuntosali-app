import React from "react";
import { ListGroup, Button, ListGroupItem } from "reactstrap";
import ExerciseItem from "../exerciseItem/ExerciseItem";
import PropTypes from "prop-types";

const ExerciseList = (props) => {
  return (
    <ListGroup>
      {props.exercises.map((exercise, index) => (
        <ExerciseItem key={index} name={exercise.name}></ExerciseItem>
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
