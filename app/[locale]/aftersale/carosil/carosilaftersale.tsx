"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import image1 from "./images/3.jpg";
import image2 from "./images/2-2.jpg";

import image3 from "./images/SGP Main No-1.jpg";
import image4 from "./images/4.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carosilaftersale() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1,image2,image3,image4 ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const autoSlideInterval = 5000;

  return (
    
     <section className="mt-6">
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

export default Carosilaftersale;
