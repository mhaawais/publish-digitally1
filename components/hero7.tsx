import React from "react";
import Image from "next/image";

const Hero7 = () => {
  return (
    <section className="relative bg-[#eaf6fb] px-4 md:px-8 lg:px-20 overflow-hidden text-[#052540] pb-20">
      <div className="text-center max-w-3xl mx-auto pt-12 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#052540] font-serif leading-tight">
          Inside Our Proven Ghostwriting Method
        </h2>
        <p className="text-lg text-[#052540]">
          We know how to turn your unique ideas into professionally written
          books that capture attention and inspire readers. Our efficient and
          personalized ghostwriters take care of everything from brainstorming
          to final release making sure your message is delivered with precision,
          creativity, and heart.
        </p>
      </div>

      <div className="relative z-10 w-full pb-0">
        {/* lg layout */}
        <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
          <div className="flex flex-col gap-10">
            <Card
              step="01"
              title="Crafting the Blueprint"
              content="We begin by mapping out a clear and structured outline tailored to your book’s purpose. This initial step lays the groundwork for a powerful manuscript. Our writers collaborate with you closely to ensure your ideas are well-organized, aligned with your vision, and ready to flow into a compelling narrative."
            />
            <Card
              step="02"
              title="Writing the Manuscript"
              content="Once the outline is finalized, our expert ghostwriters bring your concept to life with engaging, reader-focused content. Every chapter is crafted to reflect your unique voice and resonate with your target audience, ensuring your message is both powerful and personal."
            />
          </div>

          <div className="flex justify-center items-center h-full">
            <Image
              src="/assets/images/process.webp"
              alt="Process Illustration"
              width={520}
              height={520}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col gap-10">
            <Card
              step="03"
              title="Detailed Proofreading"
              content="We meticulously review your manuscript to eliminate grammar, punctuation, and clarity issues. Our team ensures the content is polished, fluid, and publication-ready enhancing the overall quality while staying true to your voice."
            />
            <Card
              step="04"
              title="Professional Formatting & Publishing"
              content="Your manuscript is then formatted to meet the highest industry standards ready for digital and print publishing. We assist you throughout the publishing journey, making the transition from writer to published author seamless and stress-free."
            />
          </div>
        </div>

        {/* md screens */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-8">
          <Card
            step="01"
            title="Crafting the Blueprint"
            content="We begin by mapping out a clear and structured outline tailored to your book’s purpose. This initial step lays the groundwork for a powerful manuscript. Our writers collaborate with you closely to ensure your ideas are well-organized, aligned with your vision, and ready to flow into a compelling narrative."
          />
          <Card
            step="02"
            title="Writing the Manuscript"
            content="Once the outline is finalized, our expert ghostwriters bring your concept to life with engaging, reader-focused content. Every chapter is crafted to reflect your unique voice and resonate with your target audience, ensuring your message is both powerful and personal."
          />
          <Card
            step="03"
            title="Detailed Proofreading"
            content="We meticulously review your manuscript to eliminate grammar, punctuation, and clarity issues. Our team ensures the content is polished, fluid, and publication-ready enhancing the overall quality while staying true to your voice."
          />
          <Card
            step="04"
            title="Professional Formatting & Publishing"
            content="Your manuscript is then formatted to meet the highest industry standards ready for digital and print publishing. We assist you throughout the publishing journey, making the transition from writer to published author seamless and stress-free."
          />
        </div>

        {/* sm screens */}
        <div className="md:hidden flex flex-col gap-8">
          <Card
            step="01"
            title="Crafting the Blueprint"
            content="We begin by mapping out a clear and structured outline tailored to your book’s purpose. This initial step lays the groundwork for a powerful manuscript. Our writers collaborate with you closely to ensure your ideas are well-organized, aligned with your vision, and ready to flow into a compelling narrative."
          />
          <Card
            step="02"
            title="Writing the Manuscript"
            content="Once the outline is finalized, our expert ghostwriters bring your concept to life with engaging, reader-focused content. Every chapter is crafted to reflect your unique voice and resonate with your target audience, ensuring your message is both powerful and personal."
          />
          <Card
            step="03"
            title="Detailed Proofreading"
            content="We meticulously review your manuscript to eliminate grammar, punctuation, and clarity issues. Our team ensures the content is polished, fluid, and publication-ready enhancing the overall quality while staying true to your voice."
          />
          <Card
            step="04"
            title="Professional Formatting & Publishing"
            content="Your manuscript is then formatted to meet the highest industry standards ready for digital and print publishing. We assist you throughout the publishing journey, making the transition from writer to published author seamless and stress-free."
          />
        </div>
      </div>
    </section>
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

export default Hero7;
