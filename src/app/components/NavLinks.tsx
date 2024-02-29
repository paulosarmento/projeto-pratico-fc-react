import Link from "next/link";
import React from "react";

export const NavLinks = () => (
  <ul className="hidden space-x-4 md:flex">
    <Link href="/search?genre=Comedy">Comedy</Link>
    <Link href="/search?genre=Action">Action</Link>
    <Link href="/search?genre=Animation">Animation</Link>
    <Link href="/search?genre=Adventure">Adventure</Link>
  </ul>
);
