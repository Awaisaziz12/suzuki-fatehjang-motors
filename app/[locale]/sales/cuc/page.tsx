"use client";

import Image from "next/image";
import React from "react";
import stock from "./CUCstock.jpeg";

export default function CUC() {
  return (
    <section className="py-5 car-section-bg finance-page">
      <div className="container">
     {/* Heading */}
<div
  className="text-center mb-5 py-5 px-4"
  style={{
    background: "linear-gradient(135deg, #ffffff, #f3f6fa)",
    borderRadius: "24px",
    boxShadow:
      "0 20px 45px rgba(0,0,0,0.12), inset 0 2px 6px rgba(255,255,255,0.8)",
    border: "1px solid rgba(255,255,255,0.7)",
    transform: "perspective(1000px) rotateX(2deg)",
    backdropFilter: "blur(10px)",
    maxWidth: "900px",
    margin: "0 auto",
  }}
>
  <h1
    className="fw-bold display-4"
    style={{
      color: "#222",
      textShadow: "2px 2px 8px rgba(0,0,0,0.15)",
    }}
  >
    Available Used Cars
  </h1>

  <p
    style={{
      color: "#6c757d",
      fontSize: "1.1rem",
      marginTop: "12px",
    }}
  >
    Browse our certified used cars with verified quality and competitive
    prices.
  </p>
</div>

        {/* Card */}
        <div
          className="mx-auto shadow rounded-4 overflow-hidden bg-white"
          style={{ maxWidth: "900px" }}
        >
          <a href="https://l.facebook.com/l.php?u=https%3A%2F%2Fcrm.suzukipakistan.com%2Fsocial_media%2Fm%3DFatehjang%2520Motors%2520PVT%2520LTD-gl%3D543-rp%3D20389-sp%3DDealFB%3Ffbclid%3DIwcGRvZgVleHRuA2FlbQIxMABicmlkETFLVWE1VGpYZEZaOXlEUWJkc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHpQKcbWfEzO1tymsHfdQCug_VxM2nbrRkClmW9CFLMSnNtUR4JOl3oRykHhL_aem_-C51fICZy4TBi61lVNxWlA&h=AUCUCPUjfmE0H8bBnfUzsWGQ8U48WyJvDbotvjfN7dQhFrJRPhNRw2AnXtRhY6fofMeb4GOoOdDmLmiODQbIdNB_8Y-1v6dWxdHnHggXqy-Clp4hT7ShvK-yLf4K8FWpVD1SZB9BZUmT4Sqk&__tn__=-UK-R&c[0]=AUCVSQH9IFOHqDgEr3_U3ZM0ElqEu9dv2JBcX74V1ewx6WxBEO6cUq1krLcDYtlF2Q8pjQcTs_okT-9WyCTG8h_a2HO5hbi6BaolnflTMWSkGZ3VT5qN6GgF4sJUAzm_irslqeSdU_3BiHFwr7VFF59ExYVzc_9fdPgbMCVS9j3agfA3P0v5NhNdoedFfciA7vFffdA1nvt2-6EfCzWKYAISTw" className="text-decoration-none">
            <div style={{ overflow: "hidden" }}>
              <Image
                src={stock}
                alt="Used Cars Stock"
                className="img-fluid w-100"
                style={{
                  transition: "0.4s",
                  cursor: "pointer",
                }}
              />
            </div>

            <div className="p-4 text-center">
              <h4 className="fw-bold mb-2">Certified Used Car Stock</h4>
              <p className="text-muted mb-3">
                Click below to explore our latest available used cars.
              </p>

              <button className="btn btn-success px-4 " >
                Used Car Enquiry

              </button>

            </div>
          </a>
        </div>
      </div>
    </section>
  );
}