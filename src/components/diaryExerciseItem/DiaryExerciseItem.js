import React, { useState } from "react";
import {
  ListGroupItem,
  Row,
  Col,
  Label,
  Input,
  CustomInput,
  Container,
} from "reactstrap";
import "./DiaryExerciseItem.css";

const DiaryExerciseItem = (props) => {
  //Oletusarvo tyhjälle harjoitukselle
  const diaryExerciseDefault = {
    checked: false,
    sets: "",
    reps: "",
    weights: "",
  };

  const [diaryExercise, setDiaryExercise] = useState(diaryExerciseDefault);
  const exercise = props.exercise;

  //Järjestää harjoituksen suoritukset päivämäärän mukaan suuresta pienimpään.
  const sortDataByDate = (exerciseData) => {
    return exerciseData.sort((a, b) => {
      const c = new Date(a.completionDate);
      const d = new Date(b.completionDate);
      return d - c;
    });
  };

  //Asettaa placeholderin sarjojen kenttään. Sarjat tekstin jälkeen tulee viimeksi suoritetun harjoituksen sarjat tai harjoitukselle asetetut sarjat.
  const setsPlaceholder = () => {
    let placeholder = "";

    const exerciseData = exercise.exerciseData;

    if (exerciseData && exerciseData.length > 0) {
      const sortedData = sortDataByDate(exerciseData);

      const sets = sortedData[0].sets;

      if (sets) {
        placeholder = "Sarjat (" + sets + ")";
      } else if (exercise.sets) {
        placeholder = "Sarjat (" + exercise.sets + ")";
      } else {
        placeholder = "Sarjat";
      }
    } else if (exercise.sets) {
      placeholder = "Sarjat (" + exercise.sets + ")";
    } else {
      placeholder = "Sarjat";
    }

    return placeholder;
  };

  //Asettaa placeholderin toistojen kenttään. Toistot tekstin jälkeen tulee viimeksi suoritetun harjoituksen toistot tai harjoitukselle asetetut toistot.
  const repsPlaceholder = () => {
    let placeholder = "";

    const exerciseData = exercise.exerciseData;

    if (exerciseData && exerciseData.length > 0) {
      const sortedData = sortDataByDate(exerciseData);

      const reps = sortedData[0].reps;

      if (reps) {
        placeholder = "Toistot (" + reps + ")";
      } else if (exercise.reps) {
        placeholder = "Toistot (" + exercise.reps + ")";
      } else {
        placeholder = "Toistot";
      }
    } else if (exercise.reps) {
      placeholder = "Toistot (" + exercise.reps + ")";
    } else {
      placeholder = "Toistot";
    }

    return placeholder;
  };

  //Asettaa placeholderin painon kenttään. Painot tekstin jälkeen tulee viimeksi suoritetun harjoituksen painot tai harjoitukselle asetetut painot.
  const weightsPlaceholder = () => {
    let placeholder = "";

    const exerciseData = exercise.exerciseData;

    if (exerciseData && exerciseData.length > 0) {
      const sortedData = sortDataByDate(exerciseData);

      const weights = sortedData[0].weights;

      if (weights) {
        placeholder = "Painot (" + weights + " Kg)";
      } else if (exercise.weights) {
        placeholder = "Painot (" + exercise.weights + "Kg)";
      } else {
        placeholder = "Painot (Kg)";
      }
    } else if (exercise.weights) {
      placeholder = "Painot (" + exercise.weights + " Kg)";
    } else {
      placeholder = "Painot (Kg)";
    }

    return placeholder;
  };

  //Jos komponentin kentän arvo vaihtuu niin asetetaan uusi arvo stateen.
  const handleValueChange = (e) => {
    const temp = diaryExercise;
    temp.id = exercise._id;

    switch (e.target.id) {
      case "sets":
        temp.sets = e.target.value;
        break;
      case "reps":
        temp.reps = e.target.value;
        break;
      case "weight":
        temp.weights = e.target.value;
        break;
      case exercise._id:
        temp.checked = e.target.checked;
        break;
      default:
        break;
    }
    setDiaryExercise(temp);

    props.updateDiaryExercises(temp);
  };

  return (
    <ListGroupItem>
      <Container>
        <Row>
          <Col md={1} className="align-self-center mb-3">
            <CustomInput
              type="checkbox"
              id={exercise._id}
              onChange={handleValueChange}
            />
          </Col>
          <Col>
            <Row>
              <Col>
                <Label for="liikeName">{exercise.name}</Label>
              </Col>
            </Row>
            <Row>
              <Col md={4}>
                <Input
                  placeholder={repsPlaceholder()}
                  type="number"
                  name="reps"
                  id="reps"
                  onChange={handleValueChange}
                  min="0"
                />
              </Col>
              <Col md={4}>
                <Input
                  placeholder={setsPlaceholder()}
                  type="number"
                  name="sets"
                  id="sets"
                  onChange={handleValueChange}
                  min="0"
                />
              </Col>
              <Col md={4}>
                <Input
                  placeholder={weightsPlaceholder()}
                  type="number"
                  name="weight"
                  id="weight"
                  onChange={handleValueChange}
                  min="0"
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </ListGroupItem>
  );
};

export default DiaryExerciseItem;
