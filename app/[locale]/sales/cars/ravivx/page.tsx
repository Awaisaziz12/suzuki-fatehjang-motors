import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import CarosilsRavi from "./carosilcultus";

const raviConfig = {
  title: "Suzuki FRONX",
  booknow: "Book Now",
  overview: {
    heading: "Suzuki FRONX ",
    content: `The Suzuki FRONX is a compact and versatile vehicle designed to meet the needs of urban drivers. With its modern design, efficient performance, and practical features, the FRONX is an ideal choice for those seeking a reliable and stylish car for city commuting and everyday use.`,
  },
  sections: [
    {
      title: "Performance and Efficiency",
      content: `The Suzuki FRONX is equipped with a fuel-efficient engine that delivers a balance of power and economy. Its compact size and nimble handling make it easy to maneuver through city traffic, while its efficient fuel consumption helps reduce running costs.`,
    },
    {
      title: "Safety Features",
      content: `The FRONX comes with a range of safety features to ensure the well-being of its occupants. These include airbags, anti-lock braking system (ABS), electronic stability control (ESC), and a reinforced body structure designed to absorb impact in the event of a collision.`,
    },
  ],
  specifications: [
    {
      feature: "FRONX Price",
      value: "Rs 2,499,000",
    },
    {
      feature: "Dimensions (LxWxH)",
      value: "3995 x 1765 x 1550 mm , wheelbase: 2520 mm",
    },
    {
      feature: "Engine Type",
      value: "1.5L Petrol Engine",
    },
    {
      feature: "Power & Torque",
      value: "103 hp @ 6000 rpm, 138 Nm @ 4400 rpm",
    },

    {
      feature: "Transmission",
      value: "4-speed automatic",
    },
    {
      feature: "Fuel Tank Capacity",
      value: "37 liters",
    },
    {
      feature: "Luggage Capacity",
      value: "605 L (Rear Floded)",
    },
    {
      feature: "Rims & Tires",
      value: "16-inch alloy wheels",
    },
    {
      feature: "Infotainment System",
      value: "9-inch touchscreen with Apple CarPlay and Android Auto",
    },
    {
      feature: "Driver Assistance",
      value: "Cruise Control, HHC , 360 Camera",
    },
    {
      feature: "Safety Features",
      value: "6 Airbags, VSA , Parking Sensors , ABS with EBD",
    },
    {
      feature: "Interior Features",
      value: "Digital Climate Controle, Rear AC Vents, Wireless Charger, Steering Controls",
    },
    {
      feature: "Other Features",
      value: "Keyless Entry, Push Start/Stop Button, Rear USB Ports",
    },
  ],
};

const SpecificationRow = ({
  feature,
  value,
}: {
  feature: string;
  value: string;
}) => {
  return (
    <tr>
      <td>{feature}</td>
      <td>{value}</td>
    </tr>
  );
};

export default function Ravi() {
  return (
    <article>
      {/* <section className="bg-black inverted overflow-hidden">
        <CarosilsRavi />
      </section> */}

      <section className="py-5 py-xl-5 bg-light position-relative">
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center p-4">
          <h1 className="display-3 fw-bold lh-sm text-dark mb-4 py-2">
            {raviConfig.title}
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
              <h5 className="py-2">Suzuki Ravi Specifications</h5>
              <table className="table table-bordered text-center">
                <thead>
                  <tr>Digital
                    <th>Feature</th>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody>
                  {raviConfig.specifications.map((spec, index) => (
                    <SpecificationRow
                      key={index}
                      feature={spec.feature}
                      value={spec.value}
                    />
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
