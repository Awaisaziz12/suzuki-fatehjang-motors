import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";

/* =========================
   CONFIG
========================= */

const fronxConfig = {
  title: "Suzuki FRONX",
  booknow: "Book Now",

  prices: {
    mt: "Rs 5,999,999/-",
    glAt: "Rs 6,099,999/-",
    glxMono: "Rs 6,699,999/-",
    glxTwoTone: "Rs 6,774,999/-",
  },

  specifications: [
    {
      feature: "Power Steering",
      mt: true,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Air Conditioning",
      mt: true,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Push Start",
      mt: false,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Cruise Control",
      mt: false,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "360 Camera",
      mt: false,
      glAt: false,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Wireless Charger",
      mt: false,
      glAt: false,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Rear AC Vents",
      mt: false,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Android Auto / Apple CarPlay",
      mt: true,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Alloy Wheels",
      mt: false,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "6 Airbags",
      mt: false,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "ABS + EBD",
      mt: true,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Hill Hold Control",
      mt: false,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Keyless Entry",
      mt: false,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },

    {
      feature: "Parking Sensors",
      mt: true,
      glAt: true,
      glxMono: true,
      glxTwoTone: true,
    },
  ],
};

/* =========================
   COMPONENTS
========================= */

const TickCrossIcon = ({ value }: { value: boolean }) => {
  return <>{value ? "✔️" : "❌"}</>;
};

const TableRow = ({ spec }: any) => {
  return (
    <tr>
      <td>{spec.feature}</td>

      <td>
        <TickCrossIcon value={spec.mt} />
      </td>

      <td>
        <TickCrossIcon value={spec.glAt} />
      </td>

      <td>
        <TickCrossIcon value={spec.glxMono} />
      </td>

      <td>
        <TickCrossIcon value={spec.glxTwoTone} />
      </td>
    </tr>
  );
};

const PriceRow = ({ prices }: any) => {
  return (
    <tr>
      <td>
        <strong>Price</strong>
      </td>

      <td>{prices.mt}</td>
      <td>{prices.glAt}</td>
      <td>{prices.glxMono}</td>
      <td>{prices.glxTwoTone}</td>
    </tr>
  );
};

const FronxTable = () => {
  return (
    <table className="table table-bordered table-striped text-center align-middle">

      <thead className="table-dark">
        <tr>
          <th>Features</th>
          <th>MT</th>
          <th>GL AT</th>
          <th>GLX 6AT Mono</th>
          <th>GLX 6AT Two Tone</th>
        </tr>
      </thead>

      <tbody>

        <PriceRow prices={fronxConfig.prices} />

        {fronxConfig.specifications.map((spec, index) => (
          <TableRow key={index} spec={spec} />
        ))}

      </tbody>
    </table>
  );
};

/* =========================
   MAIN COMPONENT
========================= */

const SpecificationsFronx = () => {
  return (
    <article>
      <section className="py-4 py-xl-8 bg-light position-relative">

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center">

          <h1 className="display-3 fw-bold lh-sm text-dark ">
            {fronxConfig.title}
          </h1>

          <div
            style={{ display: "flex", gap: "1rem", marginTop: "1rem" }}
            className="flex flex-col items-center justify-center"
          >
            <Link
              href={"tel:" + Constants.Insurance}
              className="btn border btn-green btn-with-icon rounded-pill"
            >
              <i className="bi bi-telephone-fill"></i>
              Contact Us
            </Link>

            <CarBookingForm />
          </div>
        </div>

        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-12">

              <h5 className="py-2 text-center">
                Suzuki FRONX Variants Comparison
              </h5>

              <FronxTable />

            </div>
          </div>
        </div>

      </section>
    </article>
  );
};

export default SpecificationsFronx;