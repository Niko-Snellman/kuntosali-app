import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import NewDiary from "./NewDiary";

const Diary = (props) => {
  const [showList, setShowList] = useState(false);
  const history = useHistory();
  //const diaryPath = "/paivakirja";
  const newDiaryPath = "/paivakirja/uusi";

  /*const createNewClick = () => {
    setShowList(!showList);
    if (showList) {
      history.push(diaryPath);
    } else {
      history.push(newDiaryPath);
    }
  };*/

  /*const buttonText = () => {
    if (!showList) {
      return "Luo uusi";
    } else {
      return "Peruuta";
    }
  };*/

  if (props.location.pathname === newDiaryPath && !showList) {
    setShowList(true);
  }

  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col className="mb-3">
            <h2>Päiväkirja</h2>
          </Col>
        </Row>
        <NewDiary />
        {/*<Route exact path={newDiaryPath} component={NewDiary} />
        <Route exact path={diaryPath} component={DiaryList} />*/}
      </Container>
    </div>
  );
};

export default Diary;
