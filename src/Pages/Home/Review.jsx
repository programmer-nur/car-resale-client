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
import { reviews } from "../../Context";
import {motion} from "framer-motion"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
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
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[EffectCoverflow, Autoplay, Pagination, Keyboard, Navigation]}
          className="mySwiper"
        >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
              
              <div className="card w-[320px] h-[320px] lg:w-[400px] lg:h-[400px] bg-accent rounded-xl text-white shadow hover:shadow-xl hover:shadow-accent duration-75">
      <div className="card-body rounded-md p-8 text-center">
        <div className="avatar justify-center">
          <div className="w-16 lg:w-24 mask rounded-full">
            <img src={review.img} alt="" />
          </div>
        </div>
        <h2 className="text-2xl">{review.name}</h2>
        <hr className="border-separate my-2 border-primary" />
        <p>{review.des}</p>
        <hr className="border-separate my-2 border-primary" />
        <p className="text-xl">
          Ratings &nbsp; {review.rating}{" "}
          <FontAwesomeIcon icon={faStar} size="sm"></FontAwesomeIcon>
        </p>
      </div>
    </div>

        </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
