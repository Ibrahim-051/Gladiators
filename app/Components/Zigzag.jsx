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
    <div className="relative py-10 px-5 md:px-20 text-white border-y border-yellow-800">
      {/* Timeline Items */}
      <div className="max-w-6xl mx-auto relative z-10">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`
              flex flex-col md:flex-row items-center my-10
              ${
                item.side === "left"
                  ? "md:flex-row-reverse md:text-right"
                  : "md:text-left"
              }
              text-center md:text-center
            `}
          >
            {/* Text Section */}
            <div className="md:w-1/2 px-5 relative">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <p className="mt-2 text-sm text-gray-300">{item.desc}</p>

              {/* Vertical line + icon for left side */}
              {item.side === "left" && (
                <div className="hidden md:flex flex-col items-center absolute top-0 right-[-60px] h-full">
                  <div className="w-[2px] bg-yellow-500 flex-grow opacity-50"></div>
                  <div className="w-12 h-12 bg-yellow-500 bg-opacity-30 rounded-full flex items-center justify-center text-yellow-400 text-xl font-bold -translate-y-6 shadow-lg">
                    {item.icon}
                  </div>
                  <div className="w-[2px] bg-yellow-500 flex-grow opacity-50"></div>
                </div>
              )}
            </div>

            {/* Vertical line + icon for right side */}
            {item.side === "right" && (
              <div className="hidden md:flex flex-col items-center relative md:w-12 mx-4">
                <div className="w-[2px] bg-yellow-500 flex-grow opacity-50"></div>
                <div className="w-12 h-12 bg-yellow-500 bg-opacity-30 rounded-full flex items-center justify-center text-yellow-400 text-xl font-bold -translate-y-6 shadow-lg">
                  {item.icon}
                </div>
                <div className="w-[2px] bg-yellow-500 flex-grow opacity-50"></div>
              </div>
            )}

            {/* On mobile, just show icon below text */}
            <div className="md:hidden mt-4 flex justify-center text-yellow-400 text-xl font-bold">
              {item.icon}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
