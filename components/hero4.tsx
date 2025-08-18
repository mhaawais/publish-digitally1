"use client";

import React from "react";
import { useEffect, useRef } from "react";
import { useModal } from "@/app/context/ModalContext";

const Hero4 = () => {
  const { openModal } = useModal();

  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Add the animation class when the element enters the viewport
          //  entry.target.classList.add("animate-fade-in-up"); // Adjust with any animation class you want
            entry.target.classList.add("animate-scale-in");
            observer.unobserve(entry.target); // Stop observing after animation is triggered
          }
        });
      },
      { threshold: 0.3 } // Trigger when 40% of the element is visible in the viewport
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
          <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold leading-snug drop-shadow-md font-serif ">
            Don’t Keep Your Story Waiting - Let’s Get Writing!
          </h1>
          <p className="text-white mt-6 text-base sm:text-lg max-w-3xl mx-auto drop-shadow">
            Turn Your Story into a Bestseller. Start Writing with Us Today! Your
            journey from idea to published author begins here. Whether you're
            starting with a spark of inspiration or a full outline, our expert
            team will guide you through every step from writing and editing to
            publishing and promotion. We don’t just help you write a book; we
            help you create a legacy. Click below and take the first step toward
            becoming a published author!
          </p>

          <button
            aria-label="Open get started modal"
            onClick={openModal}
            className="
    mt-8 group relative inline-flex items-center justify-center
    overflow-hidden rounded-2xl px-10 py-3.5
    font-semibold tracking-wide text-white
    bg-[#5591b4]
    shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]
    transition-[transform,box-shadow] duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)]
    active:translate-y-0
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]
    motion-reduce:transition-none motion-reduce:hover:transform-none
  "
          >
            {/* ambient glow (subtle, always on) */}
            <span
              className="
      pointer-events-none absolute inset-[-2px] rounded-2xl
      bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
          radial-gradient(140px_90px_at_80%_30%,rgba(42,168,255,.16),transparent)]
    "
            />

            {/* animated border glow on hover */}
            <span
              className="
      pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10
      group-hover:ring-cyan-200/40 transition-[box-shadow,opacity] duration-300
      shadow-[inset_0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_18px_rgba(42,168,255,0.25)]
    "
            />

            {/* slow sliding gradient overlay (left → right) */}
            <span
              className="
      absolute inset-0 -translate-x-full group-hover:translate-x-4
      transition-transform duration-1000 ease-out
      bg-gradient-to-r from-[#0a6ebd] via-[#2aa8ff] to-[#00d4ff]
      opacity-90
    "
            />

            {/* glossy shine sweep */}
            <span
              className="
      pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
      -skew-x-12 bg-white/18
      translate-x-[-120%] group-hover:translate-x-[320%]
      transition-transform duration-[2000ms] ease-out
      blur-[2px]
    "
            />

            {/* default text */}
            <span className="relative z-10 transition-all duration-200 group-hover:opacity-0">
              Get A Quote
            </span>

            {/* hover text */}
            <span
              className="
      absolute inset-0 z-10 flex items-center justify-center
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
            >
              Get A Quote
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero4;
