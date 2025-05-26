import React from "react";
import {
  FaDumbbell,
  FaSpa,
  FaSwimmer,
  FaShoppingBag,
  FaHeartbeat,
  FaBicycle,
  FaLeaf,
  FaUsers,
} from "react-icons/fa";

const timelineItems = [
  {
    title: "Lessons For Beginners",
    desc: "Lessons for beginners are a great way to learn the basics of a new activity.",
    icon: <FaDumbbell />,
    side: "left",
  },
  {
    title: "Yoga Sessions",
    desc: "Yoga sessions are a great way to connect with your body and mind. Yoga improves overall well-being.",
    icon: <FaLeaf />,
    side: "right",
  },
  {
    title: "Pro Workout",
    desc: "Pro workouts help you reach peak performance by improving strength, endurance, and speed.",
    icon: <FaBicycle />,
    side: "left",
  },
  {
    title: "Healthy Corner",
    desc: "A healthy corner promotes well-being with water, fruit bowls, and healthy snacks.",
    icon: <FaHeartbeat />,
    side: "right",
  },
  {
    title: "Shop For Workout",
    desc: "When shopping for a workout, consider your fitness goals and needs.",
    icon: <FaShoppingBag />,
    side: "left",
  },
  {
    title: "Min Control Room",
    desc: "Staff monitors systems in the control room and ensures safety.",
    icon: <FaUsers />,
    side: "right",
  },
  {
    title: "Pool Events",
    desc: "Host events like pool parties, swim meets, and water volleyball tournaments.",
    icon: <FaSwimmer />,
    side: "left",
  },
  {
    title: "Spa Center",
    desc: "Pamper yourself with a relaxing day at the spa.",
    icon: <FaSpa />,
    side: "right",
  },
];

export default function GymTimeline() {
  return (
    <div className="relative py-10 px-20  text-white border-y-[1px] border-yellow-800">
      {/* Vertical Line */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-yellow-500 transform -translate-x-1/2 z-0" />

      {/* Timeline Items */}
      <div className="max-w-6xl mx-auto relative z-10">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col md:flex-row items-center my-10 ${
              item.side === "left" ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Text Section */}
            <div className="md:w-1/2 px-5 text-center md:text-right md:pr-10">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>
            </div>
            {/* Icon Section */}
            <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-yellow-400 text-black text-xl font-bold rounded transform rotate-45 mx-4 shadow-lg">
              <div className="transform -rotate-45">{item.icon}</div>
            </div>
            {/* Right Text */}
          </div>
        ))}
      </div>
    </div>
  );
}
