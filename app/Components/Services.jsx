import React from "react";
import Zigzag from "./Zigzag";
export default function Services() {
  return (
    <div className="relative w-full min-h-screen ">
      <div className="relative text-white p-10 ">
        <h1 className="text-center font-semibold text-[4vw] uppercase tracking-tighter">
          The GLADIATOR GYM Services
        </h1>
        <h1 className="text-center font-light text-lg  tracking-tighter">
          The specific services offered by a gym will vary depending on the gym.
        </h1>
      </div>
      <Zigzag />
    </div>
  );
}
