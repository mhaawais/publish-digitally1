"use client";

import React from "react";
import { useModal } from "@/app/context/ModalContext";

const Hero10 = () => {
  const { openModal } = useModal();

  return (
    <section className="relative bg-[#052540] overflow-hidden py-20">
      <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug drop-shadow-md font-serif">
          Let’s write Something Incredible Together!
        </h1>
        <p className="text-white mt-6 text-base sm:text-lg max-w-3xl mx-auto drop-shadow">
          Discover the true power of your story with the guidance of our expert
          writers. Whether you’re working on fiction, non-fiction, a business
          book, or a wellness guide, we help shape your ideas into a captivating
          manuscript. Our team specializes in every genre and ensures your book
          stands out and captures readers’ attention. Ready to bring your vision
          to life? Click the button below and let’s get started!
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

export default Hero10;
