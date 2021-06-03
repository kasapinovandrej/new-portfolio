import React from "react";
import classes from "./layout.module.scss";
import Nav from "./navligation/nav";
import Footer from "./footer/footer";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Nav />
      <div className={classes.children}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
