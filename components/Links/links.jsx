import React from "react";
import classes from "./links.module.scss";
import {
  ImFacebook2,
  ImPhone,
  ImInstagram,
  ImMail,
  ImLinkedin,
  ImGithub,
} from "react-icons/im";
import { motion } from "framer-motion";

const linkHover = {
  hover: {
    scale: 1.2,
    color: "#ff6225",
  },
};

const Links = (props) => {
  return (
    <div className={classes[props.type]}>
      <motion.a
        href="tel:063/78-28-541"
        whileHover="hover"
        variants={linkHover}
      >
        <ImPhone />
      </motion.a>
      <motion.a
        href="mailto:kasapinovandrej@gmail.com"
        whileHover="hover"
        variants={linkHover}
      >
        <ImMail />
      </motion.a>
      <motion.a
        target="_blank"
        href="https://www.facebook.com/andrej.kasapinov"
        whileHover="hover"
        variants={linkHover}
      >
        <ImFacebook2 />
      </motion.a>
      <motion.a
        target="_blank"
        href="https://www.instagram.com/andrej.kasapinov/"
        whileHover="hover"
        variants={linkHover}
      >
        <ImInstagram />
      </motion.a>
      <motion.a
        target="_blank"
        href="https://www.linkedin.com/in/andrej-kasapinov-19132427/"
        whileHover="hover"
        variants={linkHover}
      >
        <ImLinkedin />
      </motion.a>
      <motion.a
        target="_blank"
        href="https://github.com/kasapinovandrej"
        whileHover="hover"
        variants={linkHover}
      >
        <ImGithub />
      </motion.a>
    </div>
  );
};

export default Links;
