"use client";

import React, { useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";
import Hero4 from "@/components/hero4";
import Hero6 from "@/components/hero6";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import Hero11 from "@/components/hero11";
import Hero12 from "@/components/hero12";

const tabs = [
  {
    key: "developmental",
    title: "Children’s Book Illustration",
    image: "/assets/images/childerenbook-illustration.webp",
    content: `Our colorful and engaging children's book illustrations captivate young readers and spark their imagination. Each illustration is carefully crafted to bring your story to life, making reading a fun and immersive experience for children.`,
  },
  {
    key: "copyediting",
    title: "Book Cover Illustration",
    image: "/assets/images/book-illustration.webp",
    content: `First impressions matter! Our custom book cover illustrations are designed to capture your book’s essence and instantly grab readers’ attention. With striking visuals, we create standout covers that make your book impossible to ignore.`,
  },
  {
    key: "lineediting",
    title: "Comic Book Illustration",
    image: "/assets/images/comic.webp",
    content: `Make your comic book characters unforgettable with our vibrant and expressive illustrations. Our skilled artists create detailed, action-packed artwork that captivates readers and makes your story visually immersive and engaging.`,
  },
  {
    key: "proofreading",
    title: "Character Illustration",
    image: "/assets/images/character-illustration.webp",
    content: `Our detailed character designs add depth and personality to your story, making readers feel truly connected. With expressive and visually striking illustrations, we create memorable characters that enhance engagement and bring your book to life.`,
  },
];

const Illustration = () => {
  const { openModal } = useModal();
  const [activeTab, setActiveTab] = useState("developmental");

  const currentTab = tabs.find((tab) => tab.key === activeTab);
  if (!currentTab) return null;
  return (
    <div>

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
                  Custom Book Illustrations for <br />
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
              src="/assets/images/illustration.webp"
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
            Turn Your Vision into Reality with Stunning Book Illustrations!
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            Our professional book illustration services bring your story to life
            with vibrant, captivating artwork. Whether it’s a children’s book,
            graphic novel, or illustrated fiction, our skilled illustrators
            create detailed, high-quality illustrations tailored to your genre.
            Each illustration is designed to enhance your book’s storytelling,
            making it visually unforgettable and engaging for readers.
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
              Bring Your Story to Life with the Best Illustrations in the USA
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              Unlock the full potential of your story with our expert book
              illustration services. Our skilled illustrators transform your
              ideas into stunning, high-quality visuals for children’s books,
              graphic novels, and more. No matter the genre, our illustrations
              captivate readers of all ages and help your book stand out in the
              market.
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title: "Creative Expertise",
                  //    desc: "",
                },
                {
                  title: "Versatile Solutions",
                  //    desc: "",
                },
                {
                  title: "Audience Appeal",
                  //     desc: "",
                },
                {
                  title: "Genre Excellence",
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
            Our Comprehensive Book Illustration Process
          </h2>
          <p className="text-lg text-[#052540]">
            Our expert book illustrators create stunning, high-quality
            illustrations that enhance your storytelling. Whether for children’s
            books, comics, or character designs, we ensure each illustration
            captures your vision, resonates with your audience, and brings your
            story to life.
          </p>
        </div>

        <div className="relative z-10 w-full pb-0">
          {/* lg layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-10">
              <Card
                step="01"
                title="Concept Development & Storyboarding"
                content="We begin by understanding your book’s theme, characters, and artistic vision. Our illustrators create rough sketches and storyboards to outline the visuals, ensuring they align with your narrative."
              />
              <Card
                step="02"
                title="Character & Scene Illustration"
                content="Our artists design detailed and expressive characters along with immersive backgrounds. Whether it’s a children’s book, comic, or novel, we craft illustrations that enhance the storytelling and engage readers."
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
                title="Coloring & Detailing"
                content="Once the sketches are approved, we add vibrant colors, shading, and intricate details to bring your illustrations to life. We ensure the artwork complements the book’s tone and captivates your audience."
              />
              <Card
                step="04"
                title="Finalization and Delivery"
                content="We refine the illustrations, making necessary adjustments for high-resolution quality. The final artwork is optimized for print and digital formats, ensuring your book looks stunning across all platforms."
              />
            </div>
          </div>

          {/* md screens */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            <Card
              step="01"
              title="Concept Development & Storyboarding"
              content="We begin by understanding your book’s theme, characters, and artistic vision. Our illustrators create rough sketches and storyboards to outline the visuals, ensuring they align with your narrative."
            />
            <Card
              step="02"
              title="Character & Scene Illustration"
              content="Our artists design detailed and expressive characters along with immersive backgrounds. Whether it’s a children’s book, comic, or novel, we craft illustrations that enhance the storytelling and engage readers."
            />
            <Card
              step="03"
              title="Coloring & Detailing"
              content="Once the sketches are approved, we add vibrant colors, shading, and intricate details to bring your illustrations to life. We ensure the artwork complements the book’s tone and captivates your audience."
            />
            <Card
              step="04"
              title="Finalization and Delivery"
              content="We refine the illustrations, making necessary adjustments for high-resolution quality. The final artwork is optimized for print and digital formats, ensuring your book looks stunning across all platforms."
            />
          </div>

          {/* sm layout */}
          <div className="md:hidden flex flex-col gap-8">
            <Card
              step="01"
              title="Concept Development & Storyboarding"
              content="We begin by understanding your book’s theme, characters, and artistic vision. Our illustrators create rough sketches and storyboards to outline the visuals, ensuring they align with your narrative."
            />
            <Card
              step="02"
              title="Character & Scene Illustration"
              content="Our artists design detailed and expressive characters along with immersive backgrounds. Whether it’s a children’s book, comic, or novel, we craft illustrations that enhance the storytelling and engage readers."
            />
            <Card
              step="03"
              title="Coloring & Detailing"
              content="Once the sketches are approved, we add vibrant colors, shading, and intricate details to bring your illustrations to life. We ensure the artwork complements the book’s tone and captivates your audience."
            />
            <Card
              step="04"
              title="Finalization and Delivery"
              content="We refine the illustrations, making necessary adjustments for high-resolution quality. The final artwork is optimized for print and digital formats, ensuring your book looks stunning across all platforms."
            />
          </div>
        </div>
      </section>

      <Hero11 />
      <Hero12 />

      <ModalForm />
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
