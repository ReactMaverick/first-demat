"use client";

import React from "react";
import { getImgPath } from "@/utils/images";

const CTASection = () => {
  return (
     <div 
       className='custom-container-padding custom-container text-center bg-center bg-no-repeat bg-contain' 
       style={{ backgroundImage: `url(${getImgPath("/images/cta-background.png")})` }}
     >
        <h5 className="mb-4 text-md font-bold">Need help  with a project?</h5>
        <h2 className="mb-4 bg-linear-to-r from-[#2664EB] to-[#CC2B91] bg-clip-text text-transparent">Let's talk!</h2>
        <p className="mb-4 lg:px-20 xl:px-40">
          Get support on a large platform, flesh out your first MVP, go from concept to{" "}
          investment, or take your startup to the next level. Our process wraps around your unique business needs.
        </p>
        <button className="primary-button flex items-center gap-3 mx-auto">
          <span>Get Started</span>
          <div className="flex items-center -space-x-3">
            <img 
              src={getImgPath("/images/btnuser1.png")} 
              alt="User 1" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img 
              src={getImgPath("/images/btnuser2.png")} 
              alt="User 2" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
            <img 
              src={getImgPath("/images/btnuser3.png")} 
              alt="User 3" 
              className="w-10 h-10 rounded-full border-2 border-white"
            />
          </div>
        </button>
     </div>
  );
};

export default CTASection;
