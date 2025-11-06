"use client";

import React from "react";
import { getImgPath } from "@/utils/images";

const TrustedSection = () => {
  const clients = [
    { name: "Uber", logo: "/images/uber.png" },
    { name: "Google", logo: "/images/google.png" },
    { name: "Tinder", logo: "/images/tinder.png" },
    { name: "Zara", logo: "/images/zara.png" },
  ];

  return (
    <section className="custom-container-padding custom-container">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-8">
        {/* Left Side - Title */}
        <div>
          <h2 className="mb-0">
            <span className="text-primary">Trusted By</span>
            <br />
            <span className="bg-linear-to-r from-[#2664EB] to-[#CC2B91] bg-clip-text text-transparent">
              Awesome Clients
            </span>
          </h2>
        </div>

        {/* Right Side - Description */}
        <div>
          <p className="mb-0">
            Not To Brag, But A Lot Of Hot Startups And Market Leaders Reach Out & Touch Base To Commission Our Work.
          </p>
        </div>
      </div>

      {/* Client Logos - Full Width */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 items-center">
        {clients.map((client, index) => (
          <div key={index} className="flex items-center justify-center">
            <img
              src={getImgPath(client.logo)}
              alt={client.name}
              className="max-w-full h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrustedSection;
