import Header from "@/components/Header/Header";
import React from "react";
import HeaderBottomBar from "./Components/HeaderBottomBar";
import HeroSection from "./Components/HeroSection";
import ProductsSection from "./Components/ProductsSection";

export default function Home() {
  return (
    <div>
        <HeaderBottomBar />
        <HeroSection />
      <ProductsSection />
    </div>
  );
}
