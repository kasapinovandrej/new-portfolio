import React from "react";
import Title from "../Title/title";
import classes from "./contact.module.scss";
import Form from "./Form/form";
import Card from "../Card/card";
import Image from "next/image";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <Title firstWord="Let's" secondWord="Connect" />
      <h5>
        Thank you for taking the time to review my portfolio. If you have any
        question or suggestion, please send me a message
      </h5>
      <div className={classes.formbox}>
        <div className={classes.image}>
          <Image
            src="/images/form.png"
            alt="Form Image"
            width={400}
            height={400}
          />
        </div>
        <div className={classes.form}>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
