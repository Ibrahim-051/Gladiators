import React from "react";
import Card from "./Card";
import { TbTreadmill } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { FaSwimmingPool } from "react-icons/fa";
import { FaTableTennis } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full min-h-screen px-4 pt-20 text-white">
      {/* Heading Section */}
      <div className="text-center leading-none mb-10">
        <h1 className="text-orange-600 text-xl sm:text-2xl font-medium">
          About Us
        </h1>
        <h1 className="text-white font-bold text-[7vw] sm:text-4xl md:text-5xl lg:text-6xl tracking-tighter mt-2">
          READY FOR SOME SWEATING
        </h1>
      </div>

      {/* Description Section */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="md:w-1/2">
          <p className="p-4 rounded-lg hover:shadow-xl bg-zinc-900 text-sm sm:text-base">
            The amount of sweat you produce depends on a number of factors,
            including your fitness level, the intensity of your workout, and the
            ambient temperature. If you are new to exercise, you may sweat more
            than you do as you get fitter. Sweating is not necessarily a sign
            that you are working out hard enough.
          </p>
        </div>
        <div className="md:w-1/2">
          <p className="p-4 rounded-lg hover:shadow-xl bg-zinc-900 text-sm sm:text-base">
            Sweating can help to remove toxins from your body. As sweat
            evaporates, it takes some of the toxins with it. This can help to
            improve your overall health. Sweating can also help to hydrate your
            skin. The water in sweat helps to keep your skin moist and healthy.
          </p>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-6 justify-center">
        <Card
          logo={<TbTreadmill size={60} />}
          heading={"Cardio Exercise"}
          desc={
            "Get your heart pumping with our high-quality cardio machines and programs that push your limits and boost endurance."
          }
        />
        <Card
          logo={<GrYoga size={60} />}
          heading={"Yoga Classes"}
          desc={
            "Unwind and gain flexibility with professional yoga sessions suitable for all levels to connect mind and body."
          }
        />
        <Card
          logo={<FaSwimmingPool size={60} />}
          heading={"Swimming Pools"}
          desc={
            "Enjoy our clean, modern swimming pools perfect for laps, leisure, or low-impact rehabilitation workouts."
          }
        />
        <Card
          logo={<FaTableTennis size={60} />}
          heading={"Tennis Court"}
          desc={
            "Challenge your reflexes and coordination on our professional-grade tennis and table tennis courts."
          }
        />
      </div>
    </div>
  );
}
