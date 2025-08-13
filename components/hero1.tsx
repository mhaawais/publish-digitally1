"use client";

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
          loading="lazy"
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
      >
        Your browser does not support the video tag.
      </video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center items-start h-full px-6 md:px-16 max-w-4xl">
        <div className="bg-white/90 rounded-md p-6 md:p-10 shadow-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#012A4A] mb-4 leading-tight font-serif">
            <span className="block">
              Transforming Ideas into Published Masterpieces –
            </span>
            <span className="block">Expert Book Writing, Editing </span>
            <span className="block">Publishing Services</span>
          </h1>
          {/* <button
            aria-label="Open get started modal"
            onClick={openModal}
            className="mt-4 bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
          >
            Get Started
          </button>

          <button
            className="mt-4 bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
          >
            Get Started
          </button> */}

          {/*  <button
            aria-label="Open get started modal"
            onClick={openModal}
            className="
    group relative mt-4 inline-flex items-center justify-center
    overflow-hidden rounded-2xl px-10 py-3.5
    font-semibold text-white
    bg-[#052540] shadow-[0_10px_25px_-10px_rgb(0,0,0,0.6)]
    transition-[transform,box-shadow] duration-300 ease-out
    hover:translate-y-[-1px] hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)]
    active:translate-y-[0px]
    ring-1 ring-white/10
  "
          >
             subtle outer glow on hover
            <span
              className="
      pointer-events-none absolute inset-0
      opacity-0 group-hover:opacity-100 transition-opacity duration-300
      rounded-2xl
      ring-2 ring-cyan-300/30
      blur-[1px]
    "
            />

            {/* sliding gradient overlay (left -> right)
            <span
              className="
      absolute inset-0 -translate-x-full group-hover:translate-x-4
      transition-transform duration-1000 ease-out
      bg-gradient-to-r from-[#0a6ebd] via-[#2aa8ff] to-[#00d4ff]
    "
            />

            {/* glossy 'shine' sweep
            <span
              className="
      pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
      -skew-x-12 bg-white/20
      translate-x-[-120%] group-hover:translate-x-[320%]
      transition-transform duration-[2000ms] ease-out
      blur-[2px]
    "
            />

            {/* default text 
            <span className="relative z-10 transition-opacity duration-200 group-hover:opacity-0">
              Get Started
            </span>

            {/* hover text 
            <span
              className="
      absolute inset-0 z-10 flex items-center justify-center
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
            >
              Get A Quote
            </span>
          </button>  */}

          <button
            aria-label="Open get started modal"
            onClick={openModal}
            className="
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-2xl px-10 py-3.5
    font-semibold tracking-wide text-white
    bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd]
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
              Get Started
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

      {/* Bottom Image Wave */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <img
          src="/assets/images/bottom.webp"
          alt="bottom wave"
          loading="lazy"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero1;
