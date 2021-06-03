import React from "react";
import classes from "./button.module.scss";
import { motion } from "framer-motion";
import { IoEnterOutline } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";

const Button = (props) => {
  return (
    <motion.button
      onClick={props.function}
      className={`${classes.button} ${classes[props.type]}`}
      whileHover={{
        scale: 1.1,
        border: "1px solid #ff6225",
        color: "#ff6225",
      }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.2 }}
    >
      <span>
        {props.name}
        {props.enterIcon ? <IoEnterOutline /> : null}
        {props.close ? <IoMdClose /> : null}
      </span>
    </motion.button>
  );
};

export default Button;
