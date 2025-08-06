"use client";

import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const reviews = [
  {
    name: "Ava Montgomery",
    date: "May 2025",
    review:
      "Publish Digitally turned my rough draft into a bestseller. The ghostwriting and editing team went above and beyond. I felt supported every step of the way!",
  },
  {
    name: "James Nguyen",
    date: "April 2025",
    review:
      "As a first-time author, I had no clue how to publish a book. Publish Digitally made the entire process seamless—from formatting to promotion. Incredible service!",
  },
  {
    name: "Dr. Priya Suresh",
    date: "March 2025",
    review:
      "I’ve worked with multiple agencies before, but none matched the level of professionalism, speed, and creative input of Publish Digitally. Highly recommended for serious authors.",
  },
  {
    name: "Rachel Lim",
    date: "March 2025",
    review:
      "The author website they created for me looks amazing and has boosted my credibility online. The design, SEO, and branding were all top-notch.",
  },
  {
    name: "Daniel Martinez",
    date: "February 2025",
    review:
      "What stood out was the personal attention. The team really cared about my story and helped me refine it into something powerful. I’m proud to call myself a published author now.",
  },
  {
    name: "Sophia Green",
    date: "January 2025",
    review:
      "From manuscript editing to Amazon optimization, Publish Digitally handled everything with precision and style. Sales have been strong since launch!",
  },
  {
    name: "Mark Ellis",
    date: "December 2024",
    review:
      "I needed a complete A-Z publishing solution—and that’s exactly what I got. They delivered my book, my author website, and my marketing strategy. Couldn’t be happier.",
  },
  {
    name: "Janelle Bryant",
    date: "February 2025",
    review:
      "They didn’t just edit my book—they elevated it. Every chapter became more powerful thanks to their storytelling team. Amazing work!",
  },
  {
    name: "Leo Turner",
    date: "March 2025",
    review:
      "The turnaround time was phenomenal. I went from manuscript to distribution in just weeks. Their Amazon optimization helped my book climb rankings fast.",
  },
  {
    name: "Camila Reyes",
    date: "January 2025",
    review:
      "So happy I chose Publish Digitally! They handled everything—from cover design to launch strategy. I felt like a VIP.",
  },
  {
    name: "David Reynolds",
    date: "April 2025",
    review:
      "I am grateful to Publish Digitally for their guidance as a first-time author. Their imaginative writing and publication advice made me feel comfortable about my decisions.",
  },
  {
    name: "Ella Mitchell",
    date: "February 2025",
    review:
      "Great job! Thanks to Publish Digitally’s marketing services, I built my author brand and got my name out there. I appreciate your assistance.",
  },
];

const Hero11 = () => {
  const [index, setIndex] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const next = () => {
    setIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const prev = () => {
    setIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleReviews = reviews.slice(
    index * itemsPerPage,
    index * itemsPerPage + itemsPerPage
  );

  return (
    <section className="bg-gradient-to-b from-[#eaf6fb] to-white py-20 px-4 sm:px-8 lg:px-20 text-[#052540]">
      <div className="max-w-7xl mx-auto">
        {/* Header        bg-gradient-to-b from-[#eaf6fb] to-white       */}
        <div className="text-center mb-14">
          {/* <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug drop-shadow-md mb-4 font-serif"> */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif leading-snug tracking-tight drop-shadow-md">
            Why Book Authors Love Publish Digitally
          </h2>
          {/* <p className="text-sm md:text-lg text-gray-700 max-w-2xl mx-auto"> */}
          <p className="text-gray-700 text-sm md:text-lg leading-relaxed font-sans tracking-normal mt-5 font-medium">
            Don’t just take our word for it — hear what our clients say about
            their success with
            <span className="font-semibold text-[#052540]">
              {" "}
              Publish Digitally
            </span>
            .
          </p>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-6 mb-10">
          <button
            onClick={prev}
            className="p-3 rounded-full bg-[#052540] hover:bg-[#0f6e91] text-white transition shadow-lg"
          >
            <MdNavigateBefore size={28} />
          </button>
          <button
            onClick={next}
            className="p-3 rounded-full bg-[#052540] hover:bg-[#0f6e91] text-white transition shadow-lg"
          >
            <MdNavigateNext size={28} />
          </button>
        </div>

        {/* Reviews Grid - PRESERVED UI EXACTLY */}
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 transition-all duration-700 ease-in-out">
          {visibleReviews.map((review, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-[#dbeafe] to-[#f0f9ff] hover:from-[#cfe8f9] hover:to-[#e0f2fe] border border-blue-100 hover:border-[#0f6e91] rounded-xl p-6 pt-10 shadow-md hover:shadow-xl hover:-translate-y-1 transition duration-300"
            >
              {/* Decorative Top Border */}
              <span className="absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-12 h-4 bg-blue-300 rounded-sm shadow-md"></span>
              {/* absolute top-[-16px] left-1/2 transform -translate-x-1/2 w-12 h-2 bg-blue-300 rounded-sm */}

              {/* Name & Date */}
              <div className="flex flex-col gap-1 mb-3">
                <span className="text-lg font-semibold text-[#052540] capitalize">
                  {review.name}
                </span>
                <span className="text-xs text-gray-500">{review.date}</span>
              </div>

              {/* Stars & Platform */}
              <div className="flex items-center mb-3">
                {[...Array(5)].map((_, idx) => (
                  <FaStar key={idx} className="text-yellow-500 text-sm mr-1" />
                ))}
                <FcGoogle size={20} className="ml-2" />
              </div>
              {/* <div className="flex justify-center mt-6">
                {[...Array(totalPages)].map((_, i) => (
                  <div
                    key={i}
                    className={`h-2 w-2 mx-1 rounded-full ${
                      i === index ? "bg-[#052540]" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div> */}

              {/* Review Text */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {review.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero11;

// This component displays a rotating set of client reviews with a navigation system.
