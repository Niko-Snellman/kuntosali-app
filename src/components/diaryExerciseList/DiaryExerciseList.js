import React from "react";
import { ListGroup } from "reactstrap";
import DiaryExerciseItem from "../diaryExerciseItem/DiaryExerciseItem";

const DiaryExerciseList = (props) => {
  const exercises = props.exercises;

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
