// Contact.jsx
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div
        className="bg-cover bg-center h-96 flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1571019613914-85f342c55f4b')",
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Contact Us</h1>
          <p className="text-lg md:text-xl">
            We're here to help you take the first step
          </p>
        </div>
      </div>

      {/* Contact Info */}
      <section className="px-6 py-12 max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-center">Get in Touch</h2>
        <p className="text-center text-gray-400 mb-8">
          Have questions or need assistance? Reach out through the form below or
          visit us in person.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <form className="bg-zinc-900 p-6 rounded-xl shadow-md">
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Name</label>
              <input
                type="text"
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Email</label>
              <input
                type="email"
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none"
                placeholder="your@email.com"
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1 text-gray-300">Message</label>
              <textarea
                rows="4"
                className="w-full px-4 py-2 rounded bg-zinc-800 text-white focus:outline-none"
                placeholder="How can we help you?"
              ></textarea>
            </div>
            <button className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded text-white font-semibold mt-2">
              Send Message
            </button>
          </form>

          {/* Contact Details */}
          <div className="bg-zinc-900 p-6 rounded-xl shadow-md flex flex-col justify-center space-y-4">
            <div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <p className="text-gray-400">
                Gladiators Gym
                <br />
                123 Muscle Street
                <br />
                Fitness City, PK 12345
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <p className="text-gray-400">+92 300 1234567</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <p className="text-gray-400">contact@gladiatorsgym.com</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-2">Opening Hours</h3>
              <p className="text-gray-400">
                Mon - Sat: 6:00 AM – 10:00 PM
                <br />
                Sunday: 8:00 AM – 4:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
