import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import { CarBookingForm } from "@/app/[locale]/common/booking-form-new-cars";
import Carosilfronx from "@/app/[locale]/sales/cars/fronx/carosilfronx";
import Textcarosil from "./textcarosil";
import Carosilmain from "./carosilmainp";
import Carosilthree from "./carosilthree";
import SpecificationsFronx from "./fronxspecification";

const FronxConfig = {
  title: "Suzuki FRONX",
  booknow: "Book Now",

  overview: {
    heading: "Suzuki FRONX",
    content: `The Suzuki FRONX is a stylish crossover SUV designed for modern urban driving. It combines sporty looks, advanced technology, fuel efficiency, and practical comfort, making it an ideal choice for families and daily commuters.`,
  },

  sections: [
    {
      title: "Performance and Efficiency",
      content: `The Suzuki FRONX is powered by a responsive 1.5L petrol engine that delivers smooth performance with impressive fuel economy. Its lightweight body and refined suspension provide a comfortable driving experience both in city traffic and on highways.`,
    },

    {
      title: "Safety Features",
      content: `The FRONX offers modern safety technologies including airbags, ABS with EBD, Vehicle Stability Assist (VSA), Hill Hold Control (HHC), rear parking sensors, and a reinforced body structure for enhanced passenger protection.`,
    },
  ],

  variants: [
    {
      name: "FRONX MT",
      price: "Rs : 5,999,999/-",
      filer: "Rs : 120,000/-",
      nonFiler: "Rs : 360,000/-",
      transmission: "Manual",
      colorType: "Monotone",
    },

    {
      name: "FRONX GL AT",
      price: "Rs : 6,399,999/-",
      filer: "Rs : 15,000/-",
      nonFiler: "Rs : 390,000/-",
      transmission: "Automatic",
      colorType: "Monotone",
    },

    {
      name: "FRONX GLX 6AT Monotone",
      price: "Rs : 6,799,999/-",
      filer: "Rs : 18,000/-",
      nonFiler: "Rs : 420,000/-",
      transmission: "6-Speed Automatic",
      colorType: "Monotone",
    },

    {
      name: "FRONX GLX 6AT Two Tone",
      price: "Rs : 6,899,999/-",
      filer: "Rs : 18,000/-",
      nonFiler: "Rs : 430,000/-",
      transmission: "6-Speed Automatic",
      colorType: "Two Tone",
    },
  ],

  specifications: [
    {
      feature: "Engine Type",
      value: "1.5L Petrol Engine",
    },

    {
      feature: "Dimensions (LxWxH)",
      value: "3995 x 1765 x 1550 mm",
    },

    {
      feature: "Wheelbase",
      value: "2520 mm",
    },

    {
      feature: "Power & Torque",
      value: "103 hp @ 6000 rpm, 138 Nm @ 4400 rpm",
    },

    {
      feature: "Transmission",
      value: "5-Speed Manual / 6-Speed Automatic",
    },

    {
      feature: "Fuel Tank Capacity",
      value: "37 Liters",
    },

    {
      feature: "Luggage Capacity",
      value: "605 L (Rear Folded)",
    },

    {
      feature: "Rims & Tires",
      value: "16-inch Alloy Wheels",
    },

    {
      feature: "Infotainment System",
      value: "9-inch Touchscreen with Apple CarPlay & Android Auto",
    },

    {
      feature: "Driver Assistance",
      value: "Cruise Control, Hill Hold Control, 360 Camera",
    },

    {
      feature: "Safety Features",
      value: "6 Airbags, ABS with EBD, VSA, Parking Sensors",
    },

    {
      feature: "Interior Features",
      value:
        "Digital Climate Control, Rear AC Vents, Wireless Charger, Steering Controls",
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

export default function Fronx() {

  return (
    <>
      

      <Carosilfronx />
      <SpecificationsFronx />





      <Carosilthree />
      <Textcarosil />
    </>
  );
}
