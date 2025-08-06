"use client";

import React from "react";
import { useModal } from "@/app/context/ModalContext";
import Header from "@/components/header";
import Footer from "@/components/footer";
import ModalForm from "@/components/ModalForm";
import Hero2 from "@/components/hero2";
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
                onClick={openModal}
                aria-label="Open get started modal"
                className="mt-4 bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#012A4A]"
              >
                Get Started
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
      <Hero2 />
      <Development />
      <Hero4 />
      <Hero5 />

      {/* Hero8 Section with Updated Heading and Features */}
      <section className="relative bg-[#c2dee9] text-[#052540] overflow-hidden">
        {/* Torn Top */}
        {/* <div className="w-full">
          <Image
            src="/assets/images/top.webp"
            alt="Torn Top"
            width={1920}
            height={80}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div> */}

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

        {/* Torn Bottom */}
        {/* <div className="w-full">
          <Image
            src="/assets/images/bottom.webp"
            alt="Torn Bottom"
            width={1920}
            height={80}
            layout="responsive"
            objectFit="cover"
            priority
          />
        </div> */}
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
