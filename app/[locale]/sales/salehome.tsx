"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import { CarBookingForm } from "../common/booking-form-new-cars";

import alto from "../public/Alto/Alto White.png";
import cultus1 from "../public/Cultus/Cultus-White.jpg";
import swift1 from "../public/Swift/03-(1).png";
import Fronk from "../public/cars/fronx/Fronx.jpeg";
import everycar from "../public/cars/Untitled-image-(14) (1).png";

import aos from "aos";
import "aos/dist/aos.css";

const cars = [
  {
    id: "fronx",
    title: "Fronx",
    image: Fronk,
    price: "Rs 5,999,999/-",
    filer: "120,000/-",
    nonFiler: "360,000/-",
    link: "/sales/cars/fronx",
  },
  {
    id: "swift",
    title: "Swift",
    image: swift1,
    price: "Rs 4,460,160/-",
    filer: "66,902/-",
    nonFiler: "200,707/-",
    link: "/sales/cars/swiftglvvt",
  },
  {
    id: "cultus",
    title: "Cultus",
    image: cultus1,
    price: "Rs 4,089,490/-",
    filer: "40,895/-",
    nonFiler: "122,685/-",
    link: "/sales/cars/cultusvxr",
  },
  {
    id: "alto",
    title: "Alto",
    image: alto,
    price: "Rs 2,994,861/-",
    filer: "14,974/-",
    nonFiler: "44,923/-",
    link: "/sales/cars/altovx",
  },
  {
    id: "every",
    title: "Every",
    image: everycar,
    price: "Rs 2,965,200/-",
    filer: "14,826/-",
    nonFiler: "44,478/-",
    link: "/sales/cars/every",
  },
];

const SalesHome = () => {

  useEffect(() => {
    aos.init({ duration: 900, once: true });
  }, []);

  return (
    <>
    <section className="cars-section py-5  text-dark">

  {/* HERO */}
<div className=" py-10">
  <div className="container">

    <div className="row align-items-center">

      {/* LEFT TEXT */}
      <div className="col-12 col-lg-6 text-center text-lg-start mb-4 mb-lg-0">
        <h1 className="hero-title">Find Your Perfect Ride</h1>
        <p className="hero-sub">
          Premium Suzuki cars with best deals & easy booking
        </p>
      </div>

      {/* RIGHT FORM */}
      <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">


          <div className="form-content flex align-items-center justify-content-center">
          
        </div>

      </div>

    </div>

  </div>

  </div>

      {/* GRID */}
      <div className="container py-5">
        <div className="row g-4">

          {cars.map((car) => (
            <div key={car.id} className="col-md-4" data-aos="fade-up">

              <div className="car-card">

                {/* IMAGE */}
              <Link href={car.link}>
  <div className="car-img">
    <Image
      src={car.image}
      alt={car.title}
      fill
      className="car-image"
    />
  </div>
</Link>

                {/* BODY */}
                <div className="car-info">

                  <h4>{car.title}</h4>

                  <p className="price bold-text">{car.price}</p>

                  {/* FILTER / NON-FILTER */}
                  <div className="price-tags">
                    <span className="filer">
                      Filer: {car.filer}
                    </span>
                    <span className="non-filer">
                      Non-Filer: {car.nonFiler}
                    </span>
                  </div>
                  <div className="divider">
                    <hr />
                  </div>
                  {/* BUTTONS */}
                  <div className="actions">
                    <Link href={car.link} className="view-btn">
                      View Details
                    </Link>
 

                   <CarBookingForm/>
                  </div>

                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

      {/* STYLES */}
      <style jsx>{`
        .cars-section {
          background: #f6f7fb;
        }

        .hero {
          background: linear-gradient(135deg, #0f0f0f, #1c1c1c);
          color: white;
          padding: 60px 0;
        }

        .hero-title {
          font-size: 42px;
          font-weight: 800;
        }

        .hero-sub {
          opacity: 0.7;
        }

        /* CARD */
        .car-card {
          background: white;
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.08);
          transition: 0.3s;
        }

        .car-card:hover {
          transform: translateY(-8px);
        }

        .car-img {
          position: relative;
          height: 220px;
        }

        .car-img :global(img) {
          object-fit: cover;
        }

        .car-info {
          padding: 16px;
        }

        .price {
          color: #444;
          margin-bottom: 10px;
        }

        /* PRICE TAGS */
        .price-tags {
          display: flex;
          gap: 8px;
          font-size: 12px;
          margin-bottom: 12px;
        }

        .filer {
          background: #d1fae5;
          color: #065f46;
          padding: 4px 8px;
          border-radius: 6px;
        }

        .non-filer {
          background: #fee2e2;
          color: #991b1b;
          padding: 4px 8px;
          border-radius: 6px;
        }

        /* ACTIONS */
        .actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .view-btn {
          color: #e60000;
          font-weight: 600;
          text-decoration: none;
        }

        .book-btn {
          background: black;
          color: white;
          border: none;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          cursor: pointer;
        }

        .book-btn:hover {
          background: #e60000;
        }
          .car-img {
  position: relative;
  width: 100%;
  height: 280px; /* adjust as you want */
  overflow: hidden;
  border-radius: 12px;
}

.car-image {
  object-fit: cover;
}
      `}</style>

    </section>

    </>

  );
};

export default SalesHome;