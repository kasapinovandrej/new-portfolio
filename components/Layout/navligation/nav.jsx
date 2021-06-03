import React, { useState } from "react";
import Image from "next/image";
import NavList from "./nav-list";
import Modal from "../../Modal/modal";
import ToggleButton from "../toggle-button/toggle-button";
import classes from "./nav.module.scss";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";

const Nav = (props) => {
  const [toggleButton, setToggleButton] = useState(false);
  const router = useRouter();
  const toggleButtonHandler = () => {
    setToggleButton(!toggleButton);
  };
  return (
    <nav className={classes.nav}>
      <div className={classes.logobox} onClick={() => router.push("/")}>
        <Image src="/images/Logo-svg.svg" width={100} height={50} />
      </div>
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
