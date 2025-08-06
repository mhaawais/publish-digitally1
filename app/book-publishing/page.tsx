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
    title: "Traditional Publishing",
    image: "/assets/images/traditional-publishing.webp",
    content: `Our experienced book publishing experts have extensive industry knowledge and a strong network of top publishing companies. With our expertise, we help you get published by the best traditional publishers of your choice. Our team works closely with you to refine your manuscript, ensuring it meets professional publishing standards. We handle everything from editing, formatting, and submission to publisher negotiations, leveraging our connections to secure the best publishing deal. With our professional book publishing services, your book will receive the recognition and success it deserves.`,
  },
  {
    key: "copyediting",
    title: "Self Publishing",
    image: "/assets/images/self-publishing.webp",
    content: `Our comprehensive self-publishing services give you complete control over your publishing journey. We provide expert guidance to help you publish your book on your terms, offering a full suite of services, including professional editing, book cover design, formatting, and global distribution. Our book publishing specialists support you through every stage, ensuring your book is market-ready and professionally crafted. Enjoy the freedom to make key publishing decisions while benefiting from expert assistance to create a high-quality, polished book. With our self-publishing solutions, you retain full ownership and rights, allowing you to reach readers directly and maximize your book sales and profits.`,
  },
  {
    key: "lineediting",
    title: "Digital Publishing",
    image: "/assets/images/digital.webp",
    content: `Our digital publishing solutions enable you to reach a global audience and maximize your book’s visibility. In today’s digital era, making your book available in electronic formats is essential. We specialize in eBook conversion, formatting, and optimization for platforms like Amazon Kindle (KDP), Apple Books, Nook, and more. Our expert digital publishing services include professional eBook design, interactive features, and strategic distribution to ensure your book stands out in the competitive online book marketplace. With digital publishing, you can connect with readers worldwide, expand your reach, and increase book sales effortlessly.`,
  },
  {
    key: "proofreading",
    title: "Specialized Publishing",
    image: "/assets/images/specilized-publishing.webp",
    content: `What if your book could stand out in your niche market? With our specialized publishing services, it’s possible! Every book is unique, and some require a customized publishing approach to truly shine. As a leading book publishing agency, we offer tailored publishing solutions for genres that need special attention, including academic books, illustrated books, cookbooks, and more. Our experts ensure your book is enhanced with professional design, layout, and strategic marketing, highlighting its unique qualities. With our specialized book publishing services, your book will not only meet industry standards but also reach the right audience for maximum impact and success.`,
  },
];

const Illustration = () => {
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
                  Professional Book Publishing Services for <br />
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
              src="/assets/images/publishing (1).webp"
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
            Publish Your Book with Confidence – We Bring Your Story to Life
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            Ensuring your book has a strong, cohesive identity is essential for
            its success. That’s why we offer expert book publishing and
            marketing services to help authors achieve their dreams. Whether
            you’re looking for traditional publishing, self-publishing, digital
            publishing, or niche publishing solutions, our team has you covered.
            Our professional book publishing experts ensure your book receives
            the visibility and recognition it deserves in today’s competitive
            market.
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
              Become a Best-Selling Author with Our Expert Book Publishing
              Services
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              In today’s highly competitive book publishing industry, many
              aspiring authors struggle to achieve bestseller status due to a la
              ck of effective marketing strategies. However, with our
              professional book promotion services, you can successfully
              position your book in front of the right audience. Our team
              implements proven book marketing techniques to enhance your book’s
              visibility, credibility, and sales potential. Let us help you turn
              your dream into reality and make your book a top-selling success!
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title: "Make a name for yourself in your field.",
                  //    desc: "",
                },
                {
                  title:
                    "Share content that truly represents your brand's voice.",
                  //    desc: "",
                },
                {
                  title:
                    "Increase your brand's visibility and attract new readers.",
                  //     desc: "",
                },
                {
                  title: "Use smart marketing to push your book to the top.",
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
            Our Step-by-Step Book Publishing Process
          </h2>
          <p className="text-lg text-[#052540]">
            Transform your manuscript into a professionally published book with
            our streamlined and efficient publishing process. We provide expert
            guidance at every stage to ensure your book meets industry standards
            and reaches its full potential. Our publishing specialists handle
            everything from manuscript refinement and formatting to final
            distribution, making your publishing journey smooth, stress-free,
            and successful. Let us help you bring your book to life and connect
            with the right audience!
          </p>
        </div>

        <div className="relative z-10 w-full pb-0">
          {/* lg layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-10">
              <Card
                step="01"
                title="Idea Development & Planning"
                content="Every successful book starts with a strong foundation. Our expert ghostwriters collaborate with you to refine your book concept, target audience, and writing goals. We create a structured outline and chapter breakdown, ensuring a clear and compelling narrative. Through detailed research, we gather essential information to enhance the content and align it with market trends."
              />
              <Card
                step="02"
                title="Writing & Manuscript Creation"
                content="Once the blueprint is ready, our professional ghostwriting team begins crafting your high-quality manuscript . We ensure engaging storytelling, proper structure, and a natural writing flow that captures your voice. Regular updates and draft reviews allow you to provide feedback, ensuring the book aligns perfectly with your vision."
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
                title="Editing & Proofreading"
                content="A polished book requires expert refinement. Our editing specialists conduct multiple rounds of developmental editing, copyediting, and proofreading to ensure grammatical accuracy, clarity, and consistency . This phase guarantees that your book meets publishing industry standards and is free from errors."
              />
              <Card
                step="04"
                title="Finalization & Publishing Assistance"
                content="Once the manuscript is perfected, we prepare it for self-publishing or traditional publishing submission . Our team assists with formatting, cover design, and distribution strategies to ensure your book reaches the right audience. We also provide marketing support to help maximize your book’s success in the competitive marketplace."
              />
            </div>
          </div>

          {/* md screens */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            <Card
              step="01"
              title="Idea Development & Planning"
              content="Every successful book starts with a strong foundation. Our expert ghostwriters collaborate with you to refine your book concept, target audience, and writing goals. We create a structured outline and chapter breakdown, ensuring a clear and compelling narrative. Through detailed research, we gather essential information to enhance the content and align it with market trends."
            />
            <Card
              step="02"
              title="Writing & Manuscript Creation"
              content="Once the blueprint is ready, our professional ghostwriting team begins crafting your high-quality manuscript . We ensure engaging storytelling, proper structure, and a natural writing flow that captures your voice. Regular updates and draft reviews allow you to provide feedback, ensuring the book aligns perfectly with your vision."
            />
            <Card
              step="03"
              title="Editing & Proofreading"
              content="A polished book requires expert refinement. Our editing specialists conduct multiple rounds of developmental editing, copyediting, and proofreading to ensure grammatical accuracy, clarity, and consistency . This phase guarantees that your book meets publishing industry standards and is free from errors."
            />
            <Card
              step="04"
              title="Finalization & Publishing Assistance"
              content="Once the manuscript is perfected, we prepare it for self-publishing or traditional publishing submission . Our team assists with formatting, cover design, and distribution strategies to ensure your book reaches the right audience. We also provide marketing support to help maximize your book’s success in the competitive marketplace."
            />
          </div>

          {/* sm layout */}
          <div className="md:hidden flex flex-col gap-8">
            <Card
              step="01"
              title="Idea Development & Planning"
              content="Every successful book starts with a strong foundation. Our expert ghostwriters collaborate with you to refine your book concept, target audience, and writing goals. We create a structured outline and chapter breakdown, ensuring a clear and compelling narrative. Through detailed research, we gather essential information to enhance the content and align it with market trends."
            />
            <Card
              step="02"
              title="Writing & Manuscript Creation"
              content="Once the blueprint is ready, our professional ghostwriting team begins crafting your high-quality manuscript . We ensure engaging storytelling, proper structure, and a natural writing flow that captures your voice. Regular updates and draft reviews allow you to provide feedback, ensuring the book aligns perfectly with your vision."
            />
            <Card
              step="03"
              title="Editing & Proofreading"
              content="A polished book requires expert refinement. Our editing specialists conduct multiple rounds of developmental editing, copyediting, and proofreading to ensure grammatical accuracy, clarity, and consistency . This phase guarantees that your book meets publishing industry standards and is free from errors."
            />
            <Card
              step="04"
              title="Finalization & Publishing Assistance"
              content="Once the manuscript is perfected, we prepare it for self-publishing or traditional publishing submission . Our team assists with formatting, cover design, and distribution strategies to ensure your book reaches the right audience. We also provide marketing support to help maximize your book’s success in the competitive marketplace."
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

export default Illustration;
