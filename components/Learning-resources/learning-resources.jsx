import React from "react";
import Title from "../Title/title";
import ResourceSwiper from "../ResourceSwiper/resource-swiper";
import classes from "./learning-resources.module.scss";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { animateSection } from "../../helper/animate";

const LearningResources = ({ learningData }) => {
  const { ref, inView } = useInView();
  const animate = animateSection(inView);
  return (
    <motion.section className={classes.learning} ref={ref} animate={animate}>
      <Title firstWord="Learning" secondWord="Resource" />
      <div className={classes.swiperbox}>
        <ResourceSwiper learningData={learningData} />
      </div>
    </motion.section>
  );
};

export default LearningResources;
