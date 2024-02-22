import Image from "next/image";
import React from "react";

export const Logo = () => (
  <Image
    src="/logo.svg"
    alt="netflix"
    width={100}
    height={100}
    className="cursor-pointer"
  />
);
