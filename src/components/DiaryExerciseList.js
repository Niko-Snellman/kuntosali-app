import React from "react";
import { ListGroup } from "reactstrap";
import DiaryExerciseItem from "./diaryExerciseItem/DiaryExerciseItem";

const DiaryExerciseList = (props) => {
  var exercises = props.exercises;

  if (!exercises) {
    exercises = [];
  }

  const updateDiaryExercises = (diaryExercise) => {
    props.updateDiaryExercises(diaryExercise);
  };

  return (
    <ListGroup>
      {exercises.map((e) => (
        <DiaryExerciseItem
          key={e._id}
          exercise={e}
          updateDiaryExercises={updateDiaryExercises}
        />
      ))}
    </ListGroup>
  );
};

export default DiaryExerciseList;
