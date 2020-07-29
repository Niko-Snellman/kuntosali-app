import React, { useEffect, useState } from "react";
import { ListGroup } from "reactstrap";
import Axios from "../api/Axios";
import DiaryItem from "./DiaryItem";

const DiaryList = () => {
  const [programDiary, setDiaryArray] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    Axios.get("/diary/")
      .then((result) => {
        console.log(result);
        const filteredData = filterDuplicates(result.data, "createdAt");
        setDiaryArray(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [page]);

  //Suodatetaan kaikki duplikaatit
  function filterDuplicates(arr, comp) {
    const unique = arr
      .map((e) => e[comp])
      .map((e, i, final) => final.indexOf(e) === i && i)
      .filter((e) => arr[e])
      .map((e) => arr[e]);

    return unique;
  }

  return (
    <ListGroup>
      {programDiary.map((d) => (
        <DiaryItem key={d._id} diary={d} />
      ))}
    </ListGroup>
  );
};

export default DiaryList;
