import React from "react";
import { Checkbox } from "@material-ui/core";
import "./FilterationItem.css";

function FilterationItem({ name, checked, handleChange }) {
  return (
    <div className="Checkbox-Container" id={name}>
      <Checkbox checked={checked} onChange={handleChange} name={name} />
      <p>{name}</p>
    </div>
  );
}

export default FilterationItem;
