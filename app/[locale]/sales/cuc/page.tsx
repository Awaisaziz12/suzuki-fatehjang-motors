"use client";
import Image from "next/image";
import React, { useState } from "react";
import alto1 from "../../public/cuccar/1.jpeg";
import alto2 from "../../public/cuccar/2.jpeg";
import alto3 from "../../public/cuccar/3.jpeg";
import alto4 from "../../public/cuccar/4.jpeg";
import alto5 from "../../public/cuccar/5.jpeg";
import alto6 from "../../public/cuccar/6.jpeg";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";

const carData = [
  {
    model: "Alto VX",
    price: 200000,
    mileage: "34,000 km",
    year: 2022,
    brand: "Alto",
    img: alto1,
    isSold: false,
  },
  {
    model: "Alto VX",
    price: 200000,
    mileage: "70,000 km",
    year: 2017,
    brand: "Alto",
    img: alto2,
    isSold: false,
  },
  {
    model: "Mehran VXR",
    price: 1280000,
    mileage: "78,000 km",
    year: 2014,
    brand: "Mehran",
    img: alto3,
    isSold: false,
  },
  {
    model: "Alto VXR",
    price: 2575000,
    mileage: "42,000 km",
    year: 2022,
    brand: "Alto",
    img: alto5,
    isSold: true,
  },
  {
    model: "Alto AGS",
    price: 2650000,
    mileage: "36,000 km",
    year: 2022,
    brand: "Alto",
    img: alto4,
    isSold: false,
  },
  {
    model: "Alto VXR",
    price: 2570000,
    mileage: "27,000 km",
    year: 2022,
    brand: "Alto",
    img: alto6,
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
        <h1 className="fw-bold mb-1 text-white">
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
          className="text-white text-decoration-none"
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
                {["Alto", "Mehran", "Cultus", "Wagon-R", "Swift", "Ravi"].map((brand, i) => (
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
        .car-section-bg{
          background: linear-gradient(135deg,#0f172a,#1e293b);
        }

        .header-3d{
          background: linear-gradient(145deg,#111827,#1f2937);
          box-shadow: 10px 10px 25px #0b1220, -10px -10px 25px #1f2a3a;
        }

        .sort-3d{
          background: rgba(255,255,255,0.1);
          backdrop-filter: blur(10px);
          box-shadow: 5px 5px 15px #0b1220;
        }

        .filter-3d{
          background: #111827;
          color: white;
          box-shadow: 10px 10px 30px #0b1220;
        }

        .car-card-3d{
          background: #0f172a;
          color: white;
          box-shadow: 10px 10px 25px #0b1220;
          transition: 0.3s;
        }

        .car-card-3d:hover{
          transform: translateY(-10px) scale(1.02);
          box-shadow: 15px 15px 35px #000;
        }
      `}</style>
    </section>
  );
}