"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { PRODUCT_BACK1 } from "@/constants/images";

export default function ProductsSection() {
  const products = [
    {
      title: "Research Report",
      subDescription:
        "4 critical actions to take now to strengthen your cyber defenses",
      description:
        "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
      backGroundImage: PRODUCT_BACK1,
    },
    {
      title: "Research Report",
      subDescription:
        "4 critical actions to take now to strengthen your cyber defenses",
      description:
        "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
      backGroundImage: PRODUCT_BACK1,
    },
    {
      title: "Research Report",
      subDescription:
        "4 critical actions to take now to strengthen your cyber defenses",
      description:
        "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
      backGroundImage: PRODUCT_BACK1,
    },
    {
      title: "Research Report",
      subDescription:
        "4 critical actions to take now to strengthen your cyber defenses",
      description:
        "Cyber risks are growing faster than ever, outpacing security efforts. How do you get ahead of these threats? In this year’s State of Cybersecurity Resilience, learn the steps to build resilience as you embrace AI transformation.",
      backGroundImage: PRODUCT_BACK1,
    },
  ];

  return (
    <div className="custom-container-padding custom-container">
      <div className="flex flex-col gap-[30px]">
        <h2 className="hero-h1-gradiant">Products</h2>
        <div className="flex overflow-x-auto scrollbar-hide lg:grid lg:grid-cols-4 gap-4 snap-x snap-mandatory">
          {products.map((product, index) => (
            <HoverCard
              key={index}
              backImage={product.backGroundImage}
              title={product.title}
              subDescription={product.subDescription}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export function HoverCard({ backImage, title, subDescription, description }) {
  const heightWrapRef = useRef(null);
  const sliderRef = useRef(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [percentVisiable, setPercentVisiable] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    if (heightWrapRef.current && sliderRef.current) {
      const height = heightWrapRef.current.offsetHeight;
      const sliderHeight = sliderRef.current.offsetHeight;
      setPercentVisiable((height / sliderHeight) * 100);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleClick = () => {
    if (isMobile) {
      setIsClicked(!isClicked);
    }
  };

  return (
    <motion.div
      className="relative min-w-[280px] sm:min-w-[320px] md:min-w-[350px] lg:min-w-0 lg:w-full h-[350px] sm:h-[400px] md:h-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg cursor-pointer snap-center flex-shrink-0"
      onHoverStart={() => !isMobile && setIsHovered(true)}
      onHoverEnd={() => !isMobile && setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Background Image */}
      <motion.img
        src={backImage}
        alt="Card Image"
        className="w-full h-full object-cover"
        animate={{ scale: isHovered && !isMobile ? 1.1 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Overlay Layer */}
      <motion.div
        ref={sliderRef}
        className="absolute left-0 w-full h-full bg-black/70 flex flex-col text-white p-4 sm:p-5 md:p-6 overflow-y-auto"
        initial={false}
        animate={{
          y: isMobile
            ? isClicked
              ? "-100%"
              : `-${percentVisiable + 5}%`
            : isHovered
            ? "-100%"
            : `-${percentVisiable + 5}%`,
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div ref={heightWrapRef}>
          <h6 className="mb-2 font-bold text-base sm:text-lg">{title}</h6>
          <p className="mb-2 text-sm sm:text-base">{subDescription}</p>
        </div>
        <p className="text-xs sm:text-sm leading-relaxed">{description}</p>

        {/* Close indicator for mobile */}
        {/* {isMobile && isClicked && (
          <div className="mt-4 text-center text-xs opacity-70">
            Tap again to close
          </div>
        )} */}
      </motion.div>
    </motion.div>
  );
}
