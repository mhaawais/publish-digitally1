"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";
import Hero4 from "@/components/hero4";
import Hero6 from "@/components/hero6";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Hero11 from "@/components/hero11";
import Hero12 from "@/components/hero12";
import Hero3 from "@/components/hero3";
import Hero9 from "@/components/hero9";
import Hero10 from "@/components/hero10";



const Illustration = () => {
  const { openModal } = useModal();

  return (
    <div>
      <Header />

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
                  Expert Ghostwriting Services by <br />
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
              src="/assets/images/book-writing.webp"
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
              Become a Best-Selling Author with Our Professional Ghostwriting
              Services
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              Our professional ghostwriters blend creativity, in-depth research,
              and storytelling expertise to craft compelling manuscripts that
              engage readers and make an impact in the industry. We collaborate
              with you throughout the writing process to ensure high-quality,
              original content tailored to your vision. Let our expert
              ghostwriting services help you achieve best-seller success and
              elevate your author brand!
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title:
                    "Be the authority in your niche with professionaly written content.",
                  //    desc: "",
                },
                {
                  title:
                    "Convert your ideas into text and make it last forever.",
                  //    desc: "",
                },
                {
                  title:
                    "Engage readers with captivating storytelling that drives loyalty and trust.",
                  //     desc: "",
                },
                {
                  title:
                    "Achieve Best Seller status with our book ghost writing services.",
                  //       desc: "",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="bg-[#052540] text-white p-2 rounded-full text-sm shadow-md">
                    <FaCheck />
                  </span>
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    {/* <p className="text-sm text-[#052540]">{item.desc}</p> */}
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

      <Hero4 />
      <Hero3 />
      <Hero6 />

      <section className="relative bg-[#eaf6fb] px-4 md:px-8 lg:px-20 overflow-hidden text-[#052540] pb-20">
        <div className="text-center max-w-3xl mx-auto pt-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#052540] font-serif leading-tight">
            Our All-Inclusive Ghostwriting Approach
          </h2>
          <p className="text-lg text-[#052540]">
            We know how to transform great ideas into compelling books. Our
            streamlined ghostwriting process covers every step, from initial
            concept to publication, ensuring your story shines.
          </p>
        </div>

        <div className="relative z-10 w-full pb-0">
          {/* lg layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-10">
              <Card
                step="01"
                title="Consultation & Planning"
                content="Every great book starts with a solid foundation. In this phase, we discuss your book idea, target audience, and writing style to ensure we capture your vision. Our expert ghostwriters create a detailed outline and structure while conducting in-depth research for accuracy and authenticity."
              />
              <Card
                step="02"
                title="Writing & Manuscript Development"
                content="Once the plan is in place, our professional native book writers begin crafting your manuscript. We focus on engaging storytelling, clear structure, and compelling content while keeping you involved through regular updates and draft reviews."
              />
            </div>

            <div className="flex justify-center items-center h-full">
              <Image
                src="/assets/images/process.webp"
                alt="Cover Design Process Illustration"
                width={520}
                height={520}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-10">
              <Card
                step="03"
                title="Editing & Refinement"
                content="After completing the first draft, our experienced editors refine the manuscript by checking for grammar, coherence, flow, and style consistency. We conduct multiple rounds of editing, proofreading, and revisions to ensure a polished, publication-ready book."
              />
              <Card
                step="04"
                title="Final Delivery & Publishing Support"
                content="Once the manuscript is perfected, we deliver it with 100% ownership rights. We also offer publishing guidance, helping you navigate Amazon KDP, self-publishing platforms, or traditional publishing options . Additionally, our marketing experts can assist in crafting a strategy to promote your book for maximum visibility."
              />
            </div>
          </div>

          {/* md screens */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            <Card
              step="01"
              title="Consultation & Planning"
              content="Every great book starts with a solid foundation. In this phase, we discuss your book idea, target audience, and writing style to ensure we capture your vision. Our expert ghostwriters create a detailed outline and structure while conducting in-depth research for accuracy and authenticity."
            />
            <Card
              step="02"
              title="Writing & Manuscript Development"
              content="Once the plan is in place, our professional native book writers begin crafting your manuscript. We focus on engaging storytelling, clear structure, and compelling content while keeping you involved through regular updates and draft reviews."
            />
            <Card
              step="03"
              title="Editing & Refinement"
              content="After completing the first draft, our experienced editors refine the manuscript by checking for grammar, coherence, flow, and style consistency. We conduct multiple rounds of editing, proofreading, and revisions to ensure a polished, publication-ready book."
            />
            <Card
              step="04"
              title="Final Delivery & Publishing Support"
              content="Once the manuscript is perfected, we deliver it with 100% ownership rights. We also offer publishing guidance, helping you navigate Amazon KDP, self-publishing platforms, or traditional publishing options . Additionally, our marketing experts can assist in crafting a strategy to promote your book for maximum visibility."
            />
          </div>

          {/* sm layout */}
          <div className="md:hidden flex flex-col gap-8">
            <Card
              step="01"
              title="Consultation & Planning"
              content="Every great book starts with a solid foundation. In this phase, we discuss your book idea, target audience, and writing style to ensure we capture your vision. Our expert ghostwriters create a detailed outline and structure while conducting in-depth research for accuracy and authenticity."
            />
            <Card
              step="02"
              title="Writing & Manuscript Development"
              content="Once the plan is in place, our professional native book writers begin crafting your manuscript. We focus on engaging storytelling, clear structure, and compelling content while keeping you involved through regular updates and draft reviews."
            />
            <Card
              step="03"
              title="Editing & Refinement"
              content="After completing the first draft, our experienced editors refine the manuscript by checking for grammar, coherence, flow, and style consistency. We conduct multiple rounds of editing, proofreading, and revisions to ensure a polished, publication-ready book."
            />
            <Card
              step="04"
              title="Final Delivery & Publishing Support"
              content="Once the manuscript is perfected, we deliver it with 100% ownership rights. We also offer publishing guidance, helping you navigate Amazon KDP, self-publishing platforms, or traditional publishing options . Additionally, our marketing experts can assist in crafting a strategy to promote your book for maximum visibility."
            />
          </div>
        </div>
      </section>

      <Hero9 />
      <Hero10 />
      <Hero11 />
      <Hero12 />

      <ModalForm />
      <Footer />
    </div>
  );
};

const Card = ({
  step,
  title,
  content,
}: {
  step: string;
  title: string;
  content: string;
}) => (
  <div className="relative bg-[#c5d1d8] hover:bg-[#cdcdd3] backdrop-blur-md rounded-xl shadow-xl px-6 py-10 text-center flex flex-col justify-start items-center h-full transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl text-[#052540]">
    <span className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-blue-300 rounded-sm"></span>
    <h3 className="text-3xl font-bold mb-2">{step}</h3>
    <h4 className="font-semibold mb-3 text-lg">{title}</h4>
    <p className="text-base leading-relaxed max-w-xs">{content}</p>
  </div>
);

export default Illustration;
