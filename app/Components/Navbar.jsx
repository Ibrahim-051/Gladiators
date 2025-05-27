"use client";
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 bg-black text-white shadow-md z-50">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between px-4 sm:px-6 py-4">
        <span className="">
          <img src="/img1.png" alt="Logo" className="w-20 " />
        </span>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 font-semibold text-sm">
          <li className="cursor-pointer hover:text-yellow-500">Home</li>
          <li className="cursor-pointer hover:text-yellow-500">About</li>
          <li className="cursor-pointer hover:text-yellow-500">Contact</li>
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden w-auto">
          <button onClick={() => setNavOpen(!navOpen)}>
            {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {navOpen && (
        <ul className="md:hidden flex flex-col items-center gap-4 bg-black px-6 pb-4 text-center text-sm">
          <li className="w-full hover:text-yellow-500">Home</li>
          <li className="w-full hover:text-yellow-500">About</li>
          <li className="w-full hover:text-yellow-500">Contact</li>
        </ul>
      )}
    </nav>
  );
}

// "use client";
// import Link from "next/link";
// import React, { useState, useEffect } from "react";

// export default function Navbar() {
//   const [show, setShow] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;

//       if (currentScrollY > lastScrollY) {
//         setShow(false);
//       } else {
//         setShow(true);
//       }

//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, [lastScrollY]);

//   return (
//     <div
//       className={`fixed  flex justify-between top-0 left-0 w-full px-6 py-4
//         backdrop-blur-md bg-black/20 text-white z-50
//         transition-transform duration-300
//         ${show ? "translate-y-0" : "-translate-y-full"}`}
//     >
//       <div className="logo ">
//         <span className="flex items-center ">
//           <img className="w-24 h-10" src="/img1.png" alt="" />
//         </span>
//       </div>
//       <div className="space-x-4 sm:space-x-6 md:space-x-8 lg:space-x-10">
//         <Link href={"/"} className="hover:underline">
//           Home
//         </Link>
//         <Link href={"/about"} className="hover:underline">
//           About
//         </Link>
//         <Link href={"/contact"} className="hover:underline">
//           Contact
//         </Link>
//       </div>
//     </div>
//   );
// }
