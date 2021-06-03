import React from "react";
import Title from "../Title/title";
import classes from "./technologies.module.scss";
import {
  SiCss3,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiRedux,
  SiNextDotJs,
  SiNpm,
  SiGit,
} from "react-icons/si";
import { IoLogoSass } from "react-icons/io";
import Card from "../Card/card";
import { motion } from "framer-motion";

const technologies = [
  { id: "t0", name: "HTML", icon: <SiHtml5 /> },
  { id: "t1", name: "CSS", icon: <SiCss3 /> },
  { id: "t2", name: "SASS", icon: <IoLogoSass /> },
  { id: "t3", name: "JavaScript", icon: <SiJavascript /> },
  { id: "t4", name: "ReactJS", icon: <SiReact /> },
  { id: "t5", name: "NextJS", icon: <SiNextDotJs /> },
  { id: "t6", name: "Redux", icon: <SiRedux /> },
  { id: "t7", name: "NPM", icon: <SiNpm /> },
  { id: "t8", name: "Git", icon: <SiGit /> },
];

const childIconMotion = {
  hover: {
    y: [0, -20, 10],
    color: "#ff6225",
    transition: { duration: 0.8, yoyo: Infinity },
  },
};
const childText = {
  hover: {
    color: "#ff6225",
    letterSpacing: "3px",
    transition: { duration: 0.8, yoyo: Infinity },
  },
};

const LearningResources = () => {
  return (
    <section className={classes.technologies}>
      <Title firstWord="Technologies" secondWord="I Use" />
      <div className={classes.iconbox}>
        {technologies.map((el) => (
          <Card key={el.id}>
            <motion.div className={classes.content} whileHover="hover">
              <motion.h5 variants={childText}>{el.name}</motion.h5>
              <motion.div variants={childIconMotion}>{el.icon}</motion.div>
            </motion.div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default LearningResources;
