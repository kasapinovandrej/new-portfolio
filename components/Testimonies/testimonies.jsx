import React, { useState } from "react";
import classes from "./testimonies.module.scss";
import Title from "../Title/title";
import Card from "../Card/card";
import Image from "next/image";
import Button from "../Button/button";
import Modal from "../Modal/modal";

const testimonies = ({ testimonies }) => {
  const [modal, setModal] = useState(false);
  const [testimonie, setTestimonie] = useState();

  const toggleModalHandler = (e) => {
    setTestimonie(e.letter);
    setModal(!modal);
  };

  return (
    <section className={classes.textemonies}>
      <Title firstWord="Superiors" secondWord="Testimonies" />
      <div className={classes.box}>
        {testimonies.map((el) => (
          <Card key={el.id}>
            <div className={classes.content}>
              <Image src={el.image} width={100} height={150} />
              <p>{el.text}</p>
              <h4>{el.name}</h4>
              <h5>{el.position}</h5>
              <Button
                type="testimonies"
                name="More info"
                enterIcon
                function={() => toggleModalHandler(el)}
              />
            </div>
          </Card>
        ))}
      </div>
      {modal && (
        <Modal function={toggleModalHandler} type="glass">
          <div className={classes.modalcontent}>
            <Image src={testimonie} width={600} height={800} />
          </div>
        </Modal>
      )}
    </section>
  );
};

export default testimonies;
