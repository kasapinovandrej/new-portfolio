import React from "react";
import classes from "./footer.module.scss";
import Logo from "../../Logo/logo";

const footer = () => {
  return (
    <footer className={classes.footer}>
      <Logo type="footer" />
    </footer>
  );
};

export default footer;
