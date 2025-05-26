import React from "react";
import { FaInstagram, FaFacebook, FaTiktok } from "react-icons/fa";

export default function Footer() {
  const navItems = [
    { heading: "About Club", link: "#" },
    { heading: "Programs", link: "#" },
    { heading: "Community", link: "#" },
    { heading: "News & Blog", link: "#" },
  ];
  const support = [
    { heading: "FAQ", link: "#" },
    { heading: "Support Center", link: "#" },
    { heading: "Contact Us", link: "#" },
  ];
  const planning = [
    { heading: "Basic Plan", link: "#" },
    { heading: "Pro Plan", link: "#" },
    { heading: "Premium Plan", link: "#" },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full  text-white p-10 border-b border-zinc-700">
        {/* Brand Info */}
        <div className="col-span-1">
          <h1 className="text-xl font-bold mb-2">The Gladiator Gym</h1>
          <p className="text-sm text-gray-400">
            Your journey to fitness begins here. Join us and experience elite
            training, modern equipment, and supportive community.
          </p>
          <div className="flex gap-4 mt-4">
            <FaInstagram
              size={24}
              className="hover:text-yellow-500 transition"
            />
            <FaFacebook
              size={24}
              className="hover:text-yellow-500 transition"
            />
            <FaTiktok size={24} className="hover:text-yellow-500 transition" />
          </div>
        </div>

        {/* Website Navigation */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Website</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-yellow-400 transition"
                >
                  {item.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Support */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Support</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {support.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-yellow-400 transition"
                >
                  {item.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Planning */}
        <div>
          <h2 className="text-lg font-semibold mb-3">Planning</h2>
          <ul className="space-y-2 text-gray-300 text-sm">
            {planning.map((item, index) => (
              <li key={index}>
                <a
                  href={item.link}
                  className="hover:text-yellow-400 transition"
                >
                  {item.heading}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <footer className=" text-white text-center text-sm py-4">
        &copy; 2023 The Gladiator Gym. All rights reserved.
      </footer>
    </>
  );
}
