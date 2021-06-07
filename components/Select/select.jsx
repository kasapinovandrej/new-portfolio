import React from "react";
import classes from "./select.module.scss";

const select = (props) => {
  return (
    <div className={classes.selectbox}>
      <select onChange={props.function} className={classes.select}>
        <option value="new">Newest</option>
        <option value="old">Oldest</option>
      </select>
    </div>
  );
};

export default select;
