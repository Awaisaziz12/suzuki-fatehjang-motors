"use client";
import React, { useState, useEffect } from "react";
import image10 from "../../../public/Every VX Financing Home Banner 1.jpeg";
import image4 from "../../../public/Every VX Financing Home Banner.jpeg";
import image2 from "./New folder/2.jpeg";
import image6 from "./New folder/6.webp";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarosilEvery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image10,image4,image2,image6];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);
  const autoSlideInterval = 2000;

  return (
    <section className="mt-8">
      <Carousel
        autoPlay={true}
        interval={autoSlideInterval}
        selectedItem={currentIndex}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} layout="responsive" alt="background-image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default CarosilEvery;
