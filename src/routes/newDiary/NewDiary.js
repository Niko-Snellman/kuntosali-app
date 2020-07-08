import React, { useState, useEffect } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import axios from "../../api/Axios";
import DiaryExerciseList from "../../components/diaryExerciseList/DiaryExerciseList";
import ProgramsDropdown from "../../components/programsDropdown/ProgramsDropdown";

const NewDiary = (props) => {
  const currentDate = new Date().toISOString().substr(0, 10);
  const [programArray, setProgramArray] = useState([]);
  const [page, setPage] = useState(1);
  const [program, setProgram] = useState({});
  const [diaryExercises, setDiaryExercises] = useState([]);
  const [completionDate, setCompletionDate] = useState(currentDate);

  useEffect(() => {
    axios
      .get("/programs/")
      .then((result) => {
        console.log(result);
        setProgramArray(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleDateChange = (e) => {
    setCompletionDate(e.target.value);
  };

  const saveDiary = () => {
    const selectedExercises = diaryExercises.filter((e) => e.checked);

    program.exercises.forEach((e) => {
      const selectedExercise = selectedExercises.find((se) => {
        return se.id === e._id;
      });
      if (selectedExercise) {
        selectedExercise.completionDate = completionDate;
        delete selectedExercise.checked;
        e.exerciseData.push(selectedExercise);
      }
    });

    console.log(program);

    axios
      .post("/diary/", program)
      .then((result) => {
        console.log(result);
        alert("Päiväkirjamerkintä tallennettu!");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateDiaryExercises = (diaryExercise) => {
    const exerArray = diaryExercises;
    const index = exerArray.findIndex((e) => e.id === diaryExercise.id);

    if (index === -1) {
      exerArray.push(diaryExercise);
    } else {
      exerArray[index] = diaryExercise;
    }

    setDiaryExercises(exerArray);
  };

  const handleSelect = (program) => {
    console.log(program.exercises);
    setProgram(program);
  };

  return (
    <div>
      <h3>Lisää päiväkirjamerkintä</h3>
      <Form>
        <FormGroup className="border p-1">
          <Label for="diaryDate">Päivämäärä</Label>
          <Input
            onChange={handleDateChange}
            type="date"
            name="date"
            id="diaryDate"
            defaultValue={currentDate}
          />
        </FormGroup>
        <FormGroup>
          <ProgramsDropdown
            programArray={programArray}
            handleSelect={handleSelect}
          />
        </FormGroup>
        <FormGroup>
          <DiaryExerciseList
            exercises={program.exercises}
            updateDiaryExercises={updateDiaryExercises}
          />
        </FormGroup>
        <FormGroup>
          <Button onClick={saveDiary}>Tallenna</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default NewDiary;
