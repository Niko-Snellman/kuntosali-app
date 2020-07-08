import React from "react";
import { ListGroupItem } from "reactstrap";

const DiaryItem = (props) => {
  const diary = props.diary;

  return (
    <ListGroupItem>
      {/*<p>{diary.programId.name}</p>
      <p>{diary.completionDate.substr(0, 10)}</p>*/}
    </ListGroupItem>
  );
};

export default DiaryItem;
