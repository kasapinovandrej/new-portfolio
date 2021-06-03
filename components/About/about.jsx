import React from "react";
import classes from "./about.module.scss";
import Title from "../Title/title";

const about = () => {
  return (
    <section className={classes.about}>
      <Title firstWord="About" secondWord="Me" />
      <div className={classes.textbox}>
        <p>
          By formal education i am graduated economist. In previos years i
          worked as an accountant, sales representative, and sales team
          supervisor. Coding was initially just a hobby for me, but it grew into
          a great passion and desire to make it my primary occupation.
        </p>
        <h5>...Guided by the famous quote:</h5>
        <h3>
          Choose a job you love, and you will never have to work a day in your
          life...
        </h3>
        {/* <h5>
          I invested a lot of time and energy to master the tools needed for
          front end web development.
        </h5> */}
      </div>
    </section>
  );
};

export default about;
