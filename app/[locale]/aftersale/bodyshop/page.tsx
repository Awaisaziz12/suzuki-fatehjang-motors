"use client";
import Image from "next/image";
import React from "react";
import bodyShopImg from "../../public/paint-booth-banner.jpg";
import Constants from "@/data/Constants";

const config = {
  title: "Body & Paint Shop",
  subtitle: "Precision in Every Detail",
  desc1:
    "Suzuki Body & Paint Shop restores your vehicle to factory condition using advanced repair systems, genuine parts, and expert technicians ensuring safety, durability, and perfect finish.",
  services: [
    "Collision Repair & Restoration",
    "Paintless Dent Removal",
    "Full Body Repainting",
    "Scratch & Scuff Repair",
    "Bumper & Fender Repair",
    "Frame Structural Repair",
    "Glass Replacement",
    "Custom Paint Matching",
  ],
  teamTitle: "Certified Body Repair Experts",
  teamDesc:
    "Our trained technicians specialize in Suzuki-approved repair techniques ensuring accurate restoration, structural safety, and flawless finishing.",
  warrantyTitle: "Genuine Parts & Quality Assurance",
  warrantyDesc:
    "We use only genuine Suzuki parts backed by warranty to ensure long-lasting performance, safety, and factory-level finish.",
  endNote:
    "From minor dents to full restorations, Suzuki ensures perfection in every repair.",
};

export default function BodyShop() {
  return (
    <article className="bodyshop-page">

      {/* HERO IMAGE */}
      <div className="hero py-6">
        <Image
          src={bodyShopImg}
          alt="Suzuki Body and Paint Shop"
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

           <a
              href={`tel:${Constants.CRO}`}
              className="cta-btn"
            >
              Book Appointments
              <i className="bi bi-telephone-fill"></i>
            </a>
        </div>

        {/* SERVICES */}
        <div className="section">
          <h2>Repair Services</h2>

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

        {/* INFO CARDS */}
        <div className="info-card">
          <h2>{config.teamTitle}</h2>
          <p>{config.teamDesc}</p>
        </div>

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
        .bodyshop-page {
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
          max-width: 850px;
          margin: auto;
          line-height: 1.8;
        }

        .btn-call {
          display: inline-block;
          margin-top: 20px;
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
        }

        .section {
          margin: 60px 0;
        }

        .section h2 {
          font-size: 26px;
          font-weight: 700;
          margin-bottom: 20px;
          color: #111;
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
          margin-top: 40px;
          font-weight: 500;
          color: #495057;
        }

        @media (max-width: 768px) {
          .title-block h1 {
            font-size: 30px;
          }
        }
      `}</style>

    </article>
  );
}