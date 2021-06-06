import React from "react";
import SubpageHero from "../../components/Subpage-hero/subpage-hero";
import WorkGallery from "../../components/Work-gallery/work-gallery";
import { getData } from "../../helper/get-data";

const projects = (props) => {
  return (
    <>
      <SubpageHero
        title="Portfolio"
        leftImage="/images/subpage/gallery.png"
        rightImage="/images/subpage/gallery1.png"
      />
      <WorkGallery data={props.projects} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData("portfolio.json");
  return {
    props: data,
  };
};

export default projects;
