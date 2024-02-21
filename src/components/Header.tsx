/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Header() {
  return (
    <header className="fixed top-0 z-10 w-full flex items-center justify-between px-4 py-4 lg:px-10 lg:py-6">
      <img src="https://rb.gy/ulxxee" alt="netflix" width={120} height={120} />
      <ul>
        <li>Home</li>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>Latest</li>
      </ul>
    </header>
  );
}