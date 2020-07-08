import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProgramsDropdown from "../components/ProgramsDropdown";
import Axios from "../api/Axios";
import ExerciseDataList from "../components/ExerciseDataList";

const Statistics = () => {
  const [selectedProgram, setProgram] = useState({});
  const [page, setPage] = useState(1);
  const [programArray, setProgramArray] = useState([]);

  useEffect(() => {
    Axios.get("/programs/")
      .then((result) => {
        console.log(result);
        setProgramArray(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  const handleSelect = (program) => {
    console.log(program);
    setProgram(program);
  };

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col className="mb-3">
            <h2>Tilastot</h2>
          </Col>
        </Row>

        <ProgramsDropdown
          programArray={programArray}
          handleSelect={handleSelect}
        />

        <ExerciseDataList exercises={selectedProgram.exercises} />
      </Container>
    </div>
  );
};

export default Statistics;
