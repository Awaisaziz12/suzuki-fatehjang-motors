"use client";

import Constants from "@/data/Constants";
import React from "react";
const aftersaleConfig = {
  services: [
    "First Free Inspection (1,000 Km)",
    "Second Free Inspection (5,000 Km)",
    "Scheduled Maintenance (every 5,000 Km)",
    "A/C Service, Repair & Installation",
    "Engine Tuning (Petrol & CNG)",
    "Wheel Balancing & Alignment",
    "Brake Overhauling",
    "Suspension Repair & Overhauling",
    "Oil Change & Filter Replacement",
    "Electrical Diagnostics & Repair",
    "Battery Check & Replacement",
    "Radiator & Cooling System Service",
  ],
  maintenanceTitle: "Complete Vehicle Maintenance & Care",
};

export default function Maintaince() {
  return (
    <section className="maintenance-section">
      <div className="container">

        {/* Heading */}
        <div className="heading">
          <h2>{aftersaleConfig.maintenanceTitle}</h2>
          <p>
            Professional inspection, repair and maintenance services for all Suzuki vehicles.
          </p>
           <a
              href={`tel:${Constants.CRO}`}
              className="cta-btn"
            >
              Reserved Appointments
              <i className="bi bi-telephone-fill"></i>
            </a>
        </div>

        {/* Grid */}
        <div className="row g-3">
          {aftersaleConfig.services.map((service, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="service-item">

                <div className="check-icon">
                  <i className="bi bi-check-lg"></i>
                </div>

                <span>{service}</span>

              </div>
            </div>
          ))}
        </div>

      </div>

      <style jsx>{`
        .maintenance-section {
          background: #ffffff;
          padding: 80px 0;
        }

        .heading {
          text-align: center;
          margin-bottom: 50px;
        }

        .heading h2 {
          font-size: 36px;
          font-weight: 700;
          color: #111;
        }

        .heading p {
          color: #6c757d;
          margin-top: 10px;
        }

        .service-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 16px;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          background: #f8f9fa;
          transition: all 0.25s ease;
        }

        .service-item:hover {
          background: #ffffff;
          border-color: #0d6efd;
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(0,0,0,0.06);
        }

        .check-icon {
          width: 32px;
          height: 32px;
          min-width: 32px;
          border-radius: 50%;
          background: rgba(13, 110, 253, 0.1);
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .check-icon i {
          color: #0d6efd;
          font-size: 16px;
        }

        .service-item span {
          font-size: 14px;
          color: #212529;
          font-weight: 500;
          line-height: 1.4;
        }

        /* Responsive spacing */
        @media (max-width: 768px) {
          .heading h2 {
            font-size: 28px;
          }
        }
      `}</style>
    </section>
  );
}