import React, { useState } from "react";
import Title from "../Title/title";
import classes from "./previous-experience.module.scss";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animateSection } from "../../helper/animate";
import TabbedButtons from "../Tabbed-buttons/tabbed-buttons";

const PreviousExperience = ({ expData }) => {
  const [currentButton, setCurrentButton] = useState("j0");
  const slideNo = +currentButton.slice(1);
  const currentButtonHandler = (id) => {
    setCurrentButton(id);
  };
  const { ref, inView } = useInView();
  const animate = animateSection(inView);
  return (
    <motion.section className={classes.prevexp} ref={ref} animate={animate}>
      <Title firstWord="Previous" secondWord="Experience" />
      <div className={classes.box}>
        <TabbedButtons
          type="expeience"
          buttons={expData}
          currentButton={currentButton}
          buttonHandler={currentButtonHandler}
        />
        <div className={classes.textbox}>
          <div className={classes.image}>
            <Image
              src={expData[slideNo].image}
              alt={expData[slideNo].company}
              width={150}
              height={200}
            />
          </div>
          <div className={classes.text}>
            <h5>Company:</h5>
            <p>{expData[slideNo].title}</p>
            <h5>Position:</h5>
            <p>{expData[slideNo].position}</p>
            <h5>Description:</h5>
            <p>{expData[slideNo].description}</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default PreviousExperience;
