import React from "react";
import { TiTick } from "react-icons/ti";
import Chart from "./Chart";

export default function Activities() {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full min-h-screen p-5 border-t-2 border-zinc-900">
        {/* Left Section */}
        <div className="w-full md:w-[70%] h-full leading-none">
          <div>
            <h1 className="text-white text-lg font-light">ACTIVITIES</h1>
          </div>
          <h1 className="text-white text-[8vw] md:text-[5vw] font-bold">
            Featured Activities
          </h1>
          <div className="flex flex-col">
            <div className="w-full md:w-[80%] space-y-4">
              {[
                "Featured activities are a great way to try something new and get out of your comfort zone.",
                "If you are looking for a new challenge, I highly recommend checking out the featured activities at your local gym.",
                "They can also be a great way to meet new people and make friends.",
                "When choosing a gym, be sure to ask about the featured activities that they offer. You may also want to try out a few different classes before you decide which one is right for you.",
              ].map((text, i) => (
                <div key={i} className="flex gap-3 items-start pt-3">
                  <span>
                    <TiTick color="white" size={30} className="mt-1" />
                  </span>
                  <p className="text-base md:text-xl text-white">{text}</p>
                </div>
              ))}
            </div>
            <div className="py-16 pl-0 md:pl-10 flex justify-center">
              <Chart />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-[30%] h-full flex justify-center items-center">
          <img
            className="py-10 md:py-16 max-w-full max-h-[60vh] md:max-h-[80vh] object-contain"
            src="https://sage-sprite-7c68cf.netlify.app/images/2022-12-Pic-41-570x1024.png"
            alt="Featured activity"
          />
        </div>
      </div>
    </>
  );
}
