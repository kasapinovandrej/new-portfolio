import React from "react";
import Title from "../Title/title";
import ResourceSwiper from "../ResourceSwiper/resource-swiper";
import classes from "./learning-resources.module.scss";

const LearningResources = ({ learningData }) => {
  return (
    <section className={classes.learning}>
      <Title firstWord="Learning" secondWord="Resource" />
      <div className={classes.swiperbox}>
        <ResourceSwiper learningData={learningData} />
      </div>
    </section>
  );
};

export default LearningResources;
