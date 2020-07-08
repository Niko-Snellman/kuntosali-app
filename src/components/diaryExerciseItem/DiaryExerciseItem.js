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
  const diaryExerciseDefault = {
    checked: false,
    sets: "",
    reps: "",
    weights: "",
  };
  const [checked, setChecked] = useState(false);
  const [reps, setReps] = useState("");
  const [sets, setSets] = useState("");
  const [weights, setWeights] = useState("");
  const [diaryExercise, setDiaryExercise] = useState(diaryExerciseDefault);
  const exercise = props.exercise;

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
                  placeholder="Toistot"
                  type="number"
                  name="reps"
                  id="reps"
                  onChange={handleValueChange}
                  min="0"
                />
              </Col>
              <Col md={4}>
                <Input
                  placeholder="Sarjat"
                  type="number"
                  name="sets"
                  id="sets"
                  onChange={handleValueChange}
                  min="0"
                />
              </Col>
              <Col md={4}>
                <Input
                  placeholder="Painot(Kg)"
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
