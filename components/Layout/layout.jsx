import React from "react";
import classes from "./layout.module.scss";
import Nav from "./navligation/nav";
import Footer from "./footer/footer";
import Links from "../Links/links";

const Layout = (props) => {
  return (
    <div className={classes.layout}>
      <Nav />
      <Links type="fixed"/>
      <div className={classes.children}>{props.children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
