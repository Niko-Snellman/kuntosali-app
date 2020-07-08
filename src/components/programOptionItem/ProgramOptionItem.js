import React from "react";
import { DropdownItem } from "reactstrap";

const ProgramOptionItem = (props) => {
  const program = props.program;

  const handleSelect = () => {
    props.itemSelect(program);
  };

  return (
    <DropdownItem onClick={handleSelect}>
      <p>{program.name}</p>
    </DropdownItem>
  );
};

export default ProgramOptionItem;
