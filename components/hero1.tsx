'use client';

import React from "react";
import { useModal } from "@/app/context/ModalContext";

const Hero1 = () => {
  const { openModal } = useModal();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Top Image Wave */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <img
          src="/assets/images/top.webp"
          alt="top wave"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center items-start h-full px-6 md:px-16 max-w-4xl">
        <div className="bg-white/90 rounded-md p-6 md:p-10 shadow-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#012A4A] mb-4 leading-tight font-serif">
            <span className="block">Transforming Ideas into Published Masterpieces –</span>
            <span className="block">Expert Book Writing, Editing </span>
            <span className="block">Publishing Services</span>
          </h1>
          <button
            onClick={openModal}
            className="mt-4 bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom Image Wave */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <img
          src="/assets/images/bottom.webp"
          alt="bottom wave"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero1;



