"use client";

import React from "react";
import { useModal } from "@/app/context/ModalContext";

const Hero4 = () => {
  const { openModal } = useModal();

  return (
    <section className="relative bg-[#052540] overflow-hidden py-20">
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug drop-shadow-md font-serif ">
          Don’t Keep Your Story Waiting - Let’s Get Writing!
        </h1>
        <p className="text-white mt-6 text-base sm:text-lg max-w-3xl mx-auto drop-shadow">
          Turn Your Story into a Bestseller. Start Writing with Us Today! Your
          journey from idea to published author begins here. Whether you're
          starting with a spark of inspiration or a full outline, our expert
          team will guide you through every step from writing and editing to
          publishing and promotion. We don’t just help you write a book; we help
          you create a legacy. Click below and take the first step toward
          becoming a published author!
        </p>
        <button
          onClick={openModal}
          className="mt-8 px-8 py-3 bg-[#c5d1d8] hover:bg-[#cdcdd3] text-black font-semibold rounded-md shadow-md hover:shadow-lg transition"
        >
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero4;
