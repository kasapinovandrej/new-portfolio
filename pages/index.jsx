import Hero from "../components/Hero/hero";
import About from "../components/About/about";
import Technologies from "../components/Technologies/technologies";
import LearningResources from "../components/Learning-resources/learning-resources";
import { getData } from "../helper/get-data";
import PreviousExperience from "../components/Previous-experience/previous-experience";
import Testimonies from "../components/Testimonies/testimonies";

const Home = (props) => {
  return (
    <>
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
