// src/features/auth/components/Carousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Slide } from "@features/auth/types";

const Slider: React.FC<{ slides: Slide[] }> = ({ slides }) => {
  return (
    <Swiper
      spaceBetween={10}
      centeredSlides={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        type: "bullets",
      }}
      slidesPerView={1}
      loop={true}
      modules={[Autoplay, Pagination]}
      className="h-full w-full rounded-3xl"
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id} className="">
          <div className="relative flex items-center justify-center h-full w-full overflow-hidden">
            {/* Image */}
            <img
              src={slide.imageUrl}
              alt={slide.title}
              className="w-full h-full object-cover rounded-lg"
            />
            {/* Text overlay */}
            <div className="min-h-28 max-h-48 absolute bottom-0 left-0 w-full bg-gradient-to-t from-black to-transparent p-4 rounded-b-lg">
              <h2 className="text-white text-xl font-semibold">
                {slide.title}
              </h2>
              <p className="text-white text-sm mt-1">{slide.description}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
