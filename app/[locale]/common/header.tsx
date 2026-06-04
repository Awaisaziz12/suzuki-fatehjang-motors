"use client";

import React, { useState, useEffect } from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import logo from "../../[locale]/public/logopng.svg";
import { usePathname } from "next/navigation";
import { lightNavPaths } from "@/lib/utils";
import { CarBookingForm } from "./booking-form-new-cars";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  const theme = lightNavPaths.some((path) => pathname.includes(path))
    ? "light"
    : "dark";


useEffect(() => {
  let lastScrollY = window.scrollY;
  let ticking = false;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (!ticking) {
      window.requestAnimationFrame(() => {
        // top pe hamesha show
        if (currentScrollY < 10) {
          setShowHeader(true);
        }
        // scroll up → show
        else if (currentScrollY < lastScrollY) {
          setShowHeader(true);
        }
        // scroll down → hide
        else {
          setShowHeader(false);
        }

        lastScrollY = currentScrollY;
        ticking = false;
      });

      ticking = true;
    }
  };

  window.addEventListener("scroll", handleScroll, { passive: true });

  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  const toggleMenu = () => {
    setShowMobileMenu(!showMobileMenu);
    document.body.style.overflow = !showMobileMenu ? "hidden" : "auto";
  };

  const closeMenu = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest(".dropdown")) return;

    setShowMobileMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav
      id="mainNav"
      className={`navbar navbar-expand-lg fixed-top shadow-sm`}
      style={{
        background: "#000",
        transition: "all .35s ease",
        transform: showHeader ? "translateY(0)" : "translateY(-100%)",
        zIndex: 9999,
      }}
    >
      <div className="container">

        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image
            src={logo}
            alt="logo"
            width={55}
            height={55}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center text-white">
          {children}
        </div>

        {/* Desktop Button */}
        <div className="d-none d-lg-block">
          <CarBookingForm />
        </div>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0 d-lg-none"
          onClick={toggleMenu}
        >
          <span className="bi bi-list text-white fs-2"></span>
        </button>
      </div>

      {/* MOBILE MENU */}
      <div
        onClick={closeMenu}
        className="d-lg-none"
        style={{
          position: "fixed",
          top: "78px",
          left: 0,
          width: "100%",
          background: "#000",
          padding: "20px",
          transition: ".3s",
          transform: showMobileMenu
            ? "translateY(0)"
            : "translateY(-120%)",
          opacity: showMobileMenu ? 1 : 0,
          visibility: showMobileMenu ? "visible" : "hidden",
          zIndex: 9998,
        }}
      >
        <div className="d-flex flex-column gap-3 text-white">
          {children}

          <div className="pt-2">
            <CarBookingForm />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;