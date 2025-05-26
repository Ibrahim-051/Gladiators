import React from "react";
import { FaDumbbell } from "react-icons/fa6";
import { LuHeartPulse } from "react-icons/lu";
import { GiNinjaArmor } from "react-icons/gi";
import { MdPunchClock } from "react-icons/md";
export default function WhyUs() {
  return (
    <div className="w-full h-screen px-5  flex gap-5 items-center justify-center tracking-tight leading-none">
      <div className="w-[30%] ">
        <h1 className="text-3xl inline-block text-white p-3 font-bold border-b-2 border-yellow-500">
          Why Choose Us
        </h1>

        <p className="text-md p-3 font-light text-white">
          There are many reasons why someone might choose this gym over another.
          Here are a few things we highlight to potential members.
        </p>
      </div>
      <div className="w-[30%] ">
        <div>
          <h1 className="text-3xl text-white p-3 font-bold  pl-10">
            Pro Equipment
          </h1>
          <div className="flex justify-center items-center">
            <span>
              <FaDumbbell color="white" size={30} />
            </span>
            <p className="text-md p-3 font-light text-white">
              Battle ropes, Free weights, Weight machines, Cardio machines, The
              best equipment for you will depend on your individual fitness
              goals and needs.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-white p-3 font-bold  pl-10">
            Cardio Exercises
          </h1>
          <div className="flex justify-center items-center">
            <span>
              <LuHeartPulse size={30} color="white" />
            </span>
            <p className="text-md p-3 font-light text-white">
              Cardio exercise is a great way to improve your physical and mental
              health. By following these tips, you can get the most out of your
              cardio workouts and reach your fitness goals.
            </p>
          </div>
        </div>
      </div>
      <div className="w-[30%] ">
        <div>
          <h1 className="text-3xl text-white p-3 font-bold  pl-10">
            Best Coaches
          </h1>
          <div className="flex justify-center items-center">
            <span>
              <GiNinjaArmor size={30} color="white" />
            </span>
            <p className="text-md p-3 font-light text-white">
              There are many great coaches in the world, but some stand out for
              their ability to help their clients achieve their goals.They are
              able to build relationships with their clients and motivate them
              to push themselves even when they are tired or discouraged.
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-3xl text-white p-3 font-bold  pl-10">
            Flexible Time
          </h1>

          <div className=" flex justify-center items-center">
            {" "}
            <span>
              <MdPunchClock size={30} color="white" />
            </span>
            <p className="text-md p-3 font-light text-white">
              This gym is open 24 hours a day, 7 days a week, so you can work
              out whenever you want.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
