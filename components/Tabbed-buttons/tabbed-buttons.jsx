import React from "react";
import classes from "./tabbed-buttons.module.scss";
const TabbedButtons = ({ type, buttons, currentButton, buttonHandler }) => {
  return (
    <nav className={classes[type]}>
      {buttons.map((el) => (
        <li
          onClick={() => buttonHandler(el.id)}
          key={el.id}
          className={currentButton === el.id ? classes.active : null}
        >
          {el.title}
        </li>
      ))}
    </nav>
  );
};

export default TabbedButtons;
