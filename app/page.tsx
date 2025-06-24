import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import React from "react";

export default function Home() {
  return (
    <div className="bg-[#c5d1d8]">
      <Header />
      <Hero1 />
      <Hero2 />
      <Hero3 />
      <Footer />
    </div>
  );
}
