"use client";

import React from "react";
import Constants from "@/data/Constants";

const TopBar = () => {
  return (
    <div
  className="w-100 bg-dark text-white "
  style={{
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    zIndex: 9999,
    padding: "7px 0",
  }}
>
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">

          {/* LEFT */}
          <div className="d-flex align-items-center gap-3 flex-wrap">

            <a
              href={`tel:${Constants.PHONE}`}
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <span>📞</span>
              <span>{Constants.PHONE}</span>
            </a>

            <a
              href="mailto:info@suzukifatehjang.com"
              className="text-white text-decoration-none d-none d-md-flex align-items-center gap-1"
            >
              <span>✉️</span>
              <span>info@suzukifatehjang.com</span>
            </a>

          </div>

          {/* RIGHT */}
          <div className="d-flex align-items-center gap-3">

            {/* Facebook */}
            <a
              href="https://www.facebook.com/SuzukiFatehjangMotor"
              target="_blank"
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 1 0-11.6 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.9.2 1.9.2v2.1h-1.1c-1.1 0-1.5.7-1.5 1.4V12h2.6l-.4 2.9h-2.2v7A10 10 0 0 0 22 12z" />
              </svg>
              <span className="d-none d-lg-inline">Facebook</span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/suzukifatehjangmotors"
              target="_blank"
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5zM17 6.2a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
              </svg>
              <span className="d-none d-lg-inline">Instagram</span>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com"
              target="_blank"
              className="text-white text-decoration-none d-flex align-items-center gap-1"
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M21.6 7.2a3 3 0 0 0-2.1-2.1C17.7 4.5 12 4.5 12 4.5s-5.7 0-7.5.6A3 3 0 0 0 2.4 7.2 31 31 0 0 0 2 12a31 31 0 0 0 .4 4.8 3 3 0 0 0 2.1 2.1c1.8.6 7.5.6 7.5.6s5.7 0 7.5-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 22 12a31 31 0 0 0-.4-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
              </svg>
              <span className="d-none d-lg-inline">YouTube</span>
            </a>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;