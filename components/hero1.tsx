"use client";

import React, { useEffect, useRef, useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import Link from "next/link";

const Hero1 = () => {
  const { openModal } = useModal();

  const [headerH, setHeaderH] = useState(80); // default, auto-measured below
  const tiltRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);

  // Measure real header height so hero never hides behind it
  useEffect(() => {
    const el =
      document.getElementById("site-header") ||
      document.querySelector("header");
    if (!el) return;
    const update = () => setHeaderH(el.getBoundingClientRect().height || 80);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  // CTA magnetic glow follows cursor
  const handleCTAMove = (e: React.MouseEvent) => {
    const btn = ctaRef.current;
    if (!btn) return;
    const r = btn.getBoundingClientRect();
    btn.style.setProperty("--x", `${e.clientX - r.left}px`);
    btn.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  const handleCTALeave = () => {
    const btn = ctaRef.current;
    if (!btn) return;
    btn.style.removeProperty("--x");
    btn.style.removeProperty("--y");
  };

  // Tilt parallax for right composition
  const handleTiltMove = (e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height; // 0..1
    const ry = (px - 0.5) * 10; // -5..5deg
    const rx = -(py - 0.5) * 10;
    el.style.setProperty("--rx", `${rx}deg`);
    el.style.setProperty("--ry", `${ry}deg`);
  };
  const handleTiltLeave = () => {
    const el = tiltRef.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <section
      aria-label="Hero"
      className="relative w-full overflow-hidden isolate"
      style={
        {
          paddingTop: `calc(${headerH}px + env(safe-area-inset-top))`,
          minHeight: `calc(100svh - ${headerH}px)`,
        } as React.CSSProperties
      }
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        // poster="/assets/images/video-poster.jpg"
      />

      {/* Overlays for readability + subtle animated vignette */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_25%,rgba(42,168,255,.18),transparent_60%)] animate-vignette" />
      </div>

      {/* Content */}
      <div className="relative mt-5 mb-10 z-20 mx-auto max-w-7xl px-6 md:px-10 ">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-12">
          {/* Left: copy */}
          <div className="md:col-span-8 lg:col-span-7">
            <div className="glass-card ring-1 ring-white/15 bg-white/10 backdrop-blur-md p-5 sm:p-8 shadow-xl animate-in hover:glass-pop">
              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-white/70">
                Publish Digitally
              </p>

              <h1
                className="
                  mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06]
                  bg-clip-text text-transparent gradient-shift
                  drop-shadow-[0_2px_0_rgba(0,0,0,.15)]
                "
              >
                From Idea to{" "}
                <span className="shine hover:shine-fast">Bestseller-Ready</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl">
                Ghostwriting, editing, design, audiobook, web, and
                publishing—built into one smooth, milestone-driven workflow.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 items-center">
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

              {/* Feature chips with lift + soft highlight */}

              <div className="mt-5 flex flex-wrap gap-2 text-[12px]">
                {[
                  { name: "Ghostwriting", href: "/ghostwriting" },
                  { name: "Editing", href: "/book-editing" },
                  { name: "Cover Design", href: "/cover-design" },
                  { name: "Audiobook", href: "/audio-book" },
                  { name: "Author Website", href: "/author-website" },
                  { name: "Book Promotion", href: "/book-promotions" },
                  { name: "Illustration", href: "/illustration" },
                  { name: "Publishing", href: "/book-publishing" },
                  { name: "Videos", href: "/book-video" },
                ].map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="
        px-3 py-1 rounded-full border border-white/30 text-white/75 
        transition-all duration-300 ease-out hover:bg-blue-700
        hover:text-white hover:border-white hover:bg-white/10
        hover:shadow-lg hover:shadow-blue-500/30
        active:scale-95
      "
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right: composition w/ tilt parallax (hidden on xs) */}
          <div className="md:col-span-4 lg:col-span-5 hidden sm:block">
            <div
              ref={tiltRef}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              className="relative h-[360px] lg:h-[420px] perspective"
              style={
                {
                  transform:
                    "perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
                  transformStyle: "preserve-3d",
                } as React.CSSProperties
              }
            >
              <div className="absolute inset-0 rounded-3xl bg-white/85 p-5 ring-1 ring-black/5 shadow-2xl backdrop-blur-sm floaty card-tilt">
                <div className="text-[#012A4A] font-bold">
                  Your Book, Beautifully Built
                </div>
                <div className="text-[#012A4A]/70 text-sm mt-1">
                  Voice-matched writing, pro editing, premium design, and
                  precise launch ops.
                </div>
                <div className="mt-5 grid grid-cols-2 gap-3 text-xs text-[#012A4A]/80">
                  <div className="mini">Outline • Drafts</div>
                  <div className="mini">Dev + Copyedit</div>
                  <div className="mini">Typeset • Cover</div>
                  <div className="mini">Audiobook • Web</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-2 z-20">
        <div className="h-8 w-5 rounded-full ring-1 ring-white/35 bg-white/10 backdrop-blur-sm flex items-start justify-center p-1">
          <span className="h-1.5 w-1.5 rounded-full bg-white/80 animate-scroll" />
        </div>
        <span className="text-white/80 text-xs tracking-wide">Scroll</span>
      </div>

      {/* Local styles for effects/animations */}
      <style jsx>{`
        .animate-in {
          animation: fadeUp 650ms ease-out both;
        }

        .glass-card {
          transition: transform 300ms ease, box-shadow 300ms ease,
            border-color 300ms ease;
          border: 1px solid rgba(255, 255, 255, 0.14);
        }
        .glass-pop:hover {
          transform: translateY(-4px);
          box-shadow: 0 28px 60px -28px rgba(0, 0, 0, 0.5);
          border-color: rgba(186, 230, 253, 0.4);
        }

        .gradient-shift {
          background-image: linear-gradient(
            100deg,
            #eaf6ff 0%,
            #77c5ff 60%,
            #eaf6ff 100%
          );
          background-size: 200% 100%;
          transition: background-position 600ms ease;
        }
        .gradient-shift:hover {
          background-position: 100% 0;
        }

        .shine {
          background-image: linear-gradient(
            100deg,
            #eaf6ff 0%,
            #77c5ff 60%,
            #eaf6ff 100%
          );
          background-size: 200% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shine 5s ease-in-out infinite;
        }
        .shine-fast {
          animation-duration: 3s;
        }

        .chip {
          padding: 6px 10px;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.16);
          backdrop-filter: blur(4px);
          transition: transform 250ms ease, box-shadow 250ms ease,
            background 250ms ease, border-color 250ms ease;
        }
        .chip-pop:hover {
          transform: translateY(-3px);
          background: rgba(255, 255, 255, 0.14);
          border-color: rgba(186, 230, 253, 0.5);
          box-shadow: 0 10px 20px -10px rgba(0, 0, 0, 0.35);
        }

        /* CTA magnetic glow (uses --x/--y from mousemove) */
        .cta {
          position: relative;
          overflow: hidden;
        }
        .cta-glow {
          background: radial-gradient(
              180px 180px at var(--x, 50%) var(--y, 50%),
              rgba(255, 255, 255, 0.12),
              transparent 60%
            ),
            radial-gradient(
              260px 220px at var(--x, 50%) var(--y, 50%),
              rgba(42, 168, 255, 0.18),
              transparent 70%
            );
          transition: opacity 250ms ease;
          opacity: 0.9;
        }

        /* Right card subtle float */
        .floaty {
          animation: floatUp 10s ease-in-out infinite;
        }
        .card-tilt {
          will-change: transform;
          transition: transform 150ms ease;
        }

        /* Animated vignette overlay */
        .animate-vignette {
          animation: vignettePulse 8s ease-in-out infinite;
        }

        /* Scroll cue */
        @keyframes scrollPulse {
          0% {
            transform: translateY(0);
            opacity: 0.9;
          }
          50% {
            transform: translateY(6px);
            opacity: 0.5;
          }
          100% {
            transform: translateY(0);
            opacity: 0.9;
          }
        }
        .animate-scroll {
          animation: scrollPulse 1.6s ease-in-out infinite;
        }

        /* Generic keyframes */
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatUp {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }
        @keyframes shine {
          0% {
            background-position-x: 0%;
          }
          50% {
            background-position-x: 100%;
          }
          100% {
            background-position-x: 0%;
          }
        }
        @keyframes vignettePulse {
          0% {
            opacity: 0.6;
          }
          50% {
            opacity: 0.9;
          }
          100% {
            opacity: 0.6;
          }
        }

        /* Reduced motion support */
        @media (prefers-reduced-motion: reduce) {
          .animate-in,
          .floaty,
          .shine,
          .shine-fast,
          .animate-scroll,
          .animate-vignette {
            animation: none !important;
          }
          .cta-glow {
            transition: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero1;

//  "use client";

// import React from "react";
// import { useModal } from "@/app/context/ModalContext";

// const Hero1 = () => {
//   const { openModal } = useModal();

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Top Image Wave */}
//       <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
//         <img
//           src="/assets/images/top.webp"
//           alt="top wave"
//           loading="lazy"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         src="/assets/images/video.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       >
//         Your browser does not support the video tag.
//       </video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

//       {/* Content */}
//       <div className="relative z-30 flex flex-col justify-center items-start h-full px-6 md:px-16 max-w-4xl">
//         <div className="bg-white/90 rounded-md p-6 md:p-10 shadow-lg backdrop-blur-sm">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#012A4A] mb-4 leading-tight font-serif">
//             <span className="block">
//               Transforming Ideas into Published Masterpieces –
//             </span>
//             <span className="block">Expert Book Writing, Editing </span>
//             <span className="block">Publishing Services</span>
//           </h1>

//           <button
//             aria-label="Open get started modal"
//             onClick={openModal}
//             className="
//     group relative inline-flex items-center justify-center
//     overflow-hidden rounded-2xl px-10 py-3.5
//     font-semibold tracking-wide text-white
//     bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd]
//     shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]
//     transition-[transform,box-shadow] duration-300 ease-out
//     hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)]
//     active:translate-y-0
//     focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]
//     motion-reduce:transition-none motion-reduce:hover:transform-none
//   "
//           >
//             {/* ambient glow (subtle, always on) */}
//             <span
//               className="
//       pointer-events-none absolute inset-[-2px] rounded-2xl
//       bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
//           radial-gradient(140px_90px_at_80%_30%,rgba(42,168,255,.16),transparent)]
//     "
//             />

//             {/* animated border glow on hover */}
//             <span
//               className="
//       pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10
//       group-hover:ring-cyan-200/40 transition-[box-shadow,opacity] duration-300
//       shadow-[inset_0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_18px_rgba(42,168,255,0.25)]
//     "
//             />

//             {/* slow sliding gradient overlay (left → right) */}
//             <span
//               className="
//       absolute inset-0 -translate-x-full group-hover:translate-x-4
//       transition-transform duration-1000 ease-out
//       bg-gradient-to-r from-[#0a6ebd] via-[#2aa8ff] to-[#00d4ff]
//       opacity-90
//     "
//             />

//             {/* glossy shine sweep */}
//             <span
//               className="
//       pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
//       -skew-x-12 bg-white/18
//       translate-x-[-120%] group-hover:translate-x-[320%]
//       transition-transform duration-[2000ms] ease-out
//       blur-[2px]
//     "
//             />

//             {/* default text */}
//             <span className="relative z-10 transition-all duration-200 group-hover:opacity-0">
//               Get Started
//             </span>

//             {/* hover text */}
//             <span
//               className="
//       absolute inset-0 z-10 flex items-center justify-center
//       opacity-0 group-hover:opacity-100
//       transition-opacity duration-200
//     "
//             >
//               Get A Quote
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Bottom Image Wave */}
//       <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
//         <img
//           src="/assets/images/bottom.webp"
//           alt="bottom wave"
//           loading="lazy"
//           className="w-full h-auto object-cover"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero1;
