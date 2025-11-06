import React from "react";

const CommonHeroSection = ({ backgroundImage, title }) => {
  console.log("dd", backgroundImage);

  return (
    <section className="bg-[#E8EAEA]">
      <div
        className={`custom-container custom-container-padding bg-no-repeat bg-cover h-[150px] md:h-[300px] lg:h-[370px] xl:h-[450px] flex items-center`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
        }}
      >
        <h1 className="hero-h1-gradiant">{title}</h1>
      </div>
    </section>
  );
};

export default CommonHeroSection;
