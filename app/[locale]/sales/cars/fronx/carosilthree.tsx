"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

import image1 from "../../../public/cars/fronx/Transmission.jpg";
import image2 from "../../../public/cars/fronx/hybrid.jpg";
import image3 from "../../../public/cars/fronx/abs.jpg";
import image4 from "../../../public/cars/fronx/airbags.jpg";
import image5 from "../../../public/cars/fronx/front.jpg";
import image7 from "../../../public/cars/fronx/drl.jpg";
import image6 from "../../../public/cars/fronx/engine.jpg";

const slides = [
  { img: image1, title: "Transmission" },
  { img: image2, title: "Hybrid Tech" },
  { img: image3, title: "ABS (System)" },
  { img: image4, title: "6 Airbags" },
  { img: image5, title: "DRL Lights" },
  { img: image6, title: "1.5L K Series Engine" },
  { img: image7, title: "Front Lights" },
];

export default function Carosilthree() {
  return (
    <section className="p-4 bg-white">



      <Swiper
        modules={[Autoplay]}
        spaceBetween={25}
        slidesPerView={3}
        loop
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="bg-white"
      >
        {slides.map((item, index) => (
          <SwiperSlide key={index} className="bg-white">

            {/* Card */}
            <div className={"bg-white  p-2 rounded-2xl shadow-lg overflow-hidden transition-all border duration-300 hover:shadow-2xl hover:-translate-y-2" + (index === 0 ? " border-4 border-blue-500" : "")}>

              {/* Image */}
              <div className="relative  h-[220px] w-full bg-gray-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-auto object-contain py-2"
                />
              </div>

              {/* Content */}
              <div className={"mb-4 text-center"}>
                <h3 className={"text-lg font-semibold text-gray-800"}>
                  {item.title}
                </h3>
              </div>

            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}