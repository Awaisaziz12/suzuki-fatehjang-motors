"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import Link from "next/link";
import Constants from "@/data/Constants";

const slides = [
  {
    title: "FRONX",
    desc: "The Fronx redefines presence with a confident front design, sleek coupe-like proportions, and a meticulously crafted interior.",
  },
  {
    title: "XUV",
    desc: "Introducing the new XUV segment, it bridges functionality with sophistication offering comfort, efficiency, and lifestyle appeal.",
  },
  {
    title: "Theory of X",
    desc: "Bold and dynamic, the Fronx Xhilarates, Xplores, Xpresses, and Xcels, delivering Xtraordinary style and Xperience.",
  },
  {
    title: "Life Style Upgrade",
    desc: "The Fronx reimagines daily driving, transforming the ordinary into something remarkable.",
  },
];

export default function FronxTextSlider() {
  return (
    <section className="bg-black text-white py-5 flex flex-col items-center justify-center">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={100}
        centeredSlides={false}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        
        className="fronx-text-swiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="text-center max-w-4xl mx-auto px-5">
              <h1 className="text-5xl font-bold mb-3">
                {slide.title}
              </h1>
              <h5 className="text-lg opacity-80 leading-relaxed ">
                {slide.desc}
              </h5>
              
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </section>
  );
}