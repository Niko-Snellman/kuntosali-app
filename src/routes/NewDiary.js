import React, { useState, useEffect } from "react";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";
import axios from "../api/Axios";
import DiaryExerciseList from "../components/DiaryExerciseList";
import ProgramsDropdown from "../components/ProgramsDropdown";

const NewDiary = () => {
  const currentDate = new Date().toISOString().substr(0, 10);
  const [programArray, setProgramArray] = useState([]);
  const [page, setPage] = useState(1);
  const [program, setProgram] = useState({});
  const [diaryExercises, setDiaryExercises] = useState([]);
  const [completionDate, setCompletionDate] = useState(currentDate);

  //Haetaan kaikki ohjelmat rajapinnasta
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

  //Tallennetaan kaikki ohjelman valitut suoritukset rajapintaan
  const saveDiary = (event) => {
    event.preventDefault();
    console.log(completionDate);
    if (program.exercises) {
      const selectedExercises = diaryExercises.filter((e) => e.checked);

      if (selectedExercises && selectedExercises.length >= 1) {
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
      } else {
        alert("Valitse ainakin yksi liike");
      }
    } else {
      alert("Valitse ohjelma");
    }
  };

  //Päivitetään suorituksen data stateen
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

  //Valitaan ohjelma dropdown listasta stateen
  const handleSelect = (program) => {
    console.log(program.exercises);
    setProgram(program);
  };

  return (
    <div>
      <h3>Lisää päiväkirjamerkintä</h3>
      <Form onSubmit={saveDiary}>
        <FormGroup className="border p-1">
          <Label for="diaryDate">Päivämäärä</Label>
          <Input
            onChange={handleDateChange}
            type="date"
            name="date"
            id="diaryDate"
            defaultValue={currentDate}
            required
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
          <Button>Tallenna</Button>
        </FormGroup>
      </Form>
    </div>
  );
};

export default NewDiary;
