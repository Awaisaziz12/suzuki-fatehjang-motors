"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Link } from "@/navigation";
import alto from "../public/Alto/Alto White.png";
import cultus1 from "../public/Cultus/Cultus-White.jpg";
import swift1 from "../public/Swift/03-(1).png";
import Fronk from "../public/cars/fronx/Fronx.jpeg";
import { CarBookingForm } from "../common/booking-form-new-cars";
import everycar from "../public/cars/Untitled-image-(14) (1).png";
import aos from "aos";
import "aos/dist/aos.css"; // Import AOS styles 
const config = {
  sales: "Sales",
  priceLabel: "Price:",
  filerLabel: "Filer:",
  nonFilerLabel: "Non-Filer:",
  seeMore: "See more",
  booknow: "Book Now",
  sale_des: "Select Your Favourite Car Today!",
};

const carModels = [
  {
    id: "Fronk",
    name: "Fronk",
    variant: {
      title: "Fronx",
      image: Fronk,
      price: "Rs 5,999,999/-",
      link: "/sales/cars/fronx",
      filer: "120,000/-",
      nonFiler: "360,000/-",
    },
  },
  
  {
    id: "swift",
    name: "Swift",
    variant: {
      title: "Swift ",
      image: swift1,
      price: "Rs 4,460,160/-",
      link: "/sales/cars/swiftglvvt",
      filer: "Rs 66,902/-",
      nonFiler: "Rs 200,707/-",
    },
  },
  {
    id: "cultus",
    name: "Cultus",
    variant: {
      title: "Cultus",
      image: cultus1,
      price: "Rs 4,089,490/-",
      link: "/sales/cars/cultusvxr",
      filer: "Rs 40,895/-",
      nonFiler: "Rs 122,685/-",
    },
  },
  {
    id: "alto",
    name: "Alto",
    variant: {
      title: "Alto",
      image: alto,
      price: "Rs 2,994,861/-",
      link: "/sales/cars/altovx",
      filer: "Rs 14,974/-",
      nonFiler: "Rs 44,923/-",
    },
  },
  {
    id: "every",
    name: "Every",
    variant: {
      title: "Every",
      image: everycar,
      price: "Rs 2,965,200/-",
      link: "/sales/cars/every",
      filer: "Rs 14,826/-",
      nonFiler: "44,478/-",
    },
  },
  
];

const CarsPage = () => {
    useEffect(() => {
      aos.init({ duration: 2000 }); // Initialize AOS with duration and once option
    }, []);
  return (
    <section className="py-2 py-xl-3 bg-light ">
      <div className="container">
        <div className="row mb-3">
          <div className="col">
            <h2 className="fw-bold text-dark">{config.sales}</h2>
            <h6 className="fw-bold text-dark">{config.sale_des}</h6>
            <br />
          </div>
          <div className="col-lg-4 text-lg-end">
            <CarBookingForm />
          </div>
        </div>
        <div  className="row  ">
          <div className="" >
            <div id="carModelTabsContent">
              <div className="row g-3 g-xl-4" >
                {carModels.map((carModel) => (
                  <div className="col-md-4" key={carModel.id}>
                    <Link
                      href={carModel.variant.link}
                      className="card h-100 text-decoration-none"
                    >
                      <div className="card-body bg-white border d-flex flex-column">
                        <div className="mb-3 text-center" data-aos="fade-up">
                          <Image
                            src={carModel.variant.image}
                            alt={carModel.variant.title}
                            width={300}
                            height={200}
                            layout="responsive"
                          />
                        </div>
                        <h5 className="card-title text-dark text-center">
                          {carModel.variant.title}
                        </h5>
                        <p className="card-text text-center text-secondary mb-2">
                          <strong>{carModel.variant.price}</strong>{" "}
                          <span className="blinking-text">
                            {config.booknow}
                          </span>
                        </p>
                        <p className="card-text text-center">
                          <span className="badge bg-success me-2">
                            {config.filerLabel} {carModel.variant.filer}
                          </span>
                          <span className="badge bg-danger">
                            {config.nonFilerLabel} {carModel.variant.nonFiler}
                          </span>
                        </p>
                        <div className="text-center">
                          <br />
                          <p className="underline action text-red fs-lg">
                            {config.seeMore}{" "}
                            <i className="bi bi-arrow-right"></i>
                          </p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarsPage;
