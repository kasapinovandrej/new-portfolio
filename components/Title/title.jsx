import React from "react";
import classes from "./title.module.scss";

const title = (props) => (
  <h2 className={classes.title}>
    {props.firstWord}
    <span className={classes.span}>{props.secondWord}</span>
  </h2>
);

export default title;
