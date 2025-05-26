import React from "react";
export default function Card({ desc, logo, heading }) {
  return (
    <div className="m-1 px-5 py-10 rounded-xl w-[25vw] h-[30vw] bg-zinc-900 text-white border-[1px] border-black hover:scale-105 duration-100">
      <span className="hover:scale-105 duration-100">{logo}</span>
      <h1 className="font-semibold">{heading}</h1>
      <p className="font-light  ">{desc}</p>
    </div>
  );
}
