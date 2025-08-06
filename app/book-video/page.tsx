"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import React, { useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";
import Hero2 from "@/components/hero2";
import Hero4 from "@/components/hero4";
import Hero6 from "@/components/hero6";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Hero11 from "@/components/hero11";
import Hero12 from "@/components/hero12";



const tabs = [
  {
    key: "developmental",
    title: "Dynamic Video Book Trailers",
    image: "/assets/images/book-trailer.webp",
    content: `Our video book trailers are crafted to build excitement and captivate audiences by showcasing key moments and themes in a visually stunning way. Perfect for social media and online platforms, these trailers help you attract readers, generate buzz, and boost anticipation for your book.`,
  },
  {
    key: "copyediting",
    title: "Creative 2d Video",
    image: "/assets/images/2d-video.webp",
    content: `Enhance your book’s appeal with captivating 2D animation videos that bring your story to life. These animations add depth, visual interest, and excitement, making complex ideas easier to understand and your book more engaging, fun, and memorable for readers.`,
  },
  {
    key: "lineediting",
    title: "Informative Explainer Videos",
    image: "/assets/images/explainer-video.webp",
    content: `Our explainer videos make complex ideas easy to understand while keeping your audience engaged. We create clear, concise, and visually appealing videos that quickly convey your book’s key concepts, making them perfect for introductions, summaries, or in-depth explanations.`,
  },
  {
    key: "proofreading",
    title: "Eye-catching Infographics",
    image: "/assets/images/infographic.webp",
    content: `Infographics present key information in a clear, visually appealing format that’s easy to understand. We design eye-catching graphics that highlight important points from your book, making content more engaging and shareable across social media and other platforms to attract and inform readers.`,
  },
];

const Bookvideo = () => {
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
                  Engage Readers with a Captivating <br />
                  Video Book Trailer
                  {/* Publish Digitally– */}
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
              src="/assets/images/book-video.webp"
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

      <Hero2 />

      <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#f4f8fb] to-white text-[#012A4A]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
            Captivate Readers with High-Quality Book Video Trailers
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            Promote your book with professionally crafted book videos designed
            to bring your story to life and attract readers worldwide. Our
            expert team creates engaging, cinematic trailers, 2D animations, and
            explainer videos that grab attention and generate excitement.
            Whether you’re launching a new book or boosting sales, our
            high-quality book video services enhance visibility and leave a
            lasting impact on your audience.
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
              Hire Book Video Experts to Instantly Captivate Readers
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              Our professional book video company specializes in creating
              visually stunning videos that highlight the essence of your story
              and attract more readers. From book trailers to explainer videos,
              our expert team crafts engaging content that boosts your book’s
              visibility and appeal.
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title: "Eye-Catching Book Trailers",
                  //    desc: "",
                },
                {
                  title: "Creative 2D Animation Videos",
                  //    desc: "",
                },
                {
                  title: "informative Explainer Videos",
                  //     desc: "",
                },
                {
                  title: "Captivating Infographics",
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

      <section className="relative bg-[#eaf6fb] px-4 md:px-8 lg:px-20 overflow-hidden text-[#052540] pb-20">
        <div className="text-center max-w-3xl mx-auto pt-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#052540] font-serif leading-tight">
            Our Book Video Creation Process
          </h2>
          <p className="text-lg text-[#052540]">
            Our book video creation process is simple, seamless, and designed to
            maximize reader engagement. Whether you need a captivating book
            trailer or an engaging author video, our experts bring your vision
            to life. Just tell us your requirements, and we’ll deliver a
            high-quality video that leaves a lasting impact on your audience.
          </p>
        </div>

        <div className="relative z-10 w-full pb-0">
          {/* lg layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-10">
              <Card
                step="01"
                title="Concept Development & Storyboarding"
                content="We start by understanding your book’s theme, genre, and key moments to create a compelling concept. Our team develops a storyboard to outline visuals, narration, and transitions for an engaging trailer."
              />
              <Card
                step="02"
                title="Professional Video Production & Animation"
                content="Our experts bring the storyboard to life with high-quality visuals, cinematic effects, and 2D/3D animations. We ensure the video aligns with your book’s tone and captures the essence of your story."
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
                title="Voiceover & Sound Design"
                content="To enhance engagement, we add professional voiceovers, background music, and sound effects that complement the visuals. This step ensures a dynamic and immersive viewer experience."
              />
              <Card
                step="04"
                title="Editing, Finalization & Distribution"
                content="We refine the video with expert editing, ensuring seamless transitions, high resolution, and a polished finish. Once approved, we optimize it for social media, websites, and book marketing platforms to maximize reach."
              />
            </div>
          </div>

          {/* md screens */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            <Card
              step="01"
              title="Concept Development & Storyboarding"
              content="We start by understanding your book’s theme, genre, and key moments to create a compelling concept. Our team develops a storyboard to outline visuals, narration, and transitions for an engaging trailer."
            />
            <Card
              step="02"
              title="Professional Video Production & Animation"
              content="Our experts bring the storyboard to life with high-quality visuals, cinematic effects, and 2D/3D animations. We ensure the video aligns with your book’s tone and captures the essence of your story."
            />
            <Card
              step="03"
              title="Voiceover & Sound Design"
              content="To enhance engagement, we add professional voiceovers, background music, and sound effects that complement the visuals. This step ensures a dynamic and immersive viewer experience."
            />
            <Card
              step="04"
              title="Editing, Finalization & Distribution"
              content="We refine the video with expert editing, ensuring seamless transitions, high resolution, and a polished finish. Once approved, we optimize it for social media, websites, and book marketing platforms to maximize reach."
            />
          </div>

          {/* sm layout */}
          <div className="md:hidden flex flex-col gap-8">
            <Card
              step="01"
              title="Concept Development & Storyboarding"
              content="We start by understanding your book’s theme, genre, and key moments to create a compelling concept. Our team develops a storyboard to outline visuals, narration, and transitions for an engaging trailer."
            />
            <Card
              step="02"
              title="Professional Video Production & Animation"
              content="Our experts bring the storyboard to life with high-quality visuals, cinematic effects, and 2D/3D animations. We ensure the video aligns with your book’s tone and captures the essence of your story."
            />
            <Card
              step="03"
              title="Voiceover & Sound Design"
              content="To enhance engagement, we add professional voiceovers, background music, and sound effects that complement the visuals. This step ensures a dynamic and immersive viewer experience."
            />
            <Card
              step="04"
              title="Editing, Finalization & Distribution"
              content="We refine the video with expert editing, ensuring seamless transitions, high resolution, and a polished finish. Once approved, we optimize it for social media, websites, and book marketing platforms to maximize reach."
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

export default Bookvideo;
