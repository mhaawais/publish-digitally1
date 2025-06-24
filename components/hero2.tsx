"use client";
import React, { useEffect, useRef } from 'react';

const logos = [
  '/assets/images/feature-1.webp',
  '/assets/images/feature-2.webp',
  '/assets/images/feature-3.webp',
  '/assets/images/feature-4.webp',
  '/assets/images/feature-5.webp',
  '/assets/images/feature-6.webp',
  '/assets/images/feature-7.webp',
  '/assets/images/feature-8.webp',
];

const Hero2 = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (containerRef.current) {
        containerRef.current.scrollBy({
          left: containerRef.current.offsetWidth,
          behavior: 'smooth',
        });
        // Reset scroll when reaching the end
        if (
          containerRef.current.scrollLeft + containerRef.current.offsetWidth >=
          containerRef.current.scrollWidth
        ) {
          setTimeout(() => {
            containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
          }, 1000);
        }
      }
    }, 5000); // every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#f2f8fb]">
      <div
        ref={containerRef}
        className="flex overflow-x-auto whitespace-nowrap no-scrollbar transition-all duration-500"
      >
        {logos.map((src, index) => (
          <div key={index} className="flex-shrink-0 w-1/2 sm:w-1/4 md:w-1/6 lg:w-1/8 px-4 py-6 flex items-center justify-center">
            <img src={src} alt={`logo-${index}`} className="max-h-10 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero2;
