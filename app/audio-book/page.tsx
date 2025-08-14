"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";
import Hero4 from "@/components/hero4";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Hero6 from "@/components/hero6";
import Hero11 from "@/components/hero11";
import Hero12 from "@/components/hero12";

const tabs = [
  {
    key: "developmental",
    title: "Narration",
    image: "/assets/images/narration.webp",
    content: `Our audiobook creation company features top-tier narrators who bring your characters to life with expressive storytelling. With rich emotions and depth, our narrators make every scene immersive, allowing listeners to truly experience and connect with your book.`,
  },
  {
    key: "copyediting",
    title: "Audio Editing",
    image: "/assets/images/audio-editing.webp",
    content: `Not satisfied with a part of your audiobook? No worries! We offer expert editing services to refine narration, remove background noise, adjust volume, and enhance sound quality. Our goal is to deliver a smooth, professional, and immersive listening experience.`,
  },
  {
    key: "lineediting",
    title: "Soundtracks",
    image: "/assets/images/soundtracks.webp",
    content: `Make your audiobook more engaging with customized sound effects and background music. We tailor every sound element to match your story, creating a rich, immersive experience that captivates listeners.`,
  },
  {
    key: "proofreading",
    title: "Distribution",
    image: "/assets/images/distribution.webp",
    content: `We ensure your audiobook reaches a global audience by distributing it on major platforms like Audible and iTunes. Our team handles the entire process, making your audiobook easily accessible to listeners everywhere.`,
  },
];

const Audiobook = () => {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState("developmental");

  const currentTab = tabs.find((tab) => tab.key === activeTab);
  if (!currentTab) return null;

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
                  Professional Audio Book Services for <br />
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
              src="/assets/images/audio-editing.webp"
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

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#f4f8fb] to-white text-[#012A4A]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Bring Your Story to Life with Our Audiobook Services
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            Turn your book into an immersive audio experience with our premium
            audiobook services. Our expert narrators, skilled audio editors, and
            marketing professionals ensure top-quality production that
            captivates listeners anytime, anywhere. Let your story be heard and
            enjoyed by a wider audience!
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-6 max-w-6xl mx-auto">
          {/* Sidebar Tabs */}
          <div className="flex flex-row flex-wrap lg:flex-col gap-3 w-full lg:w-1/4">
            {tabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`w-full text-left px-4 py-3 rounded-lg font-medium border-2 transition-all duration-300 ease-in-out focus:outline-none
                ${
                  activeTab === tab.key
                    ? "bg-gradient-to-r from-cyan-700 to-teal-500 text-white border-transparent shadow-md"
                    : "bg-white text-[#012A4A] border-cyan-200 hover:shadow"
                }`}
              >
                {tab.title}
              </button>
            ))}
          </div>

          {/* Content Panel */}
          <div className="flex flex-col lg:flex-row gap-6 w-full bg-white rounded-2xl shadow-xl p-6 md:p-10 transition-all duration-500">
            <div className="w-full lg:w-1/2">
              <img
                src={currentTab.image}
                alt={currentTab.title}
                className="w-full h-auto max-w-full rounded-xl shadow-md object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
            <div className="w-full lg:w-1/2 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-4 break-words">
                  {currentTab.title}
                </h3>
                <p className="text-gray-700 text-base md:text-lg leading-relaxed break-words">
                  {currentTab.content}
                </p>
              </div>
              <button
                onClick={openModal}
                aria-label="Open get started modal"
                className="mt-6 px-6 py-3 self-start bg-gradient-to-r from-[#012A4A] to-[#013860] text-white font-semibold rounded-lg shadow-md hover:scale-105 transition-all duration-300"
              >
                GET A QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      <Hero4 />

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
              Premium Audiobook Services for Publish Digitally
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              Publish Digitally is a leading audiobook creation company
              dedicated to transforming your book into an unforgettable audio
              experience. Our expert narrators, skilled audio engineers, and
              marketing specialists work together to produce high-quality
              audiobooks that captivate listeners and expand your reach. Trust
              us to bring your story to life with clarity, emotion, and
              professionalism.
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title: "Listening Experience",
                  desc: "Transform your book into an immersive audio experience with our professional narration and sound design.",
                },
                {
                  title: "Publication Support",
                  desc: "We handle the entire audiobook production process, from recording to editing and distribution, ensuring a seamless experience.",
                },
                {
                  title: "Enhancement & Soundtracks",
                  desc: "Add depth to your audiobook with custom sound effects and background music, enhancing the storytelling experience.",
                },
                {
                  title: "Final Polishing & Publishing",
                  desc: "Our team ensures your audiobook is polished to perfection, ready for distribution on major platforms like Audible and iTunes.",
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

      <section className="relative bg-[#eaf6fb] px-4 md:px-8 lg:px-20 overflow-hidden text-[#052540] pb-20">
        <div className="text-center max-w-3xl mx-auto pt-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#052540] font-serif leading-tight">
            Our Comprehensive Audiobook Creation Process
          </h2>
          <p className="text-lg text-[#052540]">
            We handle every step of audiobook production to turn your book into
            an unforgettable listening experience. From initial planning to
            final distribution, our expert team ensures a seamless process,
            delivering a high-quality audiobook that captivates listeners and
            meets your expectations.
          </p>
        </div>

        <div className="relative z-10 w-full pb-0">
          {/* lg layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-10">
              <Card
                step="01"
                title="Planning & Pre-Production"
                content="We start by understanding your vision, selecting the perfect narrator, and planning the tone, pacing, and style of your audiobook. This step ensures your book’s audio format aligns with your target audience and genre."
              />
              <Card
                step="02"
                title="Professional Narration & Recording"
                content="Our skilled voice artists bring your story to life with expressive narration. We ensure high-quality recording in professional studios, capturing every word with clarity and emotion for an engaging listening experience."
              />
            </div>

            <div className="flex justify-center items-center h-full">
              <Image
                src="/assets/images/process.webp"
                alt="Process Illustration"
                width={520}
                height={520}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col gap-10">
              <Card
                step="03"
                title="Audio Editing & Sound Enhancement"
                content="Our expert audio engineers refine the recording by removing background noise, adjusting volume levels, and adding customized sound effects or music if desired. This step ensures a smooth and immersive audiobook experience."
              />
              <Card
                step="04"
                title="Distribution & Publishing"
                content="We format your audiobook for major platforms like Audible, iTunes, and Google Play, making it accessible to a wide audience. Our team handles the publishing process, ensuring your audiobook reaches listeners worldwide."
              />
            </div>
          </div>

          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            <Card
              step="01"
              title="Planning & Pre-Production"
              content="We start by understanding your vision, selecting the perfect narrator, and planning the tone, pacing, and style of your audiobook. This step ensures your book’s audio format aligns with your target audience and genre."
            />
            <Card
              step="02"
              title="Professional Narration & Recording"
              content="Our skilled voice artists bring your story to life with expressive narration. We ensure high-quality recording in professional studios, capturing every word with clarity and emotion for an engaging listening experience."
            />
            <Card
              step="03"
              title="Audio Editing & Sound Enhancement"
              content="Our expert audio engineers refine the recording by removing background noise, adjusting volume levels, and adding customized sound effects or music if desired. This step ensures a smooth and immersive audiobook experience."
            />
            <Card
              step="04"
              title="Distribution & Publishing"
              content="We format your audiobook for major platforms like Audible, iTunes, and Google Play, making it accessible to a wide audience. Our team handles the publishing process, ensuring your audiobook reaches listeners worldwide."
            />
          </div>

          {/* sm layout */}
          <div className="md:hidden flex flex-col gap-8">
            <Card
              step="01"
              title="Planning & Pre-Production"
              content="We start by understanding your vision, selecting the perfect narrator, and planning the tone, pacing, and style of your audiobook. This step ensures your book’s audio format aligns with your target audience and genre."
            />
            <Card
              step="02"
              title="Professional Narration & Recording"
              content="Our skilled voice artists bring your story to life with expressive narration. We ensure high-quality recording in professional studios, capturing every word with clarity and emotion for an engaging listening experience."
            />
            <Card
              step="03"
              title="Audio Editing & Sound Enhancement"
              content="Our expert audio engineers refine the recording by removing background noise, adjusting volume levels, and adding customized sound effects or music if desired. This step ensures a smooth and immersive audiobook experience."
            />
            <Card
              step="04"
              title="Distribution & Publishing"
              content="We format your audiobook for major platforms like Audible, iTunes, and Google Play, making it accessible to a wide audience. Our team handles the publishing process, ensuring your audiobook reaches listeners worldwide."
            />
          </div>
        </div>
      </section>

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

export default Audiobook;
