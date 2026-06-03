"use client"
import Image from "next/image";
import React from "react";
import homepic from "./1 (1).jpg";
import Constants from "@/data/Constants";

const config = {
  title: "Suzuki Mechanical Workshop",
  subtitle: "Where Expertise Meets Excellence",
  desc1:
    "At Suzuki, our mechanical workshops deliver top-tier service using genuine parts, advanced tools, and certified technicians to ensure maximum vehicle performance and safety.",
  services: [
    "First Free Inspection (1,000 Km)",
    "Second Free Inspection (5,000 Km)",
    "Scheduled Maintenance (every 5,000 Km)",
    "A/C Service & Repair",
    "Engine Tuning (Petrol & CNG)",
    "Wheel Balancing & Alignment",
    "Brake & Suspension Service",
    "Electrical Diagnostics",
    "Oil & Filter Change",
  ],
  teamTitle: "Certified Expert Technicians",
  teamDesc:
    "Our trained professionals use advanced diagnostic systems and follow Suzuki global standards to ensure every repair is accurate, safe, and reliable.",
  warrantyTitle: "Genuine Parts & Warranty Support",
  warrantyDesc:
    "We only use original Suzuki parts backed by warranty to ensure durability, performance, and long-term reliability.",
  endNote:
    "Choosing Suzuki means choosing long-term reliability, safety, and peace of mind.",
};

export default function MechanicalWorkshop() {
  return (
    <article className="workshop-page">

      {/* HERO IMAGE */}
      <div className="hero py-5">
        <Image
          src={homepic}
          alt="Suzuki Mechanical Workshop"
          className="hero-img"
          priority
        />
      </div>

      <div className="container content">

        {/* TITLE */}
        <div className="title-block">
          <h1>{config.title}</h1>
          <h3>{config.subtitle}</h3>
          <p>{config.desc1}</p>
        </div>

        {/* SERVICES */}
        <div className="section">
          <div className="section-header">
            <h2>Core Services</h2>
 <a
              href={`tel:${Constants.CRO}`}
              className="cta-btn"
            >
              Book Appointments
              <i className="bi bi-telephone-fill"></i>
            </a>
          </div>

          <div className="row g-3">
            {config.services.map((service, index) => (
              <div className="col-md-6 col-lg-4" key={index}>
                <div className="service-card">
                  <i className="bi bi-check-circle-fill"></i>
                  <span>{service}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* TEAM */}
        <div className="info-card">
          <h2>{config.teamTitle}</h2>
          <p>{config.teamDesc}</p>
        </div>

        {/* WARRANTY */}
        <div className="info-card">
          <h2>{config.warrantyTitle}</h2>
          <p>{config.warrantyDesc}</p>
        </div>

        {/* END NOTE */}
        <div className="end-note">
          {config.endNote}
        </div>

      </div>

      <style jsx>{`
        .workshop-page {
          background: #f7f9fc;
        }

        .hero-img {
          width: 100%;
          height: auto;
        }

        .content {
          padding: 70px 0;
        }

        .title-block {
          text-align: center;
          margin-bottom: 50px;
        }

        .title-block h1 {
          font-size: 42px;
          font-weight: 800;
          color: #111;
        }

        .title-block h3 {
          font-size: 20px;
          color: #0d6efd;
          margin-bottom: 15px;
        }

        .title-block p {
          color: #6c757d;
          max-width: 800px;
          margin: auto;
          line-height: 1.8;
        }

        .section {
          margin-bottom: 60px;
        }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 25px;
        }

        .section-header h2 {
          font-size: 26px;
          font-weight: 700;
          color: #111;
        }

        .btn-call {
          background: #0d6efd;
          color: #fff;
          padding: 10px 18px;
          border-radius: 30px;
          text-decoration: none;
          font-weight: 600;
          transition: 0.3s;
        }

        .btn-call:hover {
          background: #084ec5;
          color: #fff;
        }

        .service-card {
          background: #fff;
          border: 1px solid #e9ecef;
          border-radius: 12px;
          padding: 14px 16px;
          display: flex;
          align-items: center;
          gap: 10px;
          transition: 0.2s;
        }

        .service-card:hover {
          border-color: #0d6efd;
          transform: translateY(-3px);
        }

        .service-card i {
          color: #0d6efd;
          font-size: 18px;
        }

        .service-card span {
          font-size: 14px;
          color: #212529;
        }

        .info-card {
          background: #fff;
          padding: 30px;
          border-radius: 14px;
          border: 1px solid #e9ecef;
          margin-bottom: 25px;
        }

        .info-card h2 {
          font-size: 22px;
          font-weight: 700;
          margin-bottom: 10px;
        }

        .info-card p {
          color: #6c757d;
          line-height: 1.8;
        }

        .end-note {
          text-align: center;
          font-weight: 500;
          color: #495057;
          margin-top: 40px;
        }

        @media (max-width: 768px) {
          .title-block h1 {
            font-size: 30px;
          }

          .section-header {
            flex-direction: column;
            gap: 10px;
            align-items: flex-start;
          }
        }
      `}</style>

    </article>
  );
}