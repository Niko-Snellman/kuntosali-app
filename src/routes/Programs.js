import React, { useState } from "react";
import { Button, Container, Row, Col } from "reactstrap";
import { Route, useHistory } from "react-router-dom";
import NewProgram from "./NewProgram";
import ProgramsList from "./ProgramsList";

const Programs = (props) => {
  const [showList, setShowList] = useState(false);
  const history = useHistory();
  const programsPath = "/kuntosali-app/ohjelmat";
  const newProgramPath = "/kuntosali-app/ohjelmat/uusi";

  const createNewClick = () => {
    setShowList(!showList);
    if (showList) {
      history.push(programsPath);
    } else {
      history.push(newProgramPath);
    }
  };

  const buttonText = () => {
    if (!showList) {
      return "Luo uusi";
    } else {
      return "Peruuta";
    }
  };

  if (props.location.pathname === newProgramPath && !showList) {
    setShowList(true);
  }

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col className="mb-3">
            <h2>Ohjelmat2</h2>

            <Button onClick={createNewClick}>{buttonText()}</Button>
          </Col>
        </Row>

        <Route exact path={newProgramPath} component={NewProgram} />
        <Route exact path={programsPath} component={ProgramsList} />
      </Container>
    </div>
  );
};

export default Programs;
