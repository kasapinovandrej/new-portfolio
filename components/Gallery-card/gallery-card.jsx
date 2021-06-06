import React from "react";
import Image from "next/image";
import classes from "./gallery-card.module.scss";
import { motion } from "framer-motion";
import { ImGithub, ImLink } from "react-icons/im";
import { CgCodeSlash } from "react-icons/cg";

const linkHover = {
  hover: {
    scale: 1.2,
    color: "#ff6225",
  },
};

const GalleryCard = ({ data, index }) => {
  return (
    <div
      className={`${classes.card} ${
        index % 2 === 0 ? classes.background : null
      }`}
    >
      <div className={classes.box}>
        <div className={index % 2 === 0 ? null : classes.imagebox}>
          <Image src={data.image} width={500} height={300} />
        </div>
        <div className={classes.textbox}>
          <h5>{data.title}</h5>
          <p>{data.description}</p>
          <div className={classes.links}>
            <motion.a
              whileHover="hover"
              variants={linkHover}
              href={data.git}
              target="_blank"
            >
              <ImGithub />
            </motion.a>
            <motion.a
              whileHover="hover"
              variants={linkHover}
              href={data.code}
              target="_blank"
            >
              <CgCodeSlash />
            </motion.a>
            <motion.a
              whileHover="hover"
              variants={linkHover}
              href={data.link}
              target="_blank"
            >
              <ImLink />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
