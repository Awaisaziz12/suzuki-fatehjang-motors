"use client";
import React, { useState, useEffect } from "react";
import image2 from "../public/cars/fronx/gallery-02.png";
import image1 from "../public/cars/fronx/gallery-01.png";
import image3 from "../public/cars/fronx/gallery-03.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carosilfronx() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1,image2,image3];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const autoSlideInterval = 5000;

  return (
    
     <section className="mt-9">
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

export default Carosilfronx;
