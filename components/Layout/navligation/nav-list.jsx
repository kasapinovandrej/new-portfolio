import React from "react";
import Link from "next/link";
import classes from "./nav-list.module.scss";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const NavList = (props) => {
  const router = useRouter();

  if (props.type === "mobile") {
    return (
      <motion.ul
        className={classes.mobile}
        initial={{ x: "50%", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: "50%", opacity: 0 }}
        transition={{ duration: 0.2, ease: "linear" }}
      >
        <li
          className={router.pathname === "/" ? classes.active : null}
          onClick={props.function}
        >
          <Link href="/">
            <a className={classes.link}>Home</a>
          </Link>
        </li>
        <li
          className={router.pathname === "/projects" ? classes.active : null}
          onClick={props.function}
        >
          <Link href="/projects">
            <a className={classes.link}>Projects</a>
          </Link>
        </li>
        <li
          className={router.pathname === "/contact" ? classes.active : null}
          onClick={props.function}
        >
          <Link href="/contact">
            <a className={classes.link}>Contact</a>
          </Link>
        </li>
      </motion.ul>
    );
  }

  return (
    <ul className={classes.list}>
      <li className={router.pathname === "/" ? classes.active : null}>
        <Link href="/">Home</Link>
      </li>
      <li className={router.pathname === "/projects" ? classes.active : null}>
        <Link href="/projects">Projects</Link>
      </li>
      <li className={router.pathname === "/contact" ? classes.active : null}>
        <Link href="/contact">Contact</Link>
      </li>
    </ul>
  );
};

export default NavList;
