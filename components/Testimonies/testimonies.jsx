import React, { useState, useRef } from "react";
import classes from "./testimonies.module.scss";
import Title from "../Title/title";
import Card from "../Card/card";
import Image from "next/image";
import Button from "../Button/button";
import Modal from "../Modal/modal";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animateSection } from "../../helper/animate";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";

const testimonies = ({ testimonies }) => {
  const [modal, setModal] = useState(false);
  const [testimonie, setTestimonie] = useState();
  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  const animation = animateSection(inView);
  const document = useRef();

  const toggleModalHandler = (e) => {
    setTestimonie(e.letter);
    setModal(!modal);
  };

  modal ? disableBodyScroll(document) : enableBodyScroll(document);

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
                title="testimonies"
                name="More info"
                enterIcon
                function={() => toggleModalHandler(el)}
              />
            </div>
          </Card>
        ))}
      </div>
      <AnimatePresence>
        {modal && (
          <Modal function={toggleModalHandler} type="glass">
            <motion.div
              className={classes.modalcontent}
              ref={document}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1, overflow: scroll }}
              exit={{ opacity: 0, scale: 0, x: "-100vw" }}
              transition={{ duration: 0.5 }}
            >
              <InnerImageZoom src={testimonie} zoomScale={1.5} />
            </motion.div>
            <Button close type="close" function={toggleModalHandler} />
          </Modal>
        )}
      </AnimatePresence>
    </motion.section>
  );
};

export default testimonies;
