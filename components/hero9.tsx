import React from "react";

const Hero9 = () => {
  const services = [
    {
      emoji: "🖋️",
      title: "Skilled Ghostwriters",
      description:
        "Our talented ghostwriters bring your ideas to life, crafting compelling narratives that resonate deeply with readers.",
    },
    {
      emoji: "🧹",
      title: "Thorough Editing & Revisions",
      description:
        "We refine your manuscript through multiple stages, ensuring it’s polished, powerful, and ready for publication.",
    },
    {
      emoji: "📖",
      title: "Impactful Storytelling",
      description:
        "We specialize in meaningful, emotionally engaging storytelling that connects with your target audience.",
    },
    {
      emoji: "⏰",
      title: "24/7 Author Support",
      description:
        "Our support team is always here to guide you and keep you confident through every stage of your publishing journey.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#eaf6fb] to-white py-20 px-4 sm:px-8 lg:px-20 text-[#052540]">
      {/* Header */}
      <div className="text-center max-w-5xl mx-auto mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight font-serif">
          Craft Your Masterpiece with{" "}
          <span className="text-[#0f6e91]">America’s Top Writing Talent</span>
        </h2>
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
          At <strong>Publish Digitally</strong>, we go beyond words — we build
          legacies. Our unmatched expertise, personalized service, and
          commitment to excellence make us one of the top book writing teams in
          the United States. We focus on delivering a smooth, results-driven
          publishing journey tailored to your goals and vision.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-[#c5d1d8] hover:bg-[#cdcdd3] backdrop-blur-md rounded-2xl p-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition duration-300 border border-gray-100 hover:border-[#0f6e91]"
          >
            {/* Emoji Badge */}
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-gradient-to-br from-[#0f6e91] to-[#68bde1] text-white text-2xl shadow-md mb-4">
              {service.emoji}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold mb-2 text-center">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-800 text-center">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero9;
