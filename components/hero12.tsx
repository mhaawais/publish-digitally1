"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What Are the Benefits of Hiring Publish Digitally?",
    answer:
      "Publish Digitally brings cultural nuance, language precision, and a natural flow to your manuscript—ensuring your book connects deeply with your target audience.",
  },
  {
    question: "How Much Do Professional Writers at Publish Digitally Charge?",
    answer:
      "Prices vary based on length and complexity, but Publish Digitally offers flexible packages tailored to your budget—without compromising on quality.",
  },
  {
    question: "Can Publish Digitally Help with Ghostwriting and Editing?",
    answer:
      "Absolutely. Our writers specialize in both ghostwriting and editing, ensuring your story is well-crafted and publication-ready from draft to final polish.",
  },
  {
    question: "Does Publish Digitally Specialize in Specific Genres?",
    answer:
      "Yes! From fantasy and fiction to cookbooks and self-help, our writers are matched based on genre expertise to bring authenticity to your book.",
  },
  {
    question: "Can Publish Digitally Help with Book Publishing?",
    answer:
      "Yes, our team supports you all the way—from writing and editing to formatting and publishing on platforms like Amazon and beyond.",
  },
  {
    question: "Does Publish Digitally Offer SEO-Optimized Content for Ebooks?",
    answer:
      "Definitely. We blend storytelling with SEO techniques to create digital books that are not just compelling but also discoverable in online markets.",
  },
  {
    question: "Can I Hire Publish Digitally for a Series or Long-Term Project?",
    answer:
      "Yes. We offer long-term collaboration options to maintain consistency in voice, tone, and quality across multi-part book series and ongoing content.",
  },
];

const Hero12 = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="relative bg-gradient-to-b from-[#eaf6fb] to-white text-[#052540] overflow-hidden pt-0 pb-20">
      <div className="relative z-10 max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10 items-start px-4 sm:px-6 lg:px-8">
        {/* Left Image */}
        <div className="hidden lg:flex justify-center relative -mt-12">
          <Image
            src="/assets/images/book-writing.webp"
            alt="Book Writing"
            width={280}
            height={300}
            className="rounded-xl shadow-2xl"
          />
        </div>

        {/* FAQ Content */}
        <div className="col-span-1 lg:col-span-2">
          <div className="w-full">
            <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#052540] leading-tight mb-10 font-serif">
              Frequently Asked Questions <br className="hidden md:block" />
              <span className="text-[#1d4d6d]">About Publish Digitally</span>
            </h2>

            <div className="space-y-5">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`w-full rounded-xl border border-gray-200 bg-white shadow-md transition-all duration-300 ${
                    activeIndex === index
                      ? "shadow-xl border-[#0f6e91]"
                      : "hover:border-[#0f6e91]"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 md:px-10 lg:px-12 py-5 flex justify-between items-center text-left group"
                  >
                    <span className="font-semibold text-base sm:text-lg group-hover:text-[#0b90a3] transition">
                      {faq.question}
                    </span>
                    <span className="text-[#0b90a3] text-xl transition-transform duration-300 transform">
                      {activeIndex === index ? <FiMinus /> : <FiPlus />}
                    </span>
                  </button>
                  {activeIndex === index && (
                    <div className="px-6 md:px-10 lg:px-12 pb-5 text-sm sm:text-base text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Image */}
        <div className="hidden lg:flex justify-center relative -mt-20">
          <Image
            src="/assets/images/publishing.webp"
            alt="Publishing Laptop"
            width={320}
            height={320}
            className="rounded-xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero12;
