"use client";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

export default function Popup() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center p-4">
      <div className="relative w-full max-w-md bg-black text-white rounded-2xl p-6 flex flex-col gap-4 items-center overflow-y-auto max-h-[90vh] shadow-lg">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 text-white"
          onClick={() => setShowPopup(false)}
        >
          <IoClose size={28} />
        </button>

        {/* Title */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center pt-4">
          JOIN US
        </h1>

        {/* Timer Boxes */}
        <div className="flex flex-wrap justify-center items-center gap-3 mt-2">
          <TimeBox label="Days" />
          <TimeBox label="Hr" />
          <TimeBox label="Min" />
          <TimeBox label="Sec" />
        </div>

        {/* Text */}
        <p className="text-sm sm:text-base text-center mt-3">
          Join Our Mailing List and Receive a 15% Discount Code
        </p>

        {/* CTA Button */}
        <button className="bg-yellow-500 hover:bg-yellow-600 px-6 py-2 text-sm font-semibold rounded-xl text-white transition-all duration-200">
          Yes, I want this!
        </button>

        {/* Decline Link */}
        <button
          onClick={() => setShowPopup(false)}
          className="text-xs text-white hover:underline"
        >
          No thanks, I don’t want to save
        </button>
      </div>
    </div>
  );
}

function TimeBox({ label }) {
  return (
    <div className="bg-gray-900 w-16 h-20 sm:w-20 sm:h-24 flex flex-col justify-center items-center rounded-md">
      <h1 className="font-semibold text-lg sm:text-xl">00</h1>
      <h2 className="text-xs sm:text-sm">{label}</h2>
    </div>
  );
}

// "use client";
// import React, { useEffect, useState } from "react";
// import { IoClose } from "react-icons/io5";

// export default function Popup() {
//   const [showPopup, setShowPopup] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       setShowPopup(true);
//     }, 5000); // show after 5 seconds

//     return () => clearTimeout(timer);
//   }, []);

//   if (!showPopup) return null;

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 animate-fade">
//       <div className="flex flex-col gap-3 rounded-2xl relative justify-start items-center w-[70vh] h-[90vh] bg-black text-white mx-auto">
//         <span
//           className="absolute top-4 right-4 cursor-pointer"
//           onClick={() => setShowPopup(false)}
//         >
//           <IoClose color="white" size={30} />
//         </span>
//         <h1 className="text-[5vw] pt-10">JOIN US</h1>
//         <div className="flex flex-wrap justify-center items-center gap-4">
//           <TimeBox label="days" />
//           <TimeBox label="Hr" />
//           <TimeBox label="Min" />
//           <TimeBox label="Sec" />
//         </div>
//         <h2 className="text-[1vw] pt-10">
//           Join Our Mailing List and Receive a 15% Discount Code
//         </h2>
//         <button className="text-white bg-yellow-500 hover:shadow-lg hover:bg-yellow-600 px-4 py-2 rounded-xl">
//           Yes, I want this!
//         </button>
//         <a className="hover:underline cursor-pointer">
//           No thanks I don't want to save
//         </a>
//       </div>
//     </div>
//   );
// }

// function TimeBox({ label }) {
//   return (
//     <div className="bg-gray-900 w-20 h-24 flex flex-col justify-center items-center">
//       <h1 className="font-semibold text-[3vw]">00</h1>
//       <h2 className="font-semibold text-[1vw]">{label}</h2>
//     </div>
//   );
// }

// // import React, { useEffect, useState } from "react";
// // import { IoClose } from "react-icons/io5";

// // export default function Popup() {
// //   const [showPopup, setShowPopup] = useState(false);

// //   useEffect(() => {
// //     const timer = setTimeout(() => {
// //       setShowPopup(true);
// //     }, 5000);

// //     return () => clearTimeout(timer);
// //   }, []);

// //   if (!showPopup) return null;

// //   return (
// //     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
// //       <div className="flex flex-col gap-3 rounded-2xl relative justify-start items-center w-[70vh] h-[90vh] bg-black text-white mx-auto">
// //         <span
// //           className="absolute top-4 right-4 cursor-pointer"
// //           onClick={() => setShowPopup(false)}
// //         >
// //           <IoClose color="white" size={30} />
// //         </span>
// //         <h1 className="text-[5vw] pt-10">JOIN US</h1>
// //         <div className="flex flex-wrap justify-center items-center gap-4">
// //           <TimeBox label="days" />
// //           <TimeBox label="Hr" />
// //           <TimeBox label="Min" />
// //           <TimeBox label="Sec" />
// //         </div>
// //         <h2 className="text-[1vw] pt-10">
// //           Join Our Mailing List and Receive a 15% Discount Code
// //         </h2>
// //         <button className="text-white bg-yellow-500 hover:shadow-lg hover:bg-yellow-600 px-4 py-2 rounded-xl">
// //           Yes, I want this!
// //         </button>
// //         <a className="hover:underline cursor-pointer">
// //           No thanks I don't want to save
// //         </a>
// //       </div>
// //     </div>
// //   );
// // }

// // function TimeBox({ label }) {
// //   return (
// //     <div className="bg-gray-900 w-20 h-24 flex flex-col justify-center items-center">
// //       <h1 className="font-semibold text-[3vw]">00</h1>
// //       <h2 className="font-semibold text-[1vw]">{label}</h2>
// //     </div>
// //   );
// // }
