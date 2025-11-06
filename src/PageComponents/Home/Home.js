import Header from "@/components/Header/Header";
import React from "react";
import HeaderBottomBar from "./Components/HeaderBottomBar";
import HeroSection from "./Components/HeroSection";
import ProductsSection from "./Components/ProductsSection";
import WhatDoYouNeed from "./Components/WhatDoYouNeed";
import CTASection from "./Components/CTASection";
import TrustedSection from "./Components/TrustedSection";

export default function Home() {
  return (
    <div>
      <HeaderBottomBar />
      <HeroSection />
      <ProductsSection />
      <WhatDoYouNeed />
       <TrustedSection />
      <CTASection />
     
    </div>
  );
}
