import React from "react";
import Image from "next/image";
import classes from "./hero.module.scss";
import Button from "../Button/button";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

const HeroSection = () => {
  const router = useRouter();
  return (
    <header className={classes.header}>
      <div className={classes.text}>
        <motion.h2
          className={classes.h2}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 50 }}
        >
          Hello, <br /> my name is
        </motion.h2>
        <motion.h1
          className={classes.h1}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.5,
            delay: 1.5,
            type: "spring",
            stiffness: 50,
          }}
        >
          Andrej Kasapinov
        </motion.h1>
        <motion.h5
          className={classes.h5}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{
            duration: 1.5,
            delay: 3,
            type: "spring",
            stiffness: 50,
          }}
        >
          I am a self-taught software developer
        </motion.h5>
        <Button
          name="My projects"
          title="filled"
          function={() => router.push("/projects")}
        />
        <Button name="Contact Me" function={() => router.push("/contact")} />
      </div>
      <div className={classes.image}>
        <Image src="/images/Hero.png" width={800} height={800} />
      </div>
    </header>
  );
};

export default HeroSection;
