import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilEvery from "./CarosilEvery";

const everyConfig = {
  title: "Every For Everyone",
  booknow: "Book Now",
  prices: {

    vxr: "Rs 2,965,200",
  },

  specifications: [
    {
      feature: "Power Steering",
      vxr: true,
    },
    {
      feature: "Air Conditioning",
      vxr: true,
    },
    {
      feature: "Air Bags",

      vxr: true,
    },
    {
      feature: "Power Windows",
      vxr: true,
    },
    {
      feature: "ABS + EBD",
      vxr: true,
    },
    {
      feature: "Central Locking",
      vxr: true,
    },
    {
      feature: "MP3 Player",
      vxr: true,
    },
    {
      feature: "Keyless Entry",
      vxr: true,
    },
    {
      feature: "Security Alarm",
      vxr: true,
    },
    {
      feature: "Rear Wiper",
      vxr: true,
    },
  ],
};

const TickCrossIcon = ({ value }: { value: boolean }) => {
  return value ? "✔️" : "❌";
};

export default function Every() {
  return (
    <article>
      {/* <section className="bg-black inverted overflow-hidden">
        <CarosilEvery />
      </section> */}

      <section className="py-5 py-xl-5 bg-light position-relative">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {everyConfig.title}
          </h1>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1rem" }} className="flex flex-col items-center justify-center">

          <Link
            href={"tel:" + Constants.Insurance}
            className="btn border btn-green btn-with-icon rounded-pill  "
          >
            <i className="bi bi-telephone-fill"></i>
            Contact Us
          </Link>
          <CarBookingForm />
        </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8">
              <h5 className="py-2">Every Model Specifications</h5>

              {/* Adding Prices Row */}
              <table className="table table-bordered text-center">
                <thead>
                  <tr>
                    <th>Variant</th>
                    <th>VXR</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <strong>Price</strong>
                    </td>
                    <td>{everyConfig.prices.vxr}</td>
                  </tr>

                  {everyConfig.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td>{spec.feature}</td>

                      <td>
                        <TickCrossIcon value={spec.vxr} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}
