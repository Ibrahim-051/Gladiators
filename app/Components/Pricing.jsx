import React from "react";
import { TiTick } from "react-icons/ti";

const plans = [
  {
    title: "Basic Plan",
    price: 5000,
    features: [
      "Our trainers will guide you",
      "Access to basic equipment",
      "24/7 gym entry",
    ],
    highlight: false,
  },
  {
    title: "Premium Plan",
    price: 8000,
    features: [
      "All benefits of Basic Plan",
      "Free diet consultation",
      "Access to steam & sauna",
    ],
    highlight: true,
  },
  {
    title: "Elite Plan",
    price: 12000,
    features: [
      "All benefits of Premium Plan",
      "Personal trainer",
      "Access to VIP lounge",
    ],
    highlight: false,
  },
];

function PlanCard({ title, price, features, highlight }) {
  return (
    <div
      className={`flex flex-col gap-6 justify-between items-center p-6 rounded-xl w-full md:w-1/3 h-full shadow-xl transition transform hover:scale-105 ${
        highlight ? "bg-yellow-500 text-black" : "bg-white text-black"
      }`}
    >
      <h2 className="text-3xl font-extrabold text-center">{title}</h2>
      <p className="text-xl font-bold">
        Rs: {price}
        <span className="text-base font-medium"> /month</span>
      </p>

      <div className="space-y-2">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start gap-2">
            <TiTick className="text-green-600 text-xl mt-1" />
            <p className="text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <button
        className={`mt-4 px-6 py-2 rounded-full font-medium transition ${
          highlight
            ? "bg-black text-yellow-500 hover:bg-zinc-900"
            : "bg-yellow-500 hover:bg-yellow-400"
        }`}
      >
        Buy Now
      </button>
    </div>
  );
}

export default function Pricing() {
  return (
    <div id="pricing" className="w-full min-h-screen  p-6">
      <div className="text-center text-white space-y-3 mb-10">
        <h1 className="text-4xl md:text-5xl font-bold">CHOOSE YOUR PLAN</h1>
        <p className="text-sm md:text-base font-light max-w-3xl mx-auto">
          The client pays a certain sum every month to use the gym's services
          daily. Monthly memberships can also be turned into yearly memberships.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-6 items-stretch">
        {plans.map((plan, index) => (
          <PlanCard key={index} {...plan} />
        ))}
      </div>
    </div>
  );
}
