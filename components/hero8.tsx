import React from 'react';
import Image from 'next/image';
import { FaCheck } from 'react-icons/fa';
import { useModal } from '@/app/context/ModalContext';

const Hero8 = () => {
    const { openModal } = useModal();
  return (
    <section className="relative bg-[#c2dee9] text-[#052540] overflow-hidden">
      {/* Torn Top */}
      <div className="w-full">
        <Image
          src="/assets/images/top.webp"
          alt="Torn Top"
          width={1920}
          height={80}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-4 sm:px-8 lg:px-24 py-7 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-5">
            Partner with <span className="text-[#052540] text-3xl md:text-4xl">Publish Digitally-</span>
            <br />
            <span className="text-xl lg:text-2xl font-semibold text-[#174061]">
              Your Gateway to Stress-Free Publishing Success!
            </span>
          </h2>

          <p className="text-base md:text-lg mb-6 text-gray-800">
            Getting your book published doesn’t have to be complicated. With Publish Digitally by your side, you gain a reliable partner who simplifies the entire journey. From choosing the right platforms to preparing your manuscript for release, our dedicated team handles every detail with care and precision. We’re here to ensure your book gets the exposure it deserves, while you stay focused on your vision. Let’s publish your book the smart way — quick, professional, and stress-free.
          </p>

          {/* Features   bg-[#0f6e91]   */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            {[
              'Personalized Publishing Support',
              'Access to 10,000+ Publishing Channels',
              'Full Author Assistance from Start to Finish',
              'Fast Turnaround and Seamless Process'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="bg-[#052540] text-white p-2 rounded-full text-sm shadow-md">
                  <FaCheck />
                </span>
                <span className="text-base text-[#052540]">{item}</span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <p className="text-base font-medium mb-3 text-[#052540]">
            Ready to publish with confidence? Click below to begin your journey!
          </p>
          {/* <button className="bg-[#0f6e91] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#0c5671] transition-all duration-300">
            Get Started
          </button> */}
           <button
            onClick={openModal}
            className="mt-1 inline-block bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
          >
            Get Started
          </button>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
            <Image
              src="/assets/images/home-side-1.webp"
              alt="Book Display"
              width={700}
              height={700}
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>

      {/* Torn Bottom */}
      <div className="w-full">
        <Image
          src="/assets/images/bottom.webp"
          alt="Torn Bottom"
          width={1920}
          height={80}
          layout="responsive"
          objectFit="cover"
          priority
        />
      </div>
    </section>
  );
};

export default Hero8;
