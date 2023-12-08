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

const Review = () => {
  return (
    <section className="pt-16 max-w-6xl mx-auto">
       <div className="text-center py-4 sm:py-12">
        <h2 className="text-3xl mb-2 font-semibold">Testimonial</h2>
        <p>Meet Our Client Satisfaction</p>
      </div>
      <Swiper
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        loop={true}
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
            <div class=" h-full mb-6 m-4 p-4">
              <div class="h-full text-center">
                <img
                  alt="testimonial"
                  class="w-16 h-16 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-[#937B92]"
                  src={review.img}
                />
                <p class="leading-relaxed">{review.des}</p>
                <span class="inline-block h-1 w-10 rounded bg-[#937B92] mt-6 mb-4"></span>
                <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">
                  {review.name}
                </h2>
                <p class="text-gray-500">{review.title}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Review;
