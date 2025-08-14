import React from "react";
import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";

const Hero5 = () => {
  const { openModal } = useModal();

  return (
    <section className="bg-[#eaf6fb] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="relative w-full max-w-md lg:max-w-[450px] flex-shrink-0">
          <div className="rounded-[50%] bg-white p-2 shadow-xl">
            <Image
              src="/assets/images/home-side-1.webp"
              alt="Book Mockup"
              width={600}
              height={600}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#052540] leading-tight font-serif">
            Publish Digitally – Helping Your Story Come Alive
          </h2>
          <p className="mt-6 text-base sm:text-lg text-black">
            Partner with us to transform your manuscript into a powerful,
            professionally crafted book. From editing to publishing and
            everything in between, our team guides you every step of the way so
            your voice can resonate with readers everywhere.
          </p>
          {/* <button
            onClick={openModal}
            className="mt-6 inline-block bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </button> */}

            <button
            aria-label="Open get started modal"
            onClick={openModal}
            className="
    mt-6 group relative inline-flex items-center justify-center
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
              Get Started
            </span>
          </button>


        </div>
      </div>
    </section>
  );
};

export default Hero5;
