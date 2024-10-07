// src/features/auth/containers/AuthCarouselContainer.tsx
import React, { useState, useEffect } from "react";
import { CarouselSlide } from "../types/authTypes";
import Carousel from "../components/Carousel";

// Sample images for the carousel
const images: CarouselSlide[] = [
    {
        id: 1,
        title: "Real-Time Data Orchestration.",
        description: "Instantly orchestrate data across systems.",
        imageUrl:
            "https://slp-statics.astockcdn.net/static_assets/staging/24spring/home/curated-collections/card-2.jpg?width=580&format=webp",
    },
    {
        id: 2,
        title: "Compose anything.",
        description: "Create powerful APIs with ease.",
        imageUrl:
            "https://img.freepik.com/premium-psd/bank-services-invitation-template_23-2150248590.jpg?w=740",
    },
    {
        id: 3,
        title: "Connect everything.",
        description: "Seamlessly integrate multiple data sources.",
        imageUrl:
            "https://img.freepik.com/free-psd/bank-services-youtube-cover-template_23-2150248584.jpg?t=st=1728068632~exp=1728072232~hmac=16f7c133460b7c418f98676e9958739e82258bb5abeca8e3984b7987670125c3&w=1060",
    },
    {
        id: 4,
        title: "Real-Time Data Orchestration.",
        description: "Instantly orchestrate data across systems.",
        imageUrl:
            "https://img.freepik.com/premium-psd/bank-services-facebook-template_23-2150248594.jpg?w=1060",
    },
];

const AuthCarouselContainer: React.FC = () => {
  const [slides, setSlides] = useState<CarouselSlide[]>(images);

  // Optional: Fetch slides from an API or other source
  useEffect(() => {
    // Example: Fetch slides from an API
    // setSlides(fetchedSlides);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      <Carousel slides={slides} />
    </div>
  );
};

export default AuthCarouselContainer;
