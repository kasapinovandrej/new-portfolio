import React, { useState } from "react";
import classes from "./work-gallery.module.scss";
import Title from "../Title/title";
import Button from "../Button/button";

const WorkGallery = (props) => {
  const [sort, setSort] = useState(false);
  const [filteredData, setFilteredData] = useState(props.data);
  const [all, setAll] = useState(true);
  const [learning, setLearning] = useState(false);
  const [doing, setDoing] = useState(false);
  console.log(all, learning, doing, sort);

  let data;

  if (all) {
    data = props.data;
  }
  if (learning) {
    data = props.data.filter((el) => el.mine === false);
  }
  if (doing) {
    data = props.data.filter((el) => el.mine === true);
  }

  console.log(data);

  return (
    <section className={classes.work}>
      <Title firstWord="Work" secondWord="Gallery" />
      <div className={classes.buttonbox}>
        {/* <Button
          type="filter"
          function={() => {
            setAll(true);
            setLearning(false);
            setDoing(false);
          }}
          name="All Projects"
        />
        <Button
          type="filter"
          function={() => {
            setAll(false);
            setLearning(true);
            setDoing(false);
          }}
          name="Done While Learning"
        />
        <Button
          type="filter"
          function={() => {
            setAll(false);
            setLearning(false);
            setDoing(true);
          }}
          name="Learn By Doing"
        />
        <Button
          type="filter"
          name={`Sort ${sort ? "Newest" : "Oldest"} `}
          function={() => setSort(!sort)}
        /> */}
      </div>
    </section>
  );
};

export default WorkGallery;
