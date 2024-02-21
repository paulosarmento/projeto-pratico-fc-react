/* eslint-disable @next/next/no-img-element */
"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const useScroll = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return isScrolled;
};

const Logo = () => (
  <Image
    src="/logo.svg"
    alt="netflix"
    width={100}
    height={100}
    className="cursor-pointer"
  />
);
const NavLinks = () => (
  <ul className="hidden space-x-4 md:flex">
    <li className="headerLink">Home</li>
    <li className="headerLink">TV Shows</li>
    <li className="headerLink">Movies</li>
    <li className="headerLink">Latest</li>
    <li className="headerLink">My List</li>
  </ul>
);

const UserProfile = () => (
  <div className="flex items-center space-x-4 text-sm font-light">
    <p className="hidden cursor-not-allowed lg:inline">Kids</p>
    <Image
      src="/profile.png"
      alt="profile"
      width={50}
      height={50}
      className="rounded cursor-pointer"
    />
  </div>
);

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
