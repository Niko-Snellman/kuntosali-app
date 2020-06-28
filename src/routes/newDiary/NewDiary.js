import React, { useState, useEffect } from "react";
import {
  Form,
  FormGroup,
  Button,
  Label,
  Input,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import axios from "../../api/Axios";
import ProgramOptionItem from "../../components/programOptionItem/ProgramOptionItem";
import DiaryExerciseList from "../../components/diaryExerciseList/DiaryExerciseList";

const NewDiary = (props) => {
  const currentDate = new Date().toISOString().substr(0, 10);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const [programArray, setProgramArray] = useState([]);
  const [page, setPage] = useState(1);
  const [exercises, setExercises] = useState([]);
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

    const program = programArray.find((p) => {
      const index = p.exercises.findIndex(
        (e) => e._id === selectedExercises[0].id
      );

      if (index === -1) {
        return false;
      }
      return true;
    });

    console.log(program);

    const diaryObject = {
      programId: program._id,
      exercises: selectedExercises,
      completionDate: completionDate,
    };

    axios
      .post("/diary/", diaryObject)
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

  const handleSelect = (exercises) => {
    console.log(exercises);
    setExercises(exercises);
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
          <Dropdown isOpen={dropdownOpen} toggle={toggle}>
            <DropdownToggle caret>Ohjelmat</DropdownToggle>
            <DropdownMenu>
              {programArray.map((p) => (
                <ProgramOptionItem
                  program={p}
                  key={p._id}
                  itemSelect={handleSelect}
                />
              ))}
            </DropdownMenu>
          </Dropdown>
        </FormGroup>
        <FormGroup>
          <DiaryExerciseList
            exercises={exercises}
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
