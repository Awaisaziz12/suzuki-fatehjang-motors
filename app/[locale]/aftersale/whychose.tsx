import Image from "next/image";
import oil from "../public/aftersalejpg.jpg";
import Constants from "@/data/Constants";

const aftersaleConfig = {
  whyChooseUs: {
    title: "Why Choose Suzuki?",
    features: [
      "Genuine Parts",
      "Certified Technicians",
      "State-of-the-art Equipment",
    ],
    buttonText: "Reserve Appointment",
  },
};

function Whychose() {
  return (
    <section className="why-section">
      <div className="container">
        <div className="why-grid">

          {/* IMAGE SIDE */}
          <div className="why-image">
            <Image
              src={oil}
              alt="Service"
              className="img"
              priority
            />
          </div>

          {/* CONTENT SIDE */}
          <div className="why-content">
            <span className="badge">After Sales Service</span>

            <h2>{aftersaleConfig.whyChooseUs.title}</h2>

            <p className="subtitle">
              Premium service experience with trust and reliability.
            </p>

            <ul className="feature-list">
              {aftersaleConfig.whyChooseUs.features.map((feature, index) => (
                <li key={index}>
                  <span className="dot"></span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href={`tel:${Constants.CRO}`}
              className="cta-btn"
            >
              {aftersaleConfig.whyChooseUs.buttonText}
              <i className="bi bi-telephone-fill"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Whychose;