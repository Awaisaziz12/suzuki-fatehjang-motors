import React from "react";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import QR from "../public/download.png";
import Image from "next/image";

async function Footer() {
  return (
    <footer className="bg-light text-black py-6">
      <div className="container flex flex-column justify-content-between">
        {/* Top Row: Brand, Contact, QR Code */}
        <div className="row g-4 mb-5">
          {/* Brand & Address */}
          <div className="col-lg-4">
            <Link href="/" className="d-block mb-3 text-black text-decoration-none">
              <h4 className="mb-0">Suzuki Racecourse Motors</h4>
            </Link>

            <div className="mb-2">
              <Link
                href="https://maps.app.goo.gl/rCKVAV9QwJbRsXhz7"
                className="d-block text-black text-decoration-none"
              >
                <i className="bi bi-geo-alt-fill text-danger me-2"></i>
                 299/A, Main Peshawar Road, Rawalpindi Cantonment, Pakistan</Link>
            </div>

            <div>
              <a href="mailto:info@suzukiracecoursemotors.com" className="text-black text-decoration-none">
                <i className="bi bi-envelope-fill me-2"></i>
                info@suzukiracecoursemotors.com
              </a>
            </div>
            <div>
              <a href="https://newcrm.paksuzuki.com.pk/book-your-suzuki-automobile?tabRadioGroup=False&utm_campaign=False&utm_source=Dealer%20Facebook&utm_medium=Suzuki%20Racecourse%20Motors&did=Suzuki%20Racecourse%20Motors" className="text-black text-decoration-none">
                <i className="bi bi-browser-safari me-2"></i>
                https://newcrm.paksuzuki.com.pk
             </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 flex  justify-content-center text-center  align-items-center">
          
            <div>
               <Link href={`tel:${Constants.PHONE}`} className="text-black text-decoration-none d-block mb-2">
                <h6>UAN : {Constants.PHONE}</h6> 
              </Link>
              <h6 className="mb-1">Phone: +92 51 5174333</h6>
              <h6>Phone: +92 51 5174334</h6>
            </div>
          </div>

          {/* QR Code */}
          <div className="col-lg-4 col-lg-4 flex  justify-content-center text-center  align-items-center">
            <h6 className="mb-2">Scan to Visit Us</h6>
          
             <Image src={QR} alt="logo" className="logo" />
          </div>
        </div>

        {/* Social Media + Copyright */}
        <div className="row border-top pt-4 align-items-center text-center text-lg-start">
          {/* Social Media Icons */}
          <div className="col-lg-6 mb-3 mb-lg-0">
            <ul className="list-inline mb-0">
              <li className="list-inline-item me-3">
                <a
                  href="https://www.facebook.com/suzukiracecourse"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <i className="bi bi-facebook" style={{ color: "#3b5998", fontSize: "24px" }}></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  href="https://www.instagram.com/suzukiracecoursemotors/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <i className="bi bi-instagram" style={{ color: "#e4405f", fontSize: "24px" }}></i>
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a
                  href="https://www.youtube.com/@suzukiracecoursemotors8314"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                >
                  <i className="bi bi-youtube" style={{ color: "#FF0000", fontSize: "24px" }}></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a
                  href="https://www.linkedin.com/company/suzuki-racecourse-motors/mycompany/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin" style={{ color: "#0077b5", fontSize: "24px" }}></i>
                </a>
              </li>
            </ul>
          </div>

          {/* Copyright */}
          <div className="col-lg-6 text-lg-end">
            <p className="mb-0 small text-muted">
              © {new Date().getFullYear()} Suzuki Racecourse Motors. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
