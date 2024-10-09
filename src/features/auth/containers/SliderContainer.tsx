// src/features/auth/containers/CarouselContainer.tsx
import React, { useState, useEffect } from "react";
import { Slider } from "@features/auth/components";
import { Slide } from "@features/auth/types";

// Sample images for the slide
const images: Slide[] = [
  {
    id: 1,
    title: "Real-Time Data Orchestration.",
    description: "Instantly orchestrate data across systems.",
    imageUrl:
      "https://imgs.search.brave.com/lLWSgQDiQ0uuFiF3ZH01dbzxlmMk-i1c1KYGuRAqEBw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by9zbmFwc2hvdC1w/b3Mtc3lzdGVtLXdp/dGgtaW50ZWdyYXRp/b24tb25saW5lLXNh/bGVzLWVjb21tZXJj/ZS1wbGF0Zm9ybXNf/MTMxNDQ2Ny00NDU4/Ny5qcGc_c2l6ZT02/MjYmZXh0PWpwZw",
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
  {
    id: 5,
    title: "Real-Time Data Orchestration.",
    description: "Instantly orchestrate data across systems.",
    imageUrl:
      "https://imgs.search.brave.com/FpHwU4_jH5HjSPq5uebkX8YcZso5Kylonx-ei0LCWY0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9wb3Mt/Y3JlZGl0LWNhcmRz/LWNvbG9yLWltYWdl/LTY3MjUxMDg0Lmpw/Zw",
  },
  {
    id: 6,
    title: "Real-Time Data Orchestration.",
    description: "Instantly orchestrate data across systems.",
    imageUrl:
      "https://imgs.search.brave.com/G3g05p34YtTFQ7cFDSdo-JPlx7CvNwIEkKxZeqOpi1Y/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92aXN1YWwtcmVz/dGF1cmFudC1wb3Mt/c3lzdGVtLXdpdGgt/dGFibGVzLW9yZGVy/cy1raXRjaGVuLXRp/Y2tldC1wcmludGlu/Z18xMzE0NDY3LTQ0/NzkwLmpwZz9zaXpl/PTYyNiZleHQ9anBn",
  },
];

const SliderContainer: React.FC = () => {
  const [slides, setSlides] = useState<Slide[]>([]);

  // Optional: Fetch slides from an API or other source
  useEffect(() => {
    // Example: Fetch slides from an API
    // setSlides(fetchedSlides);
    setSlides(images);
  }, []);

  return (
    <div className="flex flex-col overflow-hidden">
      <Slider slides={slides} />
    </div>
  );
};

export default SliderContainer;
