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
    title: "Custom Web Development",
    image: "/assets/images/custom-web.webp",
    content: `Our professional author website design services let you create a website that reflects your unique style. From colors to content, every detail is customized to match your vision. With an engaging design and seamless user experience, your site will captivate visitors and make a lasting impression.`,
  },
  {
    key: "copyediting",
    title: "CMS Website Development",
    image: "/assets/images/cms.webp",
    content: `A Content Management System (CMS) website lets you update and manage content effortlessly. We create user-friendly CMS websites so you can keep your site fresh without technical expertise. Stay connected with readers by regularly sharing new updates and content.`,
  },
  {
    key: "lineediting",
    title: "E-commerce Website",
    image: "/assets/images/ecom-web.webp",
    content: `Our e-commerce website design services help you sell books directly to readers with a secure and user-friendly online store. We create efficient, high-converting websites that make purchasing easy, increasing your sales and expanding your audience.`,
  },
  {
    key: "proofreading",
    title: "Web Portal",
    image: "/assets/images/web-portal.webp",
    content: `A web portal is a dynamic platform that combines blogs, forums, and interactive features in one place. We design engaging, user-friendly portals that keep your audience connected, providing valuable resources and fostering a strong reader community.`,
  },
];

const Authorwebsite = () => {
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
                  Professional Author Website Design for <br />
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
              src="/assets/images/author-website.webp"
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
            Elevate Your Author Brand with a Professional Website
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            In today’s digital age, having a strong online presence is essential
            for success. Our expert author website design services help you
            build a visually stunning, user-friendly website that enhances your
            brand, attracts more readers, and increases engagement. With
            SEO-optimized content and seamless navigation, we ensure your site
            drives traffic and boosts your visibility.
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
              Showcase Your Work with a Stunning Author Website
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              Make your mark online with our professional author website design
              services. Our expert developers create visually appealing,
              user-friendly websites that reflect your unique brand and engage
              readers. We handle the technical details so you can focus on
              writing while building a strong online presence.
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title: "Custom Web Design:",
                  //    desc: "Transform your book into an immersive audio experience with our professional narration and sound design.",
                },
                {
                  title: "SEO Optimization:",
                  //    desc: "We handle the entire audiobook production process, from recording to editing and distribution, ensuring a seamless experience.",
                },
                {
                  title: "Content Management Systems:",
                  //     desc: "Add depth to your audiobook with custom sound effects and background music, enhancing the storytelling experience.",
                },
                {
                  title: "Responsive Design:",
                  //       desc: "Our team ensures your audiobook is polished to perfection, ready for distribution on major platforms like Audible and iTunes.",
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
            Our Comprehensive Author Website Design Process
          </h2>
          <p className="text-lg text-[#052540]">
            Build a powerful online presence with our all-in-one author website
            services. We create custom, engaging, and SEO-optimized websites
            that showcase your brand and captivate readers. From concept to
            launch, our expert team ensures a perfect balance of design,
            functionality, and visibility to help you stand out.
          </p>
        </div>

        <div className="relative z-10 w-full pb-0">
          {/* lg layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-10">
              <Card
                step="01"
                title="Planning & Concept Development"
                content="We start by understanding your vision, genre, and branding needs. Our team researches trends and outlines a strategy to create a custom author website that reflects your personality and engages readers."
              />
              <Card
                step="02"
                title="Design & User Experience (UX)"
                content="Our designers craft a visually appealing, user-friendly website with seamless navigation. We focus on typography, color schemes, and layouts that enhance readability and ensure a smooth browsing experience."
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
                title="Development & Optimization"
                content="Our developers bring your website to life with responsive design, SEO optimization, and fast-loading pages. We integrate essential features like blogs, contact forms, and book sales pages to maximize engagement."
              />
              <Card
                step="04"
                title="Testing, Launch & Maintenance"
                content="Before launch, we rigorously test your website for performance, security, and compatibility. After going live, we offer ongoing support to ensure your site stays updated, secure, and optimized for success."
              />
            </div>
          </div>

          {/* md screens */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            <Card
              step="01"
              title="Planning & Concept Development"
              content="We start by understanding your vision, genre, and branding needs. Our team researches trends and outlines a strategy to create a custom author website that reflects your personality and engages readers."
            />
            <Card
              step="02"
              title="Design & User Experience (UX)"
              content="Our designers craft a visually appealing, user-friendly website with seamless navigation. We focus on typography, color schemes, and layouts that enhance readability and ensure a smooth browsing experience."
            />
            <Card
              step="03"
              title="Development & Optimization"
              content="Our developers bring your website to life with responsive design, SEO optimization, and fast-loading pages. We integrate essential features like blogs, contact forms, and book sales pages to maximize engagement."
            />
            <Card
              step="04"
              title="Testing, Launch & Maintenance"
              content="Before launch, we rigorously test your website for performance, security, and compatibility. After going live, we offer ongoing support to ensure your site stays updated, secure, and optimized for success."
            />
          </div>

          {/* sm layout */}
          <div className="md:hidden flex flex-col gap-8">
            <Card
              step="01"
              title="Planning & Concept Development"
              content="We start by understanding your vision, genre, and branding needs. Our team researches trends and outlines a strategy to create a custom author website that reflects your personality and engages readers."
            />
            <Card
              step="02"
              title="Design & User Experience (UX)"
              content="Our designers craft a visually appealing, user-friendly website with seamless navigation. We focus on typography, color schemes, and layouts that enhance readability and ensure a smooth browsing experience."
            />
            <Card
              step="03"
              title="Development & Optimization"
              content="Our developers bring your website to life with responsive design, SEO optimization, and fast-loading pages. We integrate essential features like blogs, contact forms, and book sales pages to maximize engagement."
            />
            <Card
              step="04"
              title="Testing, Launch & Maintenance"
              content="Before launch, we rigorously test your website for performance, security, and compatibility. After going live, we offer ongoing support to ensure your site stays updated, secure, and optimized for success."
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

export default Authorwebsite;
