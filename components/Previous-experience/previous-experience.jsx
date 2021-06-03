import React, { useState } from "react";
import Title from "../Title/title";
import classes from "./previous-experience.module.scss";
import Image from "next/image";

const PreviousExperience = ({ expData }) => {
  const [currentButton, setCurrentButton] = useState("j0");
  const slideNo = +currentButton.slice(1);
  const currentButtonHandler = (id) => {
    setCurrentButton(id);
  };

  return (
    <section className={classes.prevexp}>
      <Title firstWord="Previous" secondWord="Experience" />
      <div className={classes.box}>
        <nav className={classes.nav}>
          {expData.map((el) => (
            <li
              onClick={() => currentButtonHandler(el.id)}
              key={el.id}
              className={currentButton === el.id ? classes.active : null}
            >
              {el.company}
            </li>
          ))}
        </nav>
        <div className={classes.textbox}>
          <div className={classes.image}>
            <Image src={expData[slideNo].image} alt={expData[slideNo].company} width={150} height={200} />
          </div>
          <div className={classes.text}>
            <h5>Company:</h5>
            <p>{expData[slideNo].company}</p>
            <h5>Position:</h5>
            <p>{expData[slideNo].position}</p>
            <h5>Description:</h5>
            <p>{expData[slideNo].description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PreviousExperience;
