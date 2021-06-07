import Hero from "../components/Hero/hero";
import About from "../components/About/about";
import Technologies from "../components/Technologies/technologies";
import LearningResources from "../components/Learning-resources/learning-resources";
import { getData } from "../helper/get-data";
import PreviousExperience from "../components/Previous-experience/previous-experience";
import Testimonies from "../components/Testimonies/testimonies";
import Head from "next/head";

const Home = (props) => {
  return (
    <>
      <Head>
        <meta
          name="description"
          content="I am Andrei Kasapinov, self-taught software and web developer. The technologies I use are: html, css, scss, javascript, react, next.js and many more..."
        />
        <title>Andrej Kasapinov - Portfolio</title>
      </Head>
      <Hero />
      <About />
      <Technologies />
      <LearningResources learningData={props.data.learningFrom} />
      <PreviousExperience expData={props.data.jobs} />
      <Testimonies testimonies={props.data.testimonies} />
    </>
  );
};

export const getStaticProps = async () => {
  const data = await getData("my-data.json");
  return {
    props: { data },
  };
};

export default Home;
