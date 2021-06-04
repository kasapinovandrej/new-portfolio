import React from "react";
import classes from "./footer.module.scss";
import Logo from "../../Logo/logo";
import Links from "../../Links/links";

const footer = () => {
  return (
    <footer className={classes.footer}>
      <Logo type="footer" />
      <Links type="footer" />
      <p>&copy; Andrej Kasapinov 2021</p>
    </footer>
  );
};

export default footer;
