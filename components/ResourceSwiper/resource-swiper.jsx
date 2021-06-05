import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import Card from "../Card/card";
import Image from "next/image";
import classes from "./resource-swiper.module.scss";
import {
  IoArrowBackCircleOutline,
  IoArrowForwardCircleOutline,
} from "react-icons/io5";
import { motion } from "framer-motion";

SwiperCore.use([Navigation, Pagination, Autoplay]);
const ResourceSwiper = ({ learningData }) => {
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        pagination={{ clickable: true }}
        // loop={true}
        // autoplay={{ delay: 6000 }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          992: {
            slidesPerView: 3,
          },
        }}
      >
        {learningData.map((el) => (
          <SwiperSlide key={el.id}>
            <Card>
              <motion.a
                className={classes.slide}
                href={el.link}
                target="_blank"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.9 }}
                transition={{ duration: 0.2 }}
              >
                <h5>
                  Tutor:<p>{el.tutor}</p>
                </h5>
                <div className={classes.image}>
                  <Image
                    src={el.image}
                    alt={el.title}
                    width={400}
                    height={200}
                  />
                </div>
                <h5>{el.title}</h5>
                <p>{el.description}</p>
              </motion.a>
            </Card>
          </SwiperSlide>
        ))}
      </Swiper>
      <motion.div
        className="swiper-button-prev"
        whileHover={{ scale: 1.05, color: "#ff6225" }}
      >
        <IoArrowBackCircleOutline />
      </motion.div>
      <motion.div
        className="swiper-button-next"
        whileHover={{ scale: 1.05, color: "#ff6225" }}
      >
        <IoArrowForwardCircleOutline />
      </motion.div>
    </>
  );
};

export default ResourceSwiper;
