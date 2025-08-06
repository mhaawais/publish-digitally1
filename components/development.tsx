'use client';


import React, { useState } from "react";
import { useModal } from "@/app/context/ModalContext";

const tabs = [
  {
    key: "developmental",
    title: "Developmental Editing",
    image: "/assets/images/developmental-editing.webp",
    content: `Developmental editing focuses on refining your book’s structure and content. Our professional editors collaborate with you to align your manuscript with your vision. We assess plot development, character arcs, scene pacing, transitions, dialogue, and overall themes. Through a detailed editorial review, we provide in-depth feedback and actionable suggestions to strengthen your story. With our expert developmental editing, your book will have a strong foundation and an engaging narrative that captivates readers from beginning to end.`,
  },
  {
    key: "copyediting",
    title: "Copyediting",
    image: "/assets/images/copyediting.webp",
    content: `Copyediting enhances the language, style, and consistency of your manuscript. Our expert copyeditors carefully review your text for grammar, spelling, punctuation, and inconsistencies. We also ensure your writing aligns with the appropriate style for your genre. By refining every detail, our copyediting services help you deliver a professional, polished book that resonates with readers and stands out in the market.`,
  },
  {
    key: "lineediting",
    title: "Line Editing",
    image: "/assets/images/line-editing.webp",
    content: `Line editing focuses on the finer details of your writing, enhancing clarity, flow, and readability. Our editors refine sentence structure, word choice, and tone to ensure consistency and engagement. We eliminate redundancies, clarify complex ideas, and create a smooth reading experience. With our professional line editing services, your book will captivate readers with polished, eloquent prose.`,
  },
  {
    key: "proofreading",
    title: "Proofreading",
    image: "/assets/images/proofreading.webp",
    content: `Our expert proofreading services ensure your manuscript is error-free and publication-ready. We meticulously review your text to correct grammar, spelling, punctuation, and formatting inconsistencies. As the final step in the editing process, our proofreading guarantees a polished, professional book that leaves a lasting impression on readers.`,
  },
];

const Development: React.FC = () => {
  const [activeTab, setActiveTab] = useState("developmental");
  const { openModal } = useModal();

  const currentTab = tabs.find((tab) => tab.key === activeTab);
  if (!currentTab) return null;

  return (
    <section className="w-full px-4 sm:px-6 lg:px-8 py-16 bg-gradient-to-b from-[#f4f8fb] to-white text-[#012A4A]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
          Professional Editing Services
        </h2>
        <p className="max-w-2xl mx-auto text-base md:text-lg text-gray-600">
          Refine your manuscript with precision. Choose from developmental
          editing, line editing, copyediting, or final proofreading—all
          customized to your publishing goals.
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
  );
};

export default Development;
