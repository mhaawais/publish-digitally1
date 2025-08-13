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



const tabs = [
  {
    key: "developmental",
    title: "Social Media Marketing",
    image: "/assets/images/smm.webp",
    content: `Our book marketing agency specializes in helping authors connect with readers across major platforms like Facebook, Instagram, and LinkedIn. Our expert book marketers craft highly engaging content, targeted ad campaigns, and strategic promotions to maximize your book’s visibility. We ensure your book reaches the right audience, driving higher engagement, increased interactions, and boosted book sales. With our social media book marketing services, we create compelling posts, manage effective advertising campaigns, and foster strong reader connections to build a loyal fan base and expand your author brand.`,
  },
  {
    key: "copyediting",
    title: "Search Engine Optimization (SEO)",
    image: "/assets/images/seo.webp",
    content: `You’ve heard the phrase “Google it!”—now imagine your book appearing at the top of search results whenever readers search for your genre. With our professional Search Engine Optimization (SEO) services, we optimize your book for Google, Amazon, and other search engines, ensuring maximum visibility. Our strategy includes keyword research, on-page SEO, and high-quality content creation to drive organic traffic. By implementing effective book SEO techniques, we make sure your book reaches the right audience, increasing discoverability, engagement, and sales.`,
  },
  {
    key: "lineediting",
    title: "Amazon Marketing",
    image: "/assets/images/amazon.webp",
    content: `Our specialized book marketing services ensure your book stands out on Amazon’s marketplace. Our Amazon book marketing experts use high-ranking keywords, compelling book descriptions, and eye-catching images to enhance your book’s visibility. We also manage customer reviews, run targeted Amazon Ads (PPC), and implement proven SEO strategies to boost your book’s ranking in Amazon search results. With our Amazon book promotion services, we help you increase discoverability, attract more readers, and maximize book sales.`,
  },
  {
    key: "proofreading",
    title: "Content Marketing",
    image: "/assets/images/content.webp",
    content: `Our content marketing services help you attract, engage, and retain readers by creating valuable, relevant, and high-quality content that resonates with your audience. We craft SEO-optimized blog posts, articles, and newsletters that align with your book’s themes, keeping your audience interested and connected. By implementing a strategic content marketing approach, we not only promote your book but also establish your author brand as a thought leader, increasing credibility and long-term reader loyalty.`,
  },
  {
    key: "book-promotion",
    title: "Book Launch Marketing",
    image: "/assets/images/book-launch.webp",
    content: `Make your book launch a success with our comprehensive book marketing campaigns. We implement strategic promotional techniques to build excitement and anticipation around your book’s release. Our book launch services include pre-launch teasers, launch day events, and post-launch follow-ups to maintain momentum. Each campaign is customized to maximize visibility, attract media attention, and drive initial book sales, ensuring your book gets the best possible start in the market.`,
  },
  {
    key: "marketing-strategy",
    title: "Influencer Marketing",
    image: "/assets/images/influencer.webp",
    content: `Expand your book’s audience with our expert influencer marketing services. We collaborate with top influencers, bloggers, and book reviewers who align with your book’s genre and target audience. These influencers help promote your book through reviews, social media shares, and engaging content, creating authentic buzz and driving reader interest. Our strategic influencer marketing campaigns ensure that your book is endorsed by trusted voices, increasing its credibility, visibility, and sales potential in a competitive market.`,
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
                  Expert Book Promotion Services for <br />
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
              src="/assets/images/marketing.webp"
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
            Boost Sales and Maximize Exposure with Top Book Promotion Experts in
            the USA
          </h2>
          <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
            To establish a strong author brand and increase book sales, you need
            a professional book marketing company that ensures a consistent and
            impactful presence. Whether you require eye-catching book covers,
            compelling logos, or high-quality marketing materials, our expert
            book promotion services have you covered. Let us help you build
            buzz, attract readers, and elevate your book’s visibility in the
            competitive marketplace.
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
              Skyrocket Your Book’s Success with the Best Book Promotion
              Services in the USA
            </h2>

            <p className="text-base md:text-lg mb-6 text-gray-800">
              Turn your book into a bestseller with our affordable and
              results-driven book marketing services. Our expert book promotion
              company specializes in targeted email campaigns, strategic social
              media marketing, and high-impact online advertising to connect
              your book with the right audience. With our proven book marketing
              strategies, we help increase visibility, boost engagement, and
              drive book sales, ensuring your book gets the recognition it
              deserves.
            </p>

            {/* Styled Features List with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
              {[
                {
                  title: "Make your book a must-read in your genre.",
                  //    desc: "",
                },
                {
                  title:
                    "Get the right readers who loves the genre of our book.",
                  //    desc: "",
                },
                {
                  title: "Get easy and continous connection with your fans.",
                  //     desc: "",
                },
                {
                  title: "Maximize your book’s visiblity.",
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
      </section>

      <Hero6 />

      <section className="relative bg-[#eaf6fb] px-4 md:px-8 lg:px-20 overflow-hidden text-[#052540] pb-20">
        <div className="text-center max-w-3xl mx-auto pt-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#052540] font-serif leading-tight">
            Our Step-by-Step Book Promotion Process
          </h2>
          <p className="text-lg text-[#052540]">
            Promote your book with our book promotion agency and elevate your
            presence online and get connected with the readers. We make sure
            that your book not only reach it’s target audience but also leave a
            lasting impression. Our strategic marketing campaigns and engaging
            content writing handle everything required for your book to maximize
            its impact and success.
          </p>
        </div>

        <div className="relative z-10 w-full pb-0">
          {/* lg layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            <div className="flex flex-col gap-10">
              <Card
                step="01"
                title="Audience Research & Strategy Development"
                content="We begin by analyzing your target audience, book genre, and market trends to create a customized book promotion strategy. Our goal is to connect your book with readers who are most likely to engage and buy."
              />
              <Card
                step="02"
                title="Multi-Channel Marketing & Advertising"
                content="Our expert book marketers leverage email campaigns, social media marketing, Amazon ads, and influencer partnerships to maximize your book’s visibility. We ensure your book gets featured on top book promotion platforms for maximum exposure."
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
                title="Engagement & Brand Building"
                content="We create engaging content, interactive promotions, and book-related discussions to build a strong author brand. Our strategy includes reader engagement, online communities, and media outreach to enhance credibility."
              />
              <Card
                step="04"
                title="Sales Optimization & Performance Tracking"
                content="We continuously monitor your book’s performance, ad conversions, and reader engagement to refine our marketing strategies. Our data-driven approach ensures your book ranks higher, gains traction, and drives consistent sales."
              />
            </div>
          </div>

          {/* md screens */}
          <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
            <Card
              step="01"
              title="Audience Research & Strategy Development"
              content="We begin by analyzing your target audience, book genre, and market trends to create a customized book promotion strategy. Our goal is to connect your book with readers who are most likely to engage and buy."
            />
            <Card
              step="02"
              title="Multi-Channel Marketing & Advertising"
              content="Our expert book marketers leverage email campaigns, social media marketing, Amazon ads, and influencer partnerships to maximize your book’s visibility. We ensure your book gets featured on top book promotion platforms for maximum exposure."
            />
            <Card
              step="03"
              title="Engagement & Brand Building"
              content="We create engaging content, interactive promotions, and book-related discussions to build a strong author brand. Our strategy includes reader engagement, online communities, and media outreach to enhance credibility."
            />
            <Card
              step="04"
              title="Sales Optimization & Performance Tracking"
              content="We continuously monitor your book’s performance, ad conversions, and reader engagement to refine our marketing strategies. Our data-driven approach ensures your book ranks higher, gains traction, and drives consistent sales."
            />
          </div>

          {/* sm layout */}
          <div className="md:hidden flex flex-col gap-8">
            <Card
              step="01"
              title="Audience Research & Strategy Development"
              content="We begin by analyzing your target audience, book genre, and market trends to create a customized book promotion strategy. Our goal is to connect your book with readers who are most likely to engage and buy."
            />
            <Card
              step="02"
              title="Multi-Channel Marketing & Advertising"
              content="Our expert book marketers leverage email campaigns, social media marketing, Amazon ads, and influencer partnerships to maximize your book’s visibility. We ensure your book gets featured on top book promotion platforms for maximum exposure."
            />
            <Card
              step="03"
              title="Engagement & Brand Building"
              content="We create engaging content, interactive promotions, and book-related discussions to build a strong author brand. Our strategy includes reader engagement, online communities, and media outreach to enhance credibility."
            />
            <Card
              step="04"
              title="Sales Optimization & Performance Tracking"
              content="We continuously monitor your book’s performance, ad conversions, and reader engagement to refine our marketing strategies. Our data-driven approach ensures your book ranks higher, gains traction, and drives consistent sales."
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
