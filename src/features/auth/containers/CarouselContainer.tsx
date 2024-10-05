// src/features/auth/containers/AuthCarouselContainer.tsx
import React, { useState, useEffect } from "react";
import { CarouselSlide } from "../types/authTypes";
import Carousel from "../components/Carousel";

const images = [
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

const CarouselContainer: React.FC = () => {
    const [slides, setSlides] = useState<CarouselSlide[]>([]);

    // Optional: Fetch slides from an API or other source
    useEffect(() => {
        setSlides(images);
        // Example: Fetch slides from an API
        // fetch('/api/slides')
        //     .then(response => response.json())
        //     .then(data => setSlides(data))
        //     .catch(error => console.error('Error fetching slides:', error));
    }, []);

    return (
        <div className="flex h-full w-full items-center justify-center rounded-2xl bg-gray-100 border-2 border-red-300 p-8">
            <Carousel slides={slides} />
        </div>
    );
};

export default CarouselContainer;
