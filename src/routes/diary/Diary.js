import React, { useState } from "react";
import { Route, useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import NewDiary from "../newDiary/NewDiary";
import DiaryList from "../../components/diaryList/DiaryList";

const Diary = (props) => {
  const [showList, setShowList] = useState(false);
  const history = useHistory();
  const diaryPath = "/paivakirja";
  const newDiaryPath = "/paivakirja/uusi";

  const createNewClick = () => {
    setShowList(!showList);
    if (showList) {
      history.push(diaryPath);
    } else {
      history.push(newDiaryPath);
    }
  };

  const buttonText = () => {
    if (!showList) {
      return "Luo uusi";
    } else {
      return "Peruuta";
    }
  };

  if (props.location.pathname === newDiaryPath && !showList) {
    setShowList(true);
  }

  return (
    <div>
      <Container>
        <Row>
          <Col className="mb-3">
            <h2>Diary</h2>

            <Button onClick={createNewClick}>{buttonText()}</Button>
          </Col>
        </Row>

        <Route exact path={newDiaryPath} component={NewDiary} />
        <Route exact path={diaryPath} component={DiaryList} />
      </Container>
    </div>
  );
};

export default Diary;
