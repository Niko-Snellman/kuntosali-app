import React from "react";
import { Chart } from "react-charts";

const ExerciseDataItem = (props) => {
  const exercise = props.exercise;
  const exerciseData = exercise.exerciseData;

  const repData = [];
  const setData = [];
  const weightData = [];

  exerciseData.forEach((data) => {
    const dateTime = Date.parse(data.completionDate);

    repData.push({ x: dateTime, y: data.reps });
    setData.push({ x: dateTime, y: data.sets });
    weightData.push({ x: dateTime, y: data.weights });
  });

  const data = React.useMemo(
    () => [
      {
        label: "Toistot",
        data: repData,
      },
      {
        label: "Sarjat",
        data: setData,
      },
      {
        label: "Painot",
        data: weightData,
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "time", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );

  return (
    <div className="mt-3">
      <p className="font-weight-bold">{exercise.name}</p>
      <div
        style={{
          width: "100%",
          height: "200px",
        }}
      >
        <Chart data={data} axes={axes} tooltip />
      </div>
    </div>
  );
};

export default ExerciseDataItem;
