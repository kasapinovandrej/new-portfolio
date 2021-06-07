import React from "react";
import SubpageHero from "../../components/Subpage-hero/subpage-hero";
import WorkGallery from "../../components/Work-gallery/work-gallery";
import { getData } from "../../helper/get-data";
import Head from "next/head";

const projects = (props) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="A list of all projects i build in the past"
        />
        <title>Andrej Kasapinov - Projects</title>
      </Head>
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
