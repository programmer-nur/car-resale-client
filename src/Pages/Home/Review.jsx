import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./SwiperStyles/reviews.css";

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  Pagination,
  Navigation,
  Keyboard,
} from "swiper";
import Customer from "./Customer";
import { reviews } from "../../Context";
import {motion} from "framer-motion"
const Review = () => {
  return (
    <section className="pt-16 min-h-screen max-w-6xl mx-auto">
      <motion.h2
      initial={{opacity:0,scale:0}}
      whileInView={{opacity:1,scale:1}}
      transition={{duration:.8}}
      className="text-5xl font-semibold text-center">Customer Feedback</motion.h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{
          clickable: true,
        }}
        keyboard={{
          enabled: true,
        }}
       
        modules={[EffectCoverflow, Autoplay, Pagination, Keyboard, Navigation]}
        className="mySwiper"
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <Customer review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
