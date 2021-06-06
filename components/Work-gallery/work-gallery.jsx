import React, { useState } from "react";
import classes from "./work-gallery.module.scss";
import Title from "../Title/title";
import Button from "../Button/button";
import TabbedButtons from "../Tabbed-buttons/tabbed-buttons";
import GalleryCard from "../Gallery-card/gallery-card";

const WorkGallery = (props) => {
  const [sort, setSort] = useState(false);
  const [filteredData, setFilteredData] = useState(props.data);
  const [currentButton, setCurrentButton] = useState(0);
  console.log(currentButton);
  console.log(filteredData);

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
  const dummyData = {
    id: "p17",
    title: "Next Events",
    git: "https://github.com/kasapinovandrej/NextEvents",
    code: "https://github1s.com/kasapinovandrej/NextEvents",
    link: "https://blog-project-kasapinovandrej.vercel.app/",
    description:
      "While making this blog, I saw all the possibilities offered by Nextjs, and at the same time it was my first encounter with mongodb.",
    tech: "NextJS",
    image: "/images/projects/blog.jpg",
    mine: false,
  };
  const tabbedButtons = [
    { id: 0, title: "All Projects" },
    { id: 1, title: "Done While Learning" },
    { id: 2, title: "Learn By Doing" },
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
      {filteredData.map((el, i) => (
        <GalleryCard data={el} key={el.id} index={i} />
      ))}
    </section>
  );
};

export default WorkGallery;
