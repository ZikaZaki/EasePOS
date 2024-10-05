// src/feathers/auth/components/Carousel.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/swiper-bundle.css"; // This is still valid for older versions
import "swiper/css"; // Add this line for Swiper v10+
import { CarouselSlide } from "../types/authTypes";

const Carousel: React.FC<{ slides: CarouselSlide[] }> = ({ slides }) => {
    return (
        <div className="flex h-full border-gray-800 border-2 w-full overflow-hidden">
            <Swiper
                className="w-full overflow-hidden" // Ensure Swiper takes full width
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div className="relative flex h-full border-2 border-red-300 overflow-hidden">
                            <img
                                src={slide.imageUrl}
                                alt={slide.title}
                                className="object-cover rounded-lg w-full h-full"
                            />
                            <div className="flex min-h-48 max-h-52 absolute bottom-0 left-0 bg-white bg-opacity-80 p-4 rounded-b-lg w-full overflow-hidden">
                                <h2 className="text-xl font-semibold">
                                    {slide.title}
                                </h2>
                                <p className="text-gray-600">
                                    {slide.description}
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Carousel;
