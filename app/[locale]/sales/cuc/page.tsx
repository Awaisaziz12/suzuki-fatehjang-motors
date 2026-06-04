"use client";
import Image from "next/image";
import React, { useState } from "react";
import alto1 from "./alto.png";
import alto2 from "./every.png";
import alto3 from "./alto3.png";

import { Link } from "@/navigation";
import Constants from "@/data/Constants";

const carData = [
  {
    model: "Alto VXR",
    price: 3200000,
    mileage: "180,000 km",
    year: 2025,
    brand: "Alto",
    img: alto1,
    isSold: false,
  },
  {
    model: "Every vx ",
    price: 2550000,
    mileage: "167 km",
    year: 2025,
    brand: "Every",
    img: alto2,
    isSold: false,
  },
  {
    model: "Alto VXL AGS ",
    price: 3400000,
    mileage: "30000 km",
    year: 2025,
    brand: "Alto",
    img: alto3,
    isSold: false,
  },
  
];

export default function CUC() {
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [sortOption, setSortOption] = useState<string>("priceHighToLow");
  const [minPrice, setMinPrice] = useState<number>(10000);
  const [maxPrice, setMaxPrice] = useState<number>(5000000);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const carsPerPage = 6;

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [brand]
    );
  };

  const handleSortChange = (option: string) => setSortOption(option);

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "minPrice") setMinPrice(Number(value));
    else setMaxPrice(Number(value));
  };

  const sortedCars = [...carData].sort((a, b) => {
    if (sortOption === "priceLowToHigh") return a.price - b.price;
    if (sortOption === "newestFirst") return b.year - a.year;
    if (sortOption === "oldestFirst") return a.year - b.year;
    return b.price - a.price;
  });

  const filteredCars = sortedCars.filter(
    (car) =>
      (selectedBrands.length === 0 || selectedBrands.includes(car.brand)) &&
      car.price >= minPrice &&
      car.price <= maxPrice
  );

  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = filteredCars.slice(indexOfFirstCar, indexOfLastCar);

  const nextPage = () => setCurrentPage((p) => p + 1);
  const prevPage = () => currentPage > 1 && setCurrentPage((p) => p - 1);

  return (
    <section className="py-10 car-section-bg">
      <div className="container mt-5">

        {/* 3D HEADER */}
<div className="row mb-5">
  <div className="col-12">

    <div className="header-3d p-4 rounded-4 d-flex justify-content-between align-items-center flex-wrap gap-3">

      {/* LEFT TEXT */}
      <div>
        <h1 className="fw-bold mb-1 display-4 ">
          Available Used Cars
        </h1>
        <p className="text-light opacity-75 mb-0">
          Choose from our wide range of used cars.
        </p>
      </div>

      {/* RIGHT DROPDOWN */}
      <div className="dropdown sort-3d p-2 px-3 rounded-pill">
        <a
          href="#"
          data-bs-toggle="dropdown"
          className=" text-decoration-none"
        >
          Sort by
        </a>

        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" onClick={() => handleSortChange("priceLowToHigh")}>
              Price Low → High
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => handleSortChange("newestFirst")}>
              Newest First
            </a>
          </li>
          <li>
            <a className="dropdown-item" onClick={() => handleSortChange("oldestFirst")}>
              Oldest First
            </a>
          </li>
        </ul>
      </div>

    </div>

  </div>
</div>

        <div className="row">

          {/* FILTER */}
          <aside className="col-xl-3 mb-4">
            <div className="filter-3d p-4 rounded-4">

              <h5 className="mb-3">Car Brands</h5>

              <ul className="list-unstyled">
                {["Alto", "Mehran", "Cultus", "Wagon-R", "Swift", "Every"].map((brand, i) => (
                  <li key={i}>
                    <label className="d-flex gap-2 align-items-center mb-2">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => handleBrandChange(brand)}
                      />
                      {brand}
                    </label>
                  </li>
                ))}
              </ul>

            
            </div>
          </aside>

          {/* CAR GRID */}
          <div className="col-xl-9">
            <div className="row g-4">

              {currentCars.map((car, i) => (
                <div key={i} className="col-md-6 col-xl-4">

                  <div className="car-card-3d p-3 rounded-4">

                    <div className="car-img position-relative">
                      <Image src={car.img} alt={car.model} layout="responsive" width={500} height={500} />

                      <span className={`badge position-absolute top-0 start-0 ${car.isSold ? "bg-danger" : "bg-success"}`}>
                        {car.isSold ? "Sold" : "Available"}
                      </span>
                    </div>

                    <div className="mt-3">
                      <h5>{car.model}</h5>
                      <p className="text-light">{car.year} • {car.mileage}</p>
                      <h4 className="text-warning">Rs {car.price.toLocaleString()}</h4>

                      <Link href={"tel:" + Constants.USEDCAR} className="btn btn-dark rounded-pill w-100 mt-2">
                        Contact Now
                      </Link>
                    </div>

                  </div>

                </div>
              ))}

            </div>

            {/* PAGINATION */}
            <div className="d-flex justify-content-between mt-4">
              <button className="btn btn-outline-dark" onClick={prevPage}>Previous</button>
              <button className="btn btn-outline-dark" onClick={nextPage}>Next</button>
            </div>

          </div>
        </div>
      </div>

      {/* INLINE 3D CSS */}
    <style jsx>{`
  /* PAGE BACKGROUND (LUXURY LIGHT GRADIENT) */
  .car-section-bg{
    background: radial-gradient(circle at top, #f8fafc, #eef2f7 60%, #e9eef5);
    min-height: 100vh;
  }

  /* TOP HEADER (PREMIUM GLASS PANEL) */
  .header-3d{
    background: rgba(255,255,255,0.75);
    backdrop-filter: blur(18px);
    border: 1px solid rgba(255,255,255,0.6);
    border-radius: 22px;
    box-shadow:
      0 25px 60px rgba(0,0,0,0.08),
      inset 0 1px 0 rgba(255,255,255,0.8);
  }

  /* SORT BUTTON (SOFT FLOATING CHIP) */
  .sort-3d{
    background: rgba(255,255,255,0.7);
    backdrop-filter: blur(12px);
    border: 1px solid rgba(0,0,0,0.05);
    border-radius: 999px;
    box-shadow: 0 10px 25px rgba(0,0,0,0.06);
    transition: all 0.25s ease;
  }

  .sort-3d:hover{
    transform: translateY(-2px);
    box-shadow: 0 15px 35px rgba(0,0,0,0.1);
  }

  /* FILTER PANEL (SIDEBAR LUXURY CARD) */
  .filter-3d{
    background: #ffffff;
    border-radius: 24px;
    border: 1px solid #eef1f6;
    box-shadow: 0 30px 70px rgba(0,0,0,0.08);
    padding: 24px;
    position: sticky;
    top: 20px;
  }

  /* CAR CARD (MAIN PREMIUM PRODUCT CARD) */
  .car-card-3d{
    background: #ffffff;
    border-radius: 22px;
    border: 1px solid #f1f4f8;
    box-shadow: 0 20px 50px rgba(0,0,0,0.08);
    transition: all 0.35s cubic-bezier(0.25, 1, 0.5, 1);
    overflow: hidden;
    position: relative;
  }

  /* HOVER LIFT (REAL LUXURY FEEL) */
  .car-card-3d:hover{
    transform: translateY(-12px) scale(1.02);
    box-shadow: 0 35px 80px rgba(0,0,0,0.14);
  }

  /* IMAGE ZOOM (SMOOTH LUXURY MOTION) */
  .car-img{
    overflow: hidden;
    border-radius: 18px;
  }

  .car-img img{
    transition: transform 0.6s ease;
  }

  .car-card-3d:hover .car-img img{
    transform: scale(1.08);
  }

  /* TITLE */
  h5{
    font-weight: 700;
    color: #0f172a;
    letter-spacing: -0.2px;
  }

  /* PRICE (HIGHLIGHT PREMIUM ORANGE) */
  h4.text-warning{
    color: #ff6a00 !important;
    font-weight: 800;
    letter-spacing: -0.3px;
  }

  /* BADGE (SOFT GLASS STYLE) */
  .badge{
    padding: 6px 12px;
    font-size: 11px;
    border-radius: 999px;
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.12);
  }

  /* BUTTON (MODERN DARK CTA) */
  .btn-dark{
    background: linear-gradient(135deg, #0f172a, #111827);
    border: none;
    border-radius: 999px;
    font-weight: 500;
    transition: all 0.25s ease;
  }

  .btn-dark:hover{
    transform: translateY(-2px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }

  /* TEXT MUTED */
  .text-light{
    color: #6b7280 !important;
  }

  /* SMOOTH GLOBAL FEEL */
  *{
    scroll-behavior: smooth;
  }
`}</style>
    </section>
  );
}