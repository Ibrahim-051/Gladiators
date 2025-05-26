// AboutUs.jsx
import React from "react";

const AboutUs = () => {
  return (
    <div className=" min-h-screen text-white">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1554284126-aa88f22d8b74')",
        }}
      >
        <div className=" bg-opacity-50 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            Welcome to Gladiators Gym
          </h1>
          <p className="text-lg md:text-xl">
            Your journey to strength starts here
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="px-6 py-12 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-4 text-center">Who We Are</h2>
        <p className="text-lg leading-relaxed text-center">
          At Gladiators Gym, we are passionate about helping people achieve
          their fitness goals. Whether you're a beginner or a pro athlete, our
          state-of-the-art facility and certified trainers will guide you every
          step of the way.
        </p>
      </section>

      {/* Mission Section */}
      <section className=" px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
          <p className="text-lg leading-relaxed">
            To empower individuals through fitness, foster community, and
            promote healthy lifestyles by providing the best training experience
            and equipment.
          </p>
        </div>
      </section>

      {/* Trainers Section */}
      <section className="px-6 py-12 ">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Meet Our Trainers
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Mr. Ali",
              role: "Strength Coach",
              img: "https://randomuser.me/api/portraits/men/32.jpg",
            },
            {
              name: "Ayesha",
              role: "Yoga Instructor",
              img: "https://randomuser.me/api/portraits/women/11.jpg",
            },
            {
              name: "Malik",
              role: "Personal Trainer",
              img: "https://randomuser.me/api/portraits/men/15.jpg",
            },
          ].map((trainer, index) => (
            <div
              key={index}
              className="bg-zinc-900 shadow-md p-4 rounded-xl text-center"
            >
              <img
                src={trainer.img}
                alt={trainer.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="text-xl font-bold">{trainer.name}</h4>
              <p className="text-sm text-gray-500">{trainer.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Facilities Section */}
      <section className="px-6 py-12 ">
        <h3 className="text-2xl font-semibold text-center mb-8">
          Our Facilities
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "Fully Equipped Gym",
            "Cardio Zone",
            "Yoga Studio",
            "CrossFit Area",
            "Sauna & Spa",
            "Nutrition Bar",
          ].map((facility, index) => (
            <div
              key={index}
              className="bg-zinc-900 p-6 rounded-xl text-center shadow-sm"
            >
              <h4 className="text-lg font-semibold">{facility}</h4>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
