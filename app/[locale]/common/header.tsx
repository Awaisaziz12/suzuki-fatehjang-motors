"use client";

import React, { useState } from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import logo from "../../[locale]/public/logopng.svg";
import { usePathname } from "next/navigation";

import Constants from "@/data/Constants";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);


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
  className="navbar navbar-expand-lg fixed-top shadow-sm flex"
  style={{
    background: "#000",
    top: "38px", // TopBar ki height
    zIndex: 9998,
width: "100%",
  }}
>
      <div className="container">

        {/* Logo */}
        <Link href="/" className="navbar-brand">
          <Image
            src={logo}
            alt="logo"
            width={30}
            height={30}
            priority
          />
        </Link>

        {/* Desktop Menu */}
        <div className="d-none d-lg-flex flex-grow-1 justify-content-center text-white ">
          {children}
        </div>

       {/* Desktop WhatsApp Button */}
<div className="d-none d-lg-block">
  
  <a
    href={"https://wa.me/" + Constants.PHONE.replace(/\D/g, "")}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-green whatsapp-btn text-white d-flex align-items-center gap-1 px-2 py-1 rounded"
  >
    {/* WhatsApp SVG Icon */}

  <i className="bi bi-whatsapp text-white fs-7"></i>
    WhatsApp Now

    
  </a>
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
          top: "100px",
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
        <div className="d-flex flex-column gap-2 text-white">
          {children}

          
        </div>
      </div>
    </nav>
  );
};

export default Header;