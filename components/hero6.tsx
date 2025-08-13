import React from "react";
import Image from "next/image";

const bookImages = [
  "/assets/images/8.png",
  "/assets/images/2.png",
  "/assets/images/3.png",
  "/assets/images/4.png",
  "/assets/images/5.png",
  "/assets/images/6.png",
  "/assets/images/7.png",
  "/assets/images/1.png",
  "/assets/images/9.png",
  "/assets/images/10.png",
  "/assets/images/11.png",
  "/assets/images/12.png",
];

const Hero6 = () => {
  return (
    <section
      className="relative w-full overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/images/bg-image.jpeg')" }}
    >
      <div className="absolute inset-0 bg-[#f2fbff]/30 z-0"></div>

      {/* Top Torn Image   bg-white/30   bg-[#f2fbff]/70   text-[#052540]   text-[#0a1a2f]    */}
      <Image
        src="/assets/images/top.webp"
        alt="Top Torn Edge"
        width={1600}
        height={70}
        className="w-full h-auto object-cover"
      />

      <div className="relative py-10 px-4 lg:px-20">
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-[#0a1a2f] text-white drop-shadow-md font-serif leading-tight">
            Our Publications
          </h2>
          <p className="mt-4 bg-white  max-w-3xl mx-auto text-base sm:text-lg drop-shadow-sm font-semibold">
            Pick any of the books published by us, and you will be mesmerized by
            it. From fiction to non-fiction, our top book publishing agency
            publishes captivating and inspiring books of modern high-quality.
          </p>

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
            {bookImages.map((src, index) => (
              <div
                key={index}
                className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300 bg-white"
              >
                <Image
                  src={src}
                  alt={`Book ${index + 1}`}
                  width={300}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Torn Image */}
      <Image
        src="/assets/images/bottom.webp"
        alt="Bottom Torn Edge"
        width={1600}
        height={100}
        className="w-full h-auto object-cover"
      />
    </section>
  );
};

export default Hero6;
