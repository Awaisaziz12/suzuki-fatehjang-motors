"use client";

import React, { useState } from "react";
import { Link } from "@/navigation";
import Image from "next/image";
import logo from "../../[locale]/public/logopng.svg";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { lightNavPaths } from "@/lib/utils";
import Constants from "@/data/Constants";
import { CarBookingForm } from "./booking-form-new-cars";

type HeaderProps = {
  children: React.ReactNode;
};

const Header = ({ children }: HeaderProps) => {
  const t = useTranslations("header");
  const pathname = usePathname();

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const theme = lightNavPaths.some((p) => pathname.includes(p))
    ? "light"
    : "dark";

  const toggleMenu = () => {
    setShowMobileMenu((prev) => {
      document.body.style.overflow = !prev ? "hidden" : "auto";
      return !prev;
    });
  };

  const closeMenu = (e: React.MouseEvent<HTMLDivElement>) => {
    if ((e.target as HTMLElement).closest(".dropdown")) return;
    setShowMobileMenu(false);
    document.body.style.overflow = "auto";
  };

  return (
    <nav id="mainNav" className="navbar navbar-expand-lg navbar-sticky bg-black text-white z-2">
      <div className="container d-flex align-items-center justify-content-between ">

        {/* LOGO */}
        <Link href="/" className="navbar-brand">
          <Image src={logo} alt="logo" width={45} height={45} />
        </Link>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler d-lg-none text-white"
          onClick={toggleMenu}
        >
          <span className="bi bi-list"></span>
        </button>

        <div className="d-none d-lg-flex gap-4 align-items-center w-100 text-white">
          <div className="w-100 text-white">
            {children}
          </div>
        </div>
<div className="d-none d-lg-block">
  <CarBookingForm />
</div>

      </div>

      {/* MOBILE MENU */}
      <div
        className={`mobile-menu d-lg-none bg-black text-white ${showMobileMenu ? "show" : "d-none"
          }`}
        onClick={closeMenu}
        style={{
          position: "absolute",
          top: "70px",
          left: 0,
          width: "100%",
          padding: "20px",
          zIndex: 999,
        }}
      >
        <div className="d-flex flex-column gap-3">
          {children}
        </div>
      </div>

    </nav>
  );
};

export default Header;