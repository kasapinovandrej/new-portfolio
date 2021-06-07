import React, { useState } from "react";
import emailjs from "emailjs-com";
import classes from "./form.module.scss";
import {
  IoBusinessOutline,
  IoChatboxEllipsesOutline,
  IoPersonOutline,
  IoMailOutline,
} from "react-icons/io5";
import Button from "../../Button/button";

const form = () => {
  const [submit, setSubmit] = useState(false);
  const [error, setError] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sirckmp",
        "template_efabv9j",
        e.target,
        "user_Sr5HKAyP6JbbbQnzGM3HC"
      )
      .then(
        (result) => {
          setSubmit(true);
        },
        (error) => {
          setError(true);
        }
      );
    setTimeout(() => {
      setSubmit(false);
      setError(false);
    }, 4000);
    e.target.reset();
  };
  return (
    <form className={classes.form} onSubmit={sendEmail}>
      <div
        className={`${classes.message} ${submit || error ? "" : classes.hide}`}
      >
        <h4 style={error ? { color: "red" } : null}>
          {(submit && "Thank you for your message!") ||
            (error && "Something went wrong.")}
        </h4>
      </div>
      <label>
        <IoPersonOutline />
      </label>
      <input type="text" name="name" placeholder="Name" required />
      <label>
        <IoBusinessOutline />
      </label>
      <input type="text" name="company" placeholder="Company" required />
      <label>
        <IoMailOutline />
      </label>
      <input type="email" name="email" placeholder="E-mail" required />
      <label>
        <IoChatboxEllipsesOutline />
      </label>
      <textarea name="message" rows="10" placeholder="Message..." required />
      <div className={classes.btnbox}>
        <Button name="Send Message" type="submit" title="form" />
      </div>
    </form>
  );
};

export default form;
