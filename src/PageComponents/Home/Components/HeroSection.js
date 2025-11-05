import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="custom-cotainer custom-container-padding flex flex-col lg:flex-row items-center justify-between">
        {/* Text Content  */}
        <div>
          {/* Heading here */}
          <div>
            <h1 className="font-bold hero-h1-gradiant text-wrap">
              Trade. Invest. Grow.
            </h1>
          </div>
          {/* Paragraph text here */}
          <div>
            <p>
              Experience revolutionary trading with AI-powered insights,
              lightning-fast execution, and professional-grade tools designed
              for the modern Indian investor.
            </p>
          </div>
          {/* Email Input and Button */}
          <div>
            <input
              type="email"
              placeholder="Enter your email"
              className="p-3 border outline-none"
            />
            <button className="bg-blue-600 text-white p-3 rounded-r-md hover:bg-blue-700 transition-colors">
              Get Started
            </button>
          </div>
        </div>

        {/* Video Content */}
        <div></div>
      </div>
    </section>
  );
};

export default HeroSection;
