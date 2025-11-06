import Header from "@/components/Header/Header";
import React from "react";
import HeaderBottomBar from "./Components/HeaderBottomBar";
import HeroSection from "./Components/HeroSection";
import ProductsSection from "./Components/ProductsSection";
import WhatDoYouNeed from "./Components/WhatDoYouNeed";

export default function Home() {
  return (
    <div>
      <HeaderBottomBar />
      <HeroSection />
      <ProductsSection />
      <WhatDoYouNeed />
    </div>
  );
}
