"use client";
import React from "react";
import { UserProfile } from "./UserProfile";
import { useScroll } from "../hooks/useScroll";
import { Logo } from "./Logo";
import { NavLinks } from "./NavLinks";

export default function Header() {
  const isScrolled = useScroll();

  return (
    <header
      className={`header ${isScrolled && "bg-[#141414]"}
      fixed top-0 z-50 flex w-full items-center justify-between  px-4 py-4 transition-all lg:px-10 lg:py-6`}
    >
      <div className="flex items-center space-x-2 md:space-x-8">
        <Logo />
        <NavLinks />
      </div>
      <UserProfile />
    </header>
  );
}
