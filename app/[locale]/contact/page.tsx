import Image from "next/image";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import mapimg from "./WhatsApp Image 2026-06-03 at 2.52.16 PM.jpeg";

const config = {
  suzukifatehjangTitle: "Suzuki Fatehjang Motors",
  addressDescription: "Let's make something big.",
  email: "info@suzukifatehjang.com",
  phone: Constants.PHONE,
  googleMap: Constants.GOOGLE_MAP,
  workTime: "Monday to Saturday 9:00am to 5:45pm",
};

async function Contact() {
  return (
    <section className="contact-hero py-5">
      <div className="container mt-5">

        <div className="row align-items-center g-5">

          {/* LEFT SIDE */}
          <div className="col-lg-6">

            <div className="glass-card p-5 rounded-5">

              <h2 className="fw-bold mb-2 title-gradient">
                {config.suzukifatehjangTitle}
              </h2>

              <p className="text-light mb-4">
                {config.addressDescription}
              </p>

              <div className="info-box">

                <div className="info-row">
                  <span>Email</span>
                  <Link href={`mailto:${config.email}`} className="info-link">
                    {config.email}
                  </Link>
                </div>

                <div className="info-row">
                  <span>Phone</span>
                  <Link href={"tel:" + config.phone} className="info-link">
                    {config.phone}
                  </Link>
                </div>

                <div className="info-row">
                  <span>Work Time</span>
                  <span className="text-light fw-medium">
                    {config.workTime}
                  </span>
                </div>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE MAP */}
          <div className="col-lg-6">

            <div className="map-glass">

              <Link href={config.googleMap} target="_blank">

                <Image
                  src={mapimg}
                  alt="map"
                  className="map-img"
                  priority
                />

              </Link>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;