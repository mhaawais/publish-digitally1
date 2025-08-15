"use client";

import React, { useEffect, useRef, useState } from "react";
import { useModal } from "@/app/context/ModalContext";
import Link from "next/link";

const Hero1 = () => {
  const chip = [
    "bg-gray-700 px-3 py-1 rounded-full border border-white/30 text-white",
    "transition-all duration-300 ease-out",
    "hover:text-white hover:border-white hover:bg-blue-800 hover:font-medium",
    "hover:shadow-lg hover:shadow-blue-500/30",
    "active:scale-95",
  ].join(" ");

  const { openModal } = useModal();

  const [headerH, setHeaderH] = useState(80);
  const [inView, setInView] = useState(false); // State to track if the section is in view
  const tiltRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef(null); // Reference to the section for Intersection Observer

  // Update header height
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

  // IntersectionObserver to detect when the section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the section is visible
    );
    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  // Handle tilt effect on mouse movement
  const handleTiltMove = (e: React.MouseEvent) => {
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 10;
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
      className={`relative w-full overflow-hidden isolate ${inView ? 'animate-fade-in' : ''}`}
      ref={heroRef}
      style={{
        paddingTop: `calc(${headerH}px + env(safe-area-inset-top))`,
        minHeight: `calc(100svh - ${headerH}px)`,
      } as React.CSSProperties}
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/assets/images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlays */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="absolute inset-0 bg-black/55" />
        <div className="absolute inset-0 bg-[radial-gradient(60%_50%_at_20%_25%,rgba(42,168,255,.18),transparent_60%)] animate-vignette" />
      </div>

      {/* Content */}
      <div className="relative mt-5 mb-10 z-20 mx-auto max-w-7xl px-6 md:px-10 ">
        <div className="grid items-center gap-8 md:gap-12 md:grid-cols-12">
          {/* Left */}
          <div className="md:col-span-8 lg:col-span-7">
            <div className="glass-card ring-1 ring-white/15 bg-white/10 backdrop-blur-md p-5 sm:p-8 shadow-xl animate-in hover:glass-pop">
              <p className="text-[11px] sm:text-xs tracking-[0.25em] uppercase text-white/70">
                Publish Digitally
              </p>

              <h1 className="mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.06] bg-clip-text text-transparent gradient-shift drop-shadow-[0_2px_0_rgba(0,0,0,.15)]">
                From Idea to <span className="shine hover:shine-fast">Bestseller-Ready</span>
              </h1>

              <p className="mt-4 text-base sm:text-lg text-white/85 max-w-2xl">
                Ghostwriting, editing, design, audiobook, web, and publishing—built into one
                smooth, milestone-driven workflow.
              </p>

              <div className="mt-7 flex flex-wrap gap-3 items-center">
                <button
                  aria-label="Open get started modal"
                  onClick={openModal}
                  className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-10 py-3.5 font-semibold tracking-wide text-white bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd] shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829] motion-reduce:transition-none motion-reduce:hover:transform-none"
                >
                  <span className="pointer-events-none absolute inset-[-2px] rounded-2xl bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),radial-gradient(140px_90px_at_80%_30%,rgba(42,168,255,.16),transparent)]" />
                  <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-cyan-200/40 transition-[box-shadow,opacity] duration-300 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_18px_rgba(42,168,255,0.25)]" />
                  <span className="absolute inset-0 -translate-x-full group-hover:translate-x-4 transition-transform duration-1000 ease-out bg-gradient-to-r from-[#0a6ebd] via-[#2aa8ff] to-[#00d4ff] opacity-90" />
                  <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/18 translate-x-[-120%] group-hover:translate-x-[320%] transition-transform duration-[2000ms] ease-out blur-[2px]" />
                  <span className="relative z-10 transition-all duration-200 group-hover:opacity-0">Get Started</span>
                  <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    Get A Quote
                  </span>
                </button>
              </div>

              {/* Feature chips */}
              <div className="mt-5 flex flex-wrap gap-2 text-[12px]">
                <Link href="/ghostwriting" className={chip}>Ghostwriting</Link>
                <Link href="/book-editing" className={chip}>Editing</Link>
                <Link href="/cover-design" className={chip}>Cover Design</Link>
                <Link href="/audio-book" className={chip}>Audiobook</Link>
                <Link href="/author-website" className={chip}>Author Website</Link>
                <Link href="/book-promotions" className={chip}>Book Promotion</Link>
                <Link href="/illustration" className={chip}>Illustration</Link>
                <Link href="/book-publishing" className={chip}>Publishing</Link>
                <Link href="/book-video" className={chip}>Videos</Link>
              </div>
            </div>
          </div>

          {/* Right panel */}
          <div className="md:col-span-4 lg:col-span-5 hidden sm:block">
            <div
              ref={tiltRef}
              onMouseMove={handleTiltMove}
              onMouseLeave={handleTiltLeave}
              className="relative h-[360px] lg:h-[420px] perspective"
              style={{
                transform: "perspective(1000px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
                transformStyle: "preserve-3d",
              } as React.CSSProperties}
            >
              <div className="animate-float-delayed absolute inset-0 rounded-3xl bg-white/85 p-5 ring-1 ring-black/5 shadow-2xl backdrop-blur-sm floaty card-tilt">
                <div className="text-[#012A4A] font-bold">Your Book, Beautifully Built</div>
                <div className="text-[#012A4A]/70 text-sm mt-1">
                  Voice-matched writing, pro editing, premium design, and precise launch ops.
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


      {/* Styles */}
      <style jsx>{`
        .animate-in { animation: fadeUp 650ms ease-out both; }
        .glass-card { transition: transform 300ms ease, box-shadow 300ms ease, border-color 300ms ease; border: 1px solid rgba(255,255,255,0.14); }
        .glass-pop:hover { transform: translateY(-4px); box-shadow: 0 28px 60px -28px rgba(0,0,0,0.5); border-color: rgba(186,230,253,0.4); }

        .gradient-shift { background-image: linear-gradient(100deg,#eaf6ff 0%,#77c5ff 60%,#eaf6ff 100%); background-size: 200% 100%; transition: background-position 600ms ease; }
        .gradient-shift:hover { background-position: 100% 0; }

        .shine { background-image: linear-gradient(100deg,#eaf6ff 0%,#77c5ff 60%,#eaf6ff 100%); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; animation: shine 5s ease-in-out infinite; }
        .shine-fast { animation-duration: 3s; }

        .floaty { animation: floatUp 10s ease-in-out infinite; }
        .card-tilt { will-change: transform; transition: transform 150ms ease; }

        .animate-vignette { animation: vignettePulse 8s ease-in-out infinite; }

        @keyframes scrollPulse { 0% { transform: translateY(0); opacity: .9; } 50% { transform: translateY(6px); opacity: .5; } 100% { transform: translateY(0); opacity: .9; } }
        .animate-scroll { animation: scrollPulse 1.6s ease-in-out infinite; }

        @keyframes fadeUp { from { opacity: 0; transform: translateY(14px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes floatUp { 0% { transform: translateY(0); } 50% { transform: translateY(-10px); } 100% { transform: translateY(0); } }
        @keyframes shine { 0% { background-position-x: 0%; } 50% { background-position-x: 100%; } 100% { background-position-x: 0%; } }
        @keyframes vignettePulse { 0% { opacity: .6; } 50% { opacity: .9; } 100% { opacity: .6; } }

        @media (prefers-reduced-motion: reduce) {
          .animate-in, .floaty, .shine, .shine-fast, .animate-scroll, .animate-vignette { animation: none !important; }
        }
      `}</style>
    </section>
  );
};

export default Hero1;

