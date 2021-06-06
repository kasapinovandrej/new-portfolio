import React, { useState } from "react";
import classes from "./work-gallery.module.scss";
import Title from "../Title/title";
import Button from "../Button/button";
import TabbedButtons from "../Tabbed-buttons/tabbed-buttons";
import GalleryCard from "../Gallery-card/gallery-card";
import Select from "../Select/select";

const WorkGallery = (props) => {
  const [sort, setSort] = useState("new");
  const [filteredData, setFilteredData] = useState(props.data);
  const [currentButton, setCurrentButton] = useState(0);
  console.log(sort);

  const activeButtonHandler = (e) => {
    setCurrentButton(e);
    if (e === 0) {
      setFilteredData(props.data);
    }
    if (e === 1) {
      setFilteredData(props.data.filter((el) => el.mine === false));
    }
    if (e === 2) {
      setFilteredData(props.data.filter((el) => el.mine === true));
    }
  };

  // const sortedData = filteredData.sort((el1, el2) => {
  //   console.log(el1.id.slice(1), el2.id.slice(1));
  // (a,b) => a-b
  // // });
  // const sortedData = filteredData.sort((a, b) =>
  //   a.id.slice(1) > b.id.slice(1) ? 1 : b.id.slice(1) > a.id.slice(1) ? -1 : 0
  // );

  // const sortedData = filteredData.filter()

  const tabbedButtons = [
    { id: 0, title: "All Projects" },
    { id: 1, title: "Done While Learning" },
    { id: 2, title: "My Projects" },
  ];
  return (
    <section className={classes.work}>
      <Title firstWord="Work" secondWord="Gallery" />
      <TabbedButtons
        buttons={tabbedButtons}
        type="gallery"
        buttonHandler={activeButtonHandler}
        currentButton={currentButton}
      />
      <div className={classes.cardbox}>
        <Select function={(e) => setSort(e.target.value)} />
        {filteredData.map((el, i) => (
          <GalleryCard data={el} key={el.id} index={i} />
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
