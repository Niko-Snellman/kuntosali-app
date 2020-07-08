import React from "react";
import { ListGroup } from "reactstrap";
import ExerciseDataItem from "./ExerciseDataItem";

const ExerciseDataList = (props) => {
  let exercises = props.exercises;
  console.log(exercises);

  if (!exercises) {
    exercises = [];
  }

  return (
    <ListGroup>
      {exercises.map((e) => (
        <ExerciseDataItem key={e._id} exercise={e} />
      ))}
    </ListGroup>
  );
};

export default ExerciseDataList;
