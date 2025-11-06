import CommonHeroSection from "@/components/CommonHeroSection/CommonHeroSection";
import React from "react";
import SupportContentSection from "./Components/SupportContentSection";

const Support = () => {
  return (
    <div>
      <CommonHeroSection
        title={"Support Portal"}
        backgroundImage={"/images/support-hero-image.jpg"}
      />
      <SupportContentSection />
    </div>
  );
};

export default Support;
