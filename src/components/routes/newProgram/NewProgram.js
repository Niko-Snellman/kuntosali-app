import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import ExerciseList from "../../exerciseList/ExerciseList";

const NewProgram = () => {
  const exercisesArray = [
    {
      name: "",
    },
  ];

  const [exercises, setExercises] = useState(exercisesArray);

  const addExercise = () => {
    setExercises([...exercises, { name: "" }]);
  };

  return (
    <div>
      <h3>Uusi ohjelma</h3>
      <Form>
        <FormGroup className="border p-1">
          <Label for="programName">Nimi</Label>
          <Input type="text" name="name" id="programName" />
          <Label for="programDesc">Kuvaus</Label>
          <Input type="textarea" name="description" id="programDesc" />
        </FormGroup>
        <FormGroup className="border p-1">
          <ExerciseList addExercise={addExercise} exercises={exercises} />
        </FormGroup>
        <FormGroup>
          <Button>Tallenna</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default NewProgram;
