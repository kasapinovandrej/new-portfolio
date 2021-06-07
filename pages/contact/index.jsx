import React from "react";
import SubpageHero from "../../components/Subpage-hero/subpage-hero";
import Contact from "../../components/Contact/contact";
import Head from "next/head";

const contact = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Send me your messages!" />
        <title>Andrej Kasapinov - Contact Me</title>
      </Head>
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
