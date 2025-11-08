import React from "react";
import { Send } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="custom-container custom-container-padding flex flex-col lg:flex-row justify-between gap-8 lg:gap-5">
        {/* Text Content  */}
        <div className="w-full lg:w-5/12 flex flex-col gap-4 sm:gap-5 lg:gap-5 justify-start text-center lg:text-left">
          {/* Heading here */}
          <div>
            <h1 className="font-bold hero-h1-gradiant text-wrap text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[80px] leading-tight">
              Trade. Invest. Grow.
            </h1>
            <h4 className="font-semibold text-lg sm:text-xl md:text-2xl lg:text-3xl mt-2 sm:mt-3">
              Built for Performance, Backed by Trust.
            </h4>
          </div>
          {/* Paragraph text here */}
          <div>
            <p className="text-gray-600 leading-relaxed">
              Experience revolutionary trading with AI-powered insights,
              lightning-fast execution, and professional-grade tools designed
              for the modern Indian investor.
            </p>
          </div>
          {/* Email Input and Button */}
          <div className="border border-gray-200 rounded-[100px] flex flex-row justify-between items-stretch sm:items-center px-2 sm:px-2 py-2 sm:py-1.5 gap-2 sm:gap-0">
            <span className="px-4 sm:px-4 py-2 sm:py-2 border-r border-gray-400 text-center sm:text-left">
              +91
            </span>
            <input
              type="email"
              placeholder="Enter Mobile Number"
              className="p-3 outline-none w-full text-sm sm:text-base"
            />
            <button className="font-semibold bg-black rounded-[100px] px-4 sm:px-6 py-3 text-nowrap text-white cursor-pointer text-sm sm:text-base hover:bg-blue-700 transition-colors flex items-center justify-center">
              <span className="hidden sm:inline">Get Started</span>
              <Send className="sm:hidden" size={18} />
            </button>
          </div>
        </div>

        {/* Video Content */}
        <div className="w-full lg:w-6/12 rounded-2xl flex justify-center mt-8 lg:mt-0">
          <div>
            <video
              src="https://dl.dropboxusercontent.com/scl/fi/b2a4ezw5fhjout10inue2/Orizon-Showreel-Final-1080p-1.mp4?rlkey=7rbodj2f1ibcw4580uq345dbu&st=3wg9drkv&dl=0"
              autoPlay
              loop
              muted
              playsInline
              className="w-full rounded-2xl object-contain"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
