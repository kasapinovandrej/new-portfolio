import React, { useState } from "react";
import classes from "./work-gallery.module.scss";
import Title from "../Title/title";
import TabbedButtons from "../Tabbed-buttons/tabbed-buttons";
import GalleryCard from "../Gallery-card/gallery-card";
import Select from "../Select/select";

const WorkGallery = (props) => {
  const [sort, setSort] = useState("new");
  const [filteredData, setFilteredData] = useState(props.data);
  const [currentButton, setCurrentButton] = useState(0);

  const doneWhileLearning = 1;
  const myProjects = 2;

  const activeButtonHandler = (e) => {
    setCurrentButton(e);
    if (e === 0) setFilteredData(props.data);
    if (e === 1)
      setFilteredData(props.data.filter((el) => el.type === doneWhileLearning));
    if (e === 2)
      setFilteredData(props.data.filter((el) => el.type === myProjects));
  };
  if (sort === "new") filteredData.sort((a, b) => b.id - a.id);
  if (sort === "old") filteredData.sort((a, b) => a.id - b.id);

  const tabbedButtons = [
    { id: 0, title: "All Projects" },
    { id: 1, title: "Done While Learning" },
    { id: 2, title: "My Projects" },
  ];
  return (
    <section className={classes.work}>
      <Title firstWord="Work" secondWord="Gallery" />
      <div className={classes.buttonsbox}>
        <TabbedButtons
          buttons={tabbedButtons}
          type="gallery"
          buttonHandler={activeButtonHandler}
          currentButton={currentButton}
        />
        <Select function={(e) => setSort(e.target.value)} />
      </div>
      <div className={classes.cardbox}>
        {filteredData.map((el, i) => (
          <GalleryCard data={el} key={el.id} index={i} />
        ))}
      </div>
    </section>
  );
};

export default WorkGallery;
