import React from "react";
import Image from "next/image";
import classes from "./subpage-hero.module.scss";

const SubpageHero = ({ title, leftImage, rightImage }) => {
  return (
    <header className={classes.hero}>
      <Image src={leftImage} alt="leftImage" width={480} height={300} />
      <h1>{title}</h1>
      <Image src={rightImage} alt="rightImage" width={480} height={300} />
    </header>
  );
};

export default SubpageHero;
