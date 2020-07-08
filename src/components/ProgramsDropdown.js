import React, { useState } from "react";
import { Dropdown, DropdownToggle, DropdownMenu } from "reactstrap";
import ProgramOptionItem from "./ProgramOptionItem";

const ProgramsDropdown = (props) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);

  const handleSelect = (program) => {
    props.handleSelect(program);
  };

  return (
    <Dropdown isOpen={dropdownOpen} toggle={toggle}>
      <DropdownToggle caret>Ohjelmat</DropdownToggle>
      <DropdownMenu>
        {props.programArray.map((p) => (
          <ProgramOptionItem
            program={p}
            key={p._id}
            itemSelect={handleSelect}
          />
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default ProgramsDropdown;
