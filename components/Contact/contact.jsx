import React from "react";
import Title from "../Title/title";
import classes from "./contact.module.scss";
import Form from "./Form/form";
import Image from "next/image";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className={classes.contact}>
      <Title firstWord="Let's" secondWord="Connect" />
      <h5>
        Thank you for taking the time to review my portfolio. If you have any
        question or suggestion, please send me a message
      </h5>
      <motion.div
        className={classes.formbox}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      >
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
      </motion.div>
    </section>
  );
};

export default Contact;
