import React from "react";
import Card from "./Card";
import { TbTreadmill } from "react-icons/tb";
import { GrYoga } from "react-icons/gr";
import { FaSwimmingPool } from "react-icons/fa";
import { FaTableTennis } from "react-icons/fa";

export default function About() {
  return (
    <div className="w-full min-h-screen ">
      <div className="leading-none pt-20">
        <h1 className="w-full h-full text-orange-600 text-center ">About US</h1>
        <h1 className="w-full h-full  text-white font-bold text-[4vw] tracking-tighter  text-center ">
          READY FOR SOME SWEATING
        </h1>
      </div>
      <div className="flex w-full h-52 gap-8 px-8 py-5 text-white">
        <div className="w-1/2 h-10 ">
          <p className="p-4 rounded-lg hover:shadow-xl bg-zinc-900">
            The amount of sweat you produce depends on a number of factors,
            including your fitness level, the intensity of your workout, and the
            ambient temperature. If you are new to exercise, you may sweat more
            than you do as you get fitter. Sweating is not necessarily a sign
            that you are working out hard enough. Some people sweat more than
            others, even when they are doing the same amount of exercise.
          </p>
        </div>
        <div className="w-1/2 h-10">
          <p className="p-4 rounded-lg hover:shadow-xl bg-zinc-900">
            Sweating can help to remove toxins from your body. As sweat
            evaporates, it takes some of the toxins with it. This can help to
            improve your overall health. Sweating can also help to hydrate your
            skin. The water in sweat helps to keep your skin moist and
            healthy.Sweating is a natural bodily function that helps to regulate
            your body temperature. When you exercise, your body temperature
            increases.
          </p>
        </div>
      </div>
      <div className="pt-20 px-5 flex">
        <Card
          logo={<TbTreadmill size={100} />}
          heading={"Cardio Exercise"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo omnis ipsa nihil provident maiores dolorum libero ab tempore quod corrupti vel autem itaque"
          }
        />
        <Card
          logo={<GrYoga size={100} />}
          heading={"Yoga Classes"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo omnis ipsa nihil provident maiores dolorum libero ab tempore quod corrupti vel autem itaque"
          }
        />
        <Card
          logo={<FaSwimmingPool size={100} />}
          heading={"Swimming Pools"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo omnis ipsa nihil provident maiores dolorum libero ab tempore quod corrupti vel autem itaque"
          }
        />
        <Card
          logo={<FaTableTennis size={100} />}
          heading={"Tennis court"}
          desc={
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas nemo omnis ipsa nihil provident maiores dolorum libero ab tempore quod corrupti vel autem itaque"
          }
        />
      </div>
    </div>
  );
}
