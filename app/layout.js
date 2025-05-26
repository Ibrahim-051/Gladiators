import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
// import LocomotiveScroll from "locomotive-scroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Gladiators",
  description: "Gladiators Gym by Ibrahim",
  icons: {
    icon: "/img1.png", // or "/favicon.png" if you're using PNG
  },
};

export default function RootLayout({ children }) {
  // const locomotiveScroll = new LocomotiveScroll();
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
