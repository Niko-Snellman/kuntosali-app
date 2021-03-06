import React, { useState } from "react";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import ExerciseList from "../components/ExerciseList";
import axios from "../api/Axios";

const NewProgram = () => {
  const exercisesArray = [
    {
      name: "",
    },
  ];

  const [exercises, setExercises] = useState(exercisesArray);
  const [programName, setProgramName] = useState("");
  const [programDesc, setProgramDesc] = useState("");

  //Lisää tyhjän harjoituksen stateen
  const addExercise = () => {
    setExercises([...exercises, { name: "" }]);
  };

  //Lidää ohjelman nimen stateen
  const handleNameChange = (event) => {
    setProgramName(event.target.value);
  };

  //Lisää ohjelman kuvauksen stateen
  const handleProgramDescChange = (event) => {
    setProgramDesc(event.target.value);
  };

  //Tallentaa ohjelman rajapintaan
  const saveProgram = (e) => {
    e.preventDefault();

    let program = {
      name: programName,
      desc: programDesc,
      exercises: exercises,
    };

    console.log("ohjelma : ", program);

    axios
      .post("/programs", program)
      .then((res) => {
        console.log(res);
        alert("Ohjelema lisätty");
      })
      .catch((error) => {
        console.log(error);
        alert("Ongelma ohjelman lisäyksessä");
      });
  };

  //Tallentaa harjoituksen kentän arvot stateen
  const saveValue = (index, value, id) => {
    var exerArray = exercises;
    switch (id) {
      case "liikeName":
        exerArray[index].name = value;
        break;
      case "reps":
        exerArray[index].reps = value;
        break;
      case "sets":
        exerArray[index].sets = value;
        break;
      case "weights":
        exerArray[index].weights = value;
        break;
      default:
        break;
    }
    exerArray[index].exerciseData = [];
    setExercises(exerArray);
  };

  return (
    <div>
      <h3>Uusi ohjelma</h3>
      <Form onSubmit={saveProgram}>
        <FormGroup className="border p-1">
          <Label for="programName">Nimi</Label>
          <Input
            onChange={handleNameChange}
            type="text"
            name="name"
            id="programName"
            required
          />

          <Label for="programDesc">Kuvaus</Label>
          <Input
            onChange={handleProgramDescChange}
            type="textarea"
            name="description"
            id="programDesc"
          />
        </FormGroup>
        <FormGroup className="border p-1">
          <ExerciseList
            addExercise={addExercise}
            exercises={exercises}
            saveValue={saveValue}
          />
        </FormGroup>
        <FormGroup>
          <Button>Tallenna</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default NewProgram;
