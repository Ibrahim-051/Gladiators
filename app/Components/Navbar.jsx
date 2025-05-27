"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function Navbar() {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);
  
  return (
    <div
      className={`fixed  flex justify-between top-0 left-0 w-full px-6 py-4 
        backdrop-blur-md bg-black/20 text-white z-50
        transition-transform duration-300
        ${show ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="logo ">
        <span className="flex items-center ">
          <img className="w-24 h-10" src="/img1.png" alt="" />
        </span>
      </div>
      <div className="space-x-4">
        <Link href={"/"} className="hover:underline">
          Home
        </Link>
        <Link href={"/about"} className="hover:underline">
          About
        </Link>
        <Link href={"/contact"} className="hover:underline">
          Contact
        </Link>
      </div>
    </div>
  );
}
