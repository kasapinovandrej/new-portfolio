import React from "react";
import classes from "./modal.module.scss";

const Modal = (props) => {
  return (
    <div className={classes.modal}>
      <div className={`${classes.backdrop} ${classes[props.type]}`} onClick={props.function}></div>
      {props.children}
    </div>
  );
};

export default Modal;
