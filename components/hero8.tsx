import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { useModal } from "@/app/context/ModalContext";

const Hero8 = () => {
  const { openModal } = useModal();
  return (
    <section className="relative bg-[#c2dee9] text-[#052540] overflow-hidden">
      <div className="relative z-10 px-4 sm:px-10 lg:px-24 py-12 lg:py-20 flex flex-col lg:flex-row items-center justify-between gap-14">
        {/* Left Content     underline decoration-wavy underline-offset-4 */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#052540] leading-tight mb-5 tracking-tight">
            Partner with <br />
            <span className="text-[#0c5671]">
              Publish Digitally
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-[#174061] font-medium mb-6">
            Your Trusted Gateway to Effortless, Professional Publishing
          </p>

          <p className="text-base md:text-lg text-[#052540] mb-8 leading-relaxed">
            Getting your book published doesn’t have to be complicated. With
            Publish Digitally by your side, you gain a reliable partner who
            simplifies the entire journey. From platform selection to
            manuscript perfection, we handle every detail so you can focus
            on your creative vision.
          </p>

          {/* Features List */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              "Personalized Publishing Support",
              "Access to 10,000+ Publishing Channels",
              "Full Author Assistance from Start to Finish",
              "Fast Turnaround and Seamless Process",
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 group">
                <span className="bg-[#052540] text-white p-2 rounded-full shadow-md transition-transform group-hover:scale-110">
                  <FaCheck size={14} />
                </span>
                <span className="text-base text-[#052540] font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <p className="text-base font-semibold mb-4 text-[#052540]">
            Ready to publish with confidence? Let's begin your journey.
          </p>

          {/* <button
            onClick={openModal}
            className="inline-block bg-[#052540] hover:bg-[#03141c] text-white font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          >
            Get Started
          </button> */}


           <button
            aria-label="Open get started modal"
            onClick={openModal}
            className="
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-2xl px-10 py-3.5
    font-semibold tracking-wide text-white
    bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd]
    shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]
    transition-[transform,box-shadow] duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)]
    active:translate-y-0
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]
    motion-reduce:transition-none motion-reduce:hover:transform-none
  "
          >
            {/* ambient glow (subtle, always on) */}
            <span
              className="
      pointer-events-none absolute inset-[-2px] rounded-2xl
      bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
          radial-gradient(140px_90px_at_80%_30%,rgba(42,168,255,.16),transparent)]
    "
            />

            {/* animated border glow on hover */}
            <span
              className="
      pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10
      group-hover:ring-cyan-200/40 transition-[box-shadow,opacity] duration-300
      shadow-[inset_0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_18px_rgba(42,168,255,0.25)]
    "
            />

            {/* slow sliding gradient overlay (left → right) */}
            <span
              className="
      absolute inset-0 -translate-x-full group-hover:translate-x-4
      transition-transform duration-1000 ease-out
      bg-gradient-to-r from-[#0a6ebd] via-[#2aa8ff] to-[#00d4ff]
      opacity-90
    "
            />

            {/* glossy shine sweep */}
            <span
              className="
      pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
      -skew-x-12 bg-white/18
      translate-x-[-120%] group-hover:translate-x-[320%]
      transition-transform duration-[2000ms] ease-out
      blur-[2px]
    "
            />

            {/* default text */}
            <span className="relative z-10 transition-all duration-200 group-hover:opacity-0">
              Get Started
            </span>

            {/* hover text */}
            <span
              className="
      absolute inset-0 z-10 flex items-center justify-center
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
            >
              Get A Quote
            </span>
          </button>

          
        </div>

        {/* Right Side Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl transition-transform duration-300 hover:scale-105">
            <Image
              src="/assets/images/home-side-1.webp"
              alt="Book Display"
              width={700}
              height={700}
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero8;








// import React from "react";
// import Image from "next/image";
// import { FaCheck } from "react-icons/fa";
// import { useModal } from "@/app/context/ModalContext";

// const Hero8 = () => {
//   const { openModal } = useModal();
//   return (
//     <section className="relative bg-[#c2dee9] text-[#052540] overflow-hidden">
//       {/* Torn Top */}

//       {/* Main Content */}
//       <div className="relative z-10 px-4 sm:px-8 lg:px-24 py-7 lg:py-10 flex flex-col lg:flex-row items-center justify-between gap-12">
//         {/* Left Content */}
//         <div className="w-full lg:w-1/2">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#052540] leading-tight mb-4">
//             Partner with{" "}
//             <span className="text-[#052540]">Publish Digitally</span>
//           </h2>
//           <p className="text-lg md:text-xl text-[#174061] font-medium mb-6">
//             Your Trusted Gateway to Effortless, Professional Publishing.
//           </p>

//           <p className="text-base md:text-lg mb-6 text-gray-800">
//             Getting your book published doesn’t have to be complicated. With
//             Publish Digitally by your side, you gain a reliable partner who
//             simplifies the entire journey. From choosing the right platforms to
//             preparing your manuscript for release, our dedicated team handles
//             every detail with care and precision. We’re here to ensure your book
//             gets the exposure it deserves, while you stay focused on your
//             vision. Let’s publish your book the smart way — quick, professional,
//             and stress-free.
//           </p>

//           {/* Features   bg-[#0f6e91]   */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
//             {[
//               "Personalized Publishing Support",
//               "Access to 10,000+ Publishing Channels",
//               "Full Author Assistance from Start to Finish",
//               "Fast Turnaround and Seamless Process",
//             ].map((item, index) => (
//               <div key={index} className="flex items-start gap-3">
//                 <span className="bg-[#052540] text-white p-2 rounded-full text-sm shadow-md">
//                   <FaCheck />
//                 </span>
//                 <span className="text-base text-[#052540]">{item}</span>
//               </div>
//             ))}
//           </div>

//           {/* Call to Action */}
//           <p className="text-base font-medium mb-3 text-[#052540]">
//             Ready to publish with confidence? Click below to begin your journey!
//           </p>
//           {/* <button className="bg-[#0f6e91] text-white px-6 py-3 rounded-md shadow-lg hover:bg-[#0c5671] transition-all duration-300">
//             Get Started
//           </button> */}
//           <button
//             onClick={openModal}
//             className="mt-1 inline-block bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-8 py-3 rounded-md shadow-md hover:shadow-lg transition-all"
//           >
//             Get Started
//           </button>
//         </div>

//         {/* Right Image */}
//         <div className="w-full lg:w-1/2 flex justify-center">
//           <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
//             <Image
//               src="/assets/images/home-side-1.webp"
//               alt="Book Display"
//               width={700}
//               height={700}
//               className="w-full h-auto rounded-lg shadow-xl"
//             />
//           </div>
//         </div>
//       </div>

//       {/* Torn Bottom */}
//       {/* <div className="w-full">
//         <Image
//           src="/assets/images/bottom.webp"
//           alt="Torn Bottom"
//           width={1920}
//           height={80}
//           layout="responsive"
//           objectFit="cover"
//           priority
//         />
//       </div> */}
//     </section>
//   );
// };

// export default Hero8;
