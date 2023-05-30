import React from "react";

// import Swiper core and required modules
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Keyboard,
  Mousewheel,
} from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Testimonials.css";
import TestimonialsCard from "../../components/Testimonials/TestimonialsCard";
const Testimonials = () => {
  return (
    <section className="container mx-auto mb-[125px]">
      <p className="text-center font-[500] text-[20px] text-[#00B3AD] mb-[5px]">
        Testimonials
      </p>
      <h3 className="text-center font-[600] text-[40px] text-[#20226A] mb-[70px]">
        What Clients Say
      </h3>

      <div className="frame-box max-w-[1048px] mx-auto p-[50px]">
        <div className="testi__swiper w-full mx-auto  bg-white ">
          <Swiper
            // install Swiper modules
            modules={[Mousewheel, Pagination, Navigation]}
            direction={"horizontal"}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{ clickable: true }}
            Mousewheel={true}
            pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
            className="mySwiper"
          >
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <TestimonialsCard />
            </SwiperSlide>
          </Swiper>
          {/* <TestimonialsCard />s */}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
