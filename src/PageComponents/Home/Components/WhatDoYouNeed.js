"use client";
import React from "react";
import { motion } from "motion/react";
import { Plus } from "lucide-react";
import Image from "next/image";

const WhatDoYouNeed = () => {
  const cards = [
    {
      id: 1,
      title: "Take your designs to next level",
      bgImage: "/images/what-do-you-need-card-image-1.png",
      size: "large",
    },
    {
      id: 2,
      title: "Get design help to raise capital",
      bgImage: "/images/what-do-you-need-card-image-2.png",
      size: "medium",
    },
    {
      id: 3,
      title: "Create a clickable prototype",
      bgImage: "/images/what-do-you-need-card-image-3.png",
      size: "large",
    },
    {
      id: 4,
      title: "Take your designs to next level",
      bgImage: "/images/what-do-you-need-card-image-4.png",
      size: "large",
    },
  ];

  return (
    <section className="bg-white">
      <div className="custom-container custom-container-padding flex flex-col gap-8 md:gap-12">
        {/* Heading Text */}
        <h2 className="hero-h1-gradiant lg:text-left">
          What Do You Need Help With?
        </h2>

        {/* Cards Container - Horizontal Flex Layout */}
        <div className="flex overflow-x-auto scrollbar-hide lg:overflow-x-visible gap-4 md:gap-[20px] items-end relative min-h-[450px] snap-x snap-mandatory">
          {cards.map((card, index) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative min-w-[280px] lg:min-w-0 lg:flex-1 flex-shrink-0 snap-center rounded-3xl overflow-hidden group cursor-pointer ${
                index === 0
                  ? "self-start"
                  : index === 1
                  ? "self-end"
                  : index === 2
                  ? "self-center"
                  : "self-end"
              }`}
              style={{ aspectRatio: card.size === "medium" ? "4/3" : "3/4" }}
            >
              <Image
                src={card.bgImage}
                alt={card.title}
                fill
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              <div className="relative h-full flex flex-col justify-between p-6 lg:p-8">
                {card.id === 1 && (
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 90 }}
                    transition={{ duration: 0.3 }}
                    className="w-12 h-12 lg:w-14 lg:h-14 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center self-end"
                  >
                    <Plus
                      className="w-6 h-6 lg:w-7 lg:h-7 text-white"
                      strokeWidth={2.5}
                    />
                  </motion.div>
                )}
                <h4 className="text-white font-bold leading-tight mt-auto text-wrap">
                  {card.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatDoYouNeed;
