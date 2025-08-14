"use client";

import React from "react";
import { useModal } from "@/app/context/ModalContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ModalForm from "@/components/ModalForm";
import Hero4 from "@/components/hero4";
import Hero5 from "@/components/hero5";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Hero6 from "@/components/hero6";
import Hero7 from "@/components/hero7";
import Hero10 from "@/components/hero10";
import Hero11 from "@/components/hero11";
import Hero12 from "@/components/hero12";
import Development from "@/components/development";

const Bookedit = () => {
  const { openModal } = useModal();

  return (
    <div className="relative w-full flex flex-col">
      <Header />

      {/* Full-Height Hero Section */}
      <section className="relative w-full h-screen overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
          <img
            src="/assets/images/top.webp"
            alt="top wave"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Background Image */}
        <img
          src="/assets/images/bg-image.jpeg"
          alt="background"
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        />

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10" />

        {/* Hero Content */}
        <div className="relative z-30 flex flex-col lg:flex-row items-center justify-between h-full px-6 md:px-16 gap-10 max-w-7xl mx-auto">
          {/* Text Block */}
          <div className="w-full lg:max-w-2xl mt-64 lg:mt-0">
            <div className="bg-white/90 rounded-md p-6 md:p-10 shadow-lg backdrop-blur-sm">
              <h1 className="text-3xl md:text-4xl font-bold text-[#012A4A] mb-4 leading-tight font-serif">
                <span className="block">
                  Book Editing Services for <br />
                  Publish Digitally–
                </span>
              </h1>
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

          {/* Image Block */}
          <div className="w-full lg:max-w-md flex justify-center -mt-20 lg:mt-0">
            <img
              src="/assets/images/editing.webp"
              alt="Editing Illustration"
              loading="lazy"
              className="w-full h-auto rounded-xl shadow-lg object-contain"
            />
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
          <img
            src="/assets/images/bottom.webp"
            alt="bottom wave"
            loading="lazy"
            className="w-full h-auto object-cover"
          />
        </div>
      </section>

      {/* Additional Sections */}
      <Development />
      <Hero4 />
      <Hero5 />

      {/* Hero8 Section with Updated Heading and Features */}
      <section className="relative bg-[#c2dee9] text-[#052540] overflow-hidden">
        {/* Main Content */}
        <div className="relative z-10 px-4 sm:px-8 lg:px-24 py-7 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Image (Smaller) */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
              <Image
                src="/assets/images/home-side-1.webp"
                alt="Book Display"
                width={500}
                height={500}
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5">
              Hire Professional Book Editors to Perfect Your Manuscript &
              Achieve Success!
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              Getting your book published doesn’t have to be complicated. With
              Publish Digitally by your side, you gain a reliable partner who
              simplifies the entire journey. From choosing the right platforms
              to preparing your manuscript for release, our dedicated team
              handles every detail with care and precision. We’re here to ensure
              your book gets the exposure it deserves, while you stay focused on
              your vision. Let’s publish your book the smart way — quick,
              professional, and stress-free.
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title: "Personalized Feedback",
                  desc: "Receive a detailed, constructive editorial review tailored to your specific writing style and genre.",
                },
                {
                  title: "Consistency Checks",
                  desc: "Ensure a consistent tone, style, and format throughout the manuscript.",
                },
                {
                  title: "Clarity Enhancement",
                  desc: "Improve the flow and enhance clarity of your book to make it compelling for readers.",
                },
                {
                  title: "Final Polishing",
                  desc: "A final thorough proofreading to eliminate any and all errors and presenting a professional final product.",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="bg-[#052540] text-white p-2 rounded-full text-sm shadow-md">
                    <FaCheck />
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm text-[#052540]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <button
              onClick={openModal}
              className="mt-1 inline-block bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
            >
              Get Started
            </button>
          </div>
        </div>

      </section>

      <Hero6 />
      <Hero7 />
      <Hero10 />
      <Hero11 />
      <Hero12 />

      {/* Modal and Footer */}
      <ModalForm />
      <Footer />
    </div>
  );
};

export default Bookedit;
