'use client';

import React from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero1 from "@/components/hero1";
import Hero2 from "@/components/hero2";
import Hero3 from "@/components/hero3";
import Hero4 from "@/components/hero4";
import Hero5 from "@/components/hero5";
import Hero6 from "@/components/hero6";
import Hero7 from "@/components/hero7";
import Hero8 from "@/components/hero8";
import Hero9 from "@/components/hero9";
import Hero10 from "@/components/hero10";
import ModalForm from "@/components/ModalForm"; // shared modal
import { ModalProvider } from "./context/ModalContext";


export default function Home() {
  return (
    <ModalProvider>
      <div className="bg-[#c5d1d8]">
      {/* <div> */}
        <Header />
        <Hero1 />
        <Hero2 />
        <Hero3 />
        <Hero4 />
        <Hero5 />
        <Hero6 />
        <Hero7 />
        <Hero8 />
        <Hero9 />
        <Hero10 />
        <Footer />
        <ModalForm /> {/* Only render once, shared across all */}
      </div>
    </ModalProvider>
  );
}
