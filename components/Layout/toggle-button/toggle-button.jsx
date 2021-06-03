import React from "react";
import { VscMenu, VscChromeClose } from "react-icons/vsc";
import classes from "./toggle-button.module.scss";

const ToggleButton = (props) => {
  return (
    <button onClick={props.function} className={classes.button}>
      {props.current ? (
        <VscChromeClose className={classes.icon} />
      ) : (
        <VscMenu className={classes.icon} />
      )}
    </button>
  );
};

export default ToggleButton;
