"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { GiStrongMan } from "react-icons/gi";
import { MdCardMembership } from "react-icons/md";
export default function Leading() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className=" w-full relative min-h-screen pt-[10vw]  z-[-1] [background-image:url('https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGd5bXxlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-no-repeat"
    >
      <div className="p-4 leading-none ">
        <div className="flex  items-center">
          <div className="absolute inset-0 z-[-2] bg-black opacity-40"></div>
          <motion.h1
            className="font-bold text-[6vw] text-white tracking-tighter uppercase"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            Build Your Body
          </motion.h1>
          {/* <div className="w-[10vw] h-[4vw]  pt-1 ml-4 ">
            <span>
              <img src="/img1.png" alt="" />
            </span>
          </div> */}
        </div>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-bold text-[6vw] [-webkit-text-stroke-width:1px]
          [-webkit-text-stroke-color:#FFFFFF] text-transparent tracking-tighter uppercase"
        >
          Build Your
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="font-bold text-[6vw]  [-webkit-text-stroke-width:1px]
          [-webkit-text-stroke-color:#FFFFFF] text-transparent tracking-tighter uppercase"
        >
          Habits!
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, width: "100vh" }}
          animate={{ opacity: 1, width: "100vh" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
          className="font-light text-[1.5vw] text-white tracking-tight mt-5"
        >
          The best way to get started is to quit talking and begin doing.
        </motion.h1>
      </div>
      <div>
        <motion.div
          initial={{ opacity: 0, width: "100vh" }}
          animate={{ opacity: 1, width: "100vh" }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 3 }}
          className="flex  lg:flex-row sm:flex-col m-5  gap-10 w-full max-w-5xl text-white text-center"
        >
          <div>
            <h2 className="text-[2vw] font-light">70+</h2>
            <p className="text-sm mt-2">Fithouse Club</p>
          </div>
          <div>
            <h2 className="text-[2vw] font-light">235k+</h2>
            <p className="text-sm mt-2">Visitors Monthly</p>
          </div>
          <div>
            <h2 className="text-[2vw] font-light">98+</h2>
            <p className="text-sm mt-2">Pro Equipments</p>
          </div>
          <div>
            <h2 className="text-[2vw] font-light">100%</h2>
            <p className="text-sm mt-2">Quality</p>
          </div>
          <div>
            <h2 className="text-[2vw] font-light">78</h2>
            <p className="text-sm mt-2">Branches</p>
          </div>
        </motion.div>
      </div>
      <div className="flex justify-center pb-10 pl-5 gap-5 items-center">
        <a href={"/about"} className="flex items-center gap-2">
          <button className="flex items-center gap-2 justify-center bg-yellow-500 hover:cursor-pointer text-black rounded-full px-4 py-2">
            <MdCardMembership />
            Join As Member
          </button>
        </a>

        <button className="flex items-center gap-2 border-[1px] text-white rounded-full border-zinc-100 px-4 py-2">
          <GiStrongMan />
          Join As Trainer
        </button>
      </div>
    </div>
  );
}
