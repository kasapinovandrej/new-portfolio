import React from "react";
import classes from "./select.module.scss";

const select = (props) => {
  return (
    <div className={classes.select}>
      <select onChange={props.function}>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
      </select>
    </div>
  );
};

export default select;
