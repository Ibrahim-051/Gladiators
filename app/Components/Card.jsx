import React from "react";

export default function Card({ desc, logo, heading }) {
  return (
    <div className="w-full sm:w-[45%] md:w-[30%] lg:w-[22%] min-h-[300px] bg-zinc-900 text-white border border-black rounded-xl p-5 hover:scale-105 transition-transform duration-300">
      <div className="mb-4 text-4xl">{logo}</div>
      <h1 className="font-semibold text-lg mb-2">{heading}</h1>
      <p className="font-light text-sm">{desc}</p>
    </div>
  );
}
