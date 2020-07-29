import React, { useState, useEffect } from "react";
import { Row } from "reactstrap";
import ProgramItem from "../components/programItem/ProgramItem";
import axios from "../api/Axios";

const ProgramsList = () => {
  const [programArray, setProgramArray] = useState([]);
  const [page, setPage] = useState(1);

  //Hakee kaikki ohjelmat rajapinnasta
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

  //Poistaa ohjelman statesta id:n perusteella
  const removeItem = (id) => {
    const programs = programArray;

    setProgramArray(programs.filter((p) => p._id !== id));
  };

  return (
    <Row>
      {programArray.map((p) => (
        <ProgramItem
          key={p._id}
          name={p.name}
          desc={p.desc}
          id={p._id}
          removeItem={removeItem}
        />
      ))}
    </Row>
  );
};

export default ProgramsList;
