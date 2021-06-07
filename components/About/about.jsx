import React, { useEffect } from "react";
import classes from "./about.module.scss";
import Title from "../Title/title";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animateSection } from "../../helper/animate";

const about = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = animateSection(inView);

  return (
    <motion.section ref={ref} className={classes.about} animate={animation}>
      <Title firstWord="About" secondWord="Me" />
      <div className={classes.textbox}>
        <p>
          By formal education I am graduated economist. In previos years I
          worked as an accountant, sales representative, and sales team
          supervisor. Coding was initially just a hobby for me, but it grew into
          a great passion and desire to make it my primary occupation.
        </p>
        <h5>...Guided by the famous quote:</h5>
        <h3>
          Choose a job you love, and you will never have to work a day in your
          life...
        </h3>
      </div>
    </motion.section>
  );
};

export default about;
