import React from "react";
import Image from "next/image";
import { useModal } from "@/app/context/ModalContext";

const Hero5 = () => {
  const { openModal } = useModal();

  return (
    <section className="bg-[#eaf6fb] py-16 px-6 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Image */}
        <div className="relative w-full max-w-md lg:max-w-[450px] flex-shrink-0">
          <div className="rounded-[50%] bg-white p-2 shadow-xl">
            <Image
              src="/assets/images/home-side-1.webp"
              alt="Book Mockup"
              width={600}
              height={600}
              className="rounded-xl object-cover"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="text-center lg:text-left max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#052540] leading-tight">
            Publish Digitally – Helping Your Story Come Alive
          </h2>
          <p className="mt-6 text-base sm:text-lg text-[#333]">
            Partner with us to transform your manuscript into a powerful, professionally crafted book. From editing to publishing and everything in between, our team guides you every step of the way so your voice can resonate with readers everywhere.
          </p>
          <button
            onClick={openModal}
            className="mt-6 inline-block bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-6 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero5;
