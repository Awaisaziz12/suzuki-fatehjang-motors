import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";

function Footer() {
  return (
    <footer className="modern-footer">
      <div className="container">

        {/* TOP SECTION */}
        <div className="footer-grid">

          {/* BRAND */}
          <div className="footer-col">
            <h3 className="brand">
              Suzuki Fatehjang Motors
            </h3>
            <p className="desc">
              Trusted automotive service provider delivering quality, reliability and care.
            </p>
          </div>

          {/* CONTACT NUMBERS */}
          <div className="footer-col">
            <h4>Contact Numbers</h4>

            <a href={`tel:${Constants.PHONE}`} className="contact-box">
              📞 UAN: {Constants.PHONE}
            </a>

            <a href={`tel:${Constants.PHONE}`} className="contact-box">
              📱 Phone: {Constants.PHONE}
            </a>
          </div>

          {/* ADDRESS */}
          <div className="footer-col">
            <h4>Address</h4>
            <p className="address">
              📍 Main Pindi Fatehjang G.T Road, Near Shahpur Dam, Pakistan
            </p>
            <h4>Email</h4>
            <p className="address">
          <span>✉️ info@suzukifatehjang.com</span>
            </p>
          </div>

        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">

          <div className="social">
            <a href="https://www.facebook.com/SuzukiFatehjangMotor"><i className="bi bi-facebook"></i></a>
            <a href="https://www.instagram.com/suzukifatehjangmotors"><i className="bi bi-instagram"></i></a>
            <a href="https://www.youtube.com/channel/UC7Zdh3yjhWIA8fsDc03hSCg"><i className="bi bi-youtube"></i></a>
            <a href="https://pk.linkedin.com/company/suzuki-fatehjang-motors-pvt-ltd"><i className="bi bi-linkedin"></i></a>
          </div>

          <p className="copy">
            © {new Date().getFullYear()} Suzuki Fatehjang Motors. All rights reserved.
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;