import React, { useState } from "react";
import NavList from "./nav-list";
import Modal from "../../Modal/modal";
import ToggleButton from "../toggle-button/toggle-button";
import classes from "./nav.module.scss";
import { AnimatePresence } from "framer-motion";
import Logo from "../../Logo/logo";

const Nav = () => {
  const [toggleButton, setToggleButton] = useState(false);
  const toggleButtonHandler = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <nav className={classes.nav}>
      <Logo type="nav" />
      <NavList />
      <ToggleButton function={toggleButtonHandler} current={toggleButton} />
      <AnimatePresence>
        {toggleButton && (
          <Modal function={toggleButtonHandler}>
            <NavList type="mobile" function={toggleButtonHandler} />
          </Modal>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
