import React from "react";
import SubpageHero from "../../components/Subpage-hero/subpage-hero";
import Contact from "../../components/Contact/contact";

const contact = () => {
  return (
    <>
      <SubpageHero
        title="Contact"
        leftImage="/images/subpage/contact.png"
        rightImage="/images/subpage/contact1.png"
      />
      <Contact />
    </>
  );
};

export default contact;
