import React from "react";
import Image from "next/image";
import nextjs from "../../[locale]/public/logossuzuki/WhatsApp Image 2025-07-19 at 10.01.27_e9bc8655.jpg";
import bootstrap from  "../../[locale]/public/logossuzuki/WhatsApp Image 2025-07-19 at 10.02.33_931df12a.jpg";
import github from  "../../[locale]/public/logossuzuki/WhatsApp Image 2025-07-19 at 10.02.47_cb413205.jpg";
import taliwind from  "../../[locale]/public/logossuzuki/WhatsApp Image 2025-07-19 at 10.02.58_75ec692e.jpg";
import photoshop from  "../../[locale]/public/logossuzuki/WhatsApp Image 2025-07-19 at 10.03.10_9d5e5de6.jpg";
import javalogo from  "../../[locale]/public/logossuzuki/WhatsApp Image 2025-07-19 at 10.03.34_f3a74141.jpg";
import meta from  "../../[locale]/public/logossuzuki/WhatsApp Image 2025-07-19 at 10.03.54_b299b0b2.jpg";
function SuzukiInfraLogo() {
  return (
    <section className=" min-vh-40 position-relative overflow-hidden bg-white inverted " >
      <div
        className="row align-items-center justify-content-center"
        style={{ display: "grid" , paddingBottom: "1rem" , }}
        data-aos="zoom-in"
      >

        <div className="container ">
          <div className="carousel carousel-align text-center gap-2" >
            <div
              className="gap3"
              style={{ gap: "2rem" }}
              data-carousel='{"gutter": 48, "loop": false, "nav": false, "controls": false, "responsive": {"0": {"items": 2}, "768": {"items": 4}, "1200": {"items": 5}}}'
            >
              <div>
                <Image src={nextjs} alt="logo" className="logo" />
              </div>
              <div>
                <Image src={bootstrap} alt="logo" className="logo" />
              </div>
              <div>
                <Image src={github} alt="logo" className="logo" />
              </div>
              <div>
                <Image src={taliwind} alt="logo" className="logo" />
              </div>
              <div>
                <Image src={javalogo} alt="logo" className="logo" />
              </div>
              <div>
                <Image src={photoshop} alt="logo" className="logo" />
              </div>
              <div>
                <Image src={meta} alt="logo" className="logo" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SuzukiInfraLogo;
