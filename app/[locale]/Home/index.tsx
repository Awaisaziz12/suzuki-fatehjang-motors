import { useEffect } from "react";
import Cards from "../aftersale/cards";
import Whychose from "../aftersale/whychose";
import CarosilMain from "../common/carosilmain";
import CarsPage from "../common/carspage";
import "aos/dist/aos.css";
import AOS from "aos"; // Import AOS library
export default async function HomePage() {
  
  return (
    <>
      <CarosilMain />
      <CarsPage />
      {/* <Sale /> */}
      {/* <AimsandMissions /> */}
      {/* <Missions /> */}
      {/* <Cards /> */}
        <Whychose />
      {/* <AimsandMissions /> */}
      {/* <Missions /> */}
       {/* //Chatbot */}
    </>
  );
}
