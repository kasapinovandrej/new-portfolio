import React, { useState } from "react";
import classes from "./testimonies.module.scss";
import Title from "../Title/title";
import Card from "../Card/card";
import Image from "next/image";
import Button from "../Button/button";
import Modal from "../Modal/modal";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animateSection } from "../../helper/animate";

const testimonies = ({ testimonies }) => {
  const [modal, setModal] = useState(false);
  const [testimonie, setTestimonie] = useState();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = animateSection(inView);

  const toggleModalHandler = (e) => {
    setTestimonie(e.letter);
    setModal(!modal);
  };

  return (
    <motion.section
      className={classes.textemonies}
      ref={ref}
      animate={animation}
    >
      <Title firstWord="Superiors" secondWord="Testimonies" />
      <div className={classes.box}>
        {testimonies.map((el) => (
          <Card key={el.id}>
            <div className={classes.content}>
              <Image src={el.image} width={100} height={150} />
              <blockquote>{el.text}</blockquote>
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
            <InnerImageZoom src={testimonie} zoomScale={1.5} />
          </div>
          <Button close type="close" function={toggleModalHandler} />
        </Modal>
      )}
    </motion.section>
  );
};

export default testimonies;
