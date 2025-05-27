import React from "react";
import Zigzag from "./Zigzag";

export default function Services() {
  return (
    <div className="relative w-full min-h-screen bg-black">
      <div className="relative text-white px-5 sm:px-10 py-10 max-w-5xl mx-auto">
        <h1 className="text-center font-semibold text-3xl sm:text-4xl md:text-5xl uppercase tracking-tighter mb-4">
          The GLADIATOR GYM Services
        </h1>
        <h2 className="text-center font-light text-sm sm:text-base md:text-lg tracking-tight max-w-xl mx-auto">
          The specific services offered by a gym will vary depending on the gym.
        </h2>
      </div>
      <Zigzag />
    </div>
  );
}
