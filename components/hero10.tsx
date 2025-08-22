"use client";

import React from "react";
import { useModal } from "@/app/context/ModalContext";
import { useEffect, useRef } from "react";

const Hero10 = () => {
  const { openModal } = useModal();

   const elementRef = useRef<HTMLDivElement | null>(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Add the animation class when the element enters the viewport
              entry.target.classList.add("animate-scale-in"); // Adjust with any animation class you want
              observer.unobserve(entry.target); // Stop observing after animation is triggered
            }
          });
        },
        { threshold: 0.2 } // Trigger when 40% of the element is visible in the viewport
      );
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []);

  return (
    <section className="relative bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd] overflow-hidden py-20">
      <div
        ref={elementRef}
        className="opacity-0" // Start as invisible
      >
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
            type="button"
            onClick={openModal}
            className="
    mt-10 group relative inline-flex items-center justify-center
    rounded-2xl px-6 py-3.5 font-semibold tracking-wide
    text-white overflow-hidden
    bg-gradient-to-br from-[#0b6b6b] via-[#0aa4a6] to-[#12c2c9]
    shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]
    transition-[transform,box-shadow] duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(18,194,201,.45)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]
  "
            aria-label="Get Started"
          >
            {/* ambient depth */}
            <span
              className="
      pointer-events-none absolute inset-[-2px] rounded-2xl
      bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
          radial-gradient(140px_90px_at_80%_30%,rgba(255,255,255,.18),transparent)]
    "
            />

            {/* slow gradient sweep on hover */}
            <span
              className="
      absolute inset-0 -translate-x-full group-hover:translate-x-0
      transition-transform duration-[1200ms] ease-out
      bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-90
    "
            />

            {/* glossy shine pass */}
            <span
              className="
      pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
      -skew-x-12 bg-white/18
      translate-x-[-120%] group-hover:translate-x-[320%]
      transition-transform duration-[1400ms] ease-out blur-[2px]
    "
            />

            {/* content with arrow visible initially */}
            <span className="relative z-10 flex items-center gap-2">
              <span>Get Started</span>
              <svg
                className="h-5 w-5 translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </span>
          </button>


      </div>
      </div>
    </section>
  );
};

export default Hero10;
