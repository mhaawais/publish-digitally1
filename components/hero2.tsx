"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState, memo } from "react";

const logos = [
  "/assets/images/amazon-1.webp",
  "/assets/images/amazon-2.webp",
  "/assets/images/amazon-3.jpeg",
  "/assets/images/amazon-4.png",
  "/assets/images/amazon-5.png",
  "/assets/images/amazon-6.png",
  "/assets/images/amazon-7.png",
  "/assets/images/amazon-8.webp",
];

// Small utility to get a friendly alt from filename
const labelFromSrc = (src: string) =>
  src
    .split("/")
    .pop()
    ?.split(".")[0]
    .replace(/[-_]/g, " ")
    .replace(/\d+/g, "")
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase()) || "Partner logo";

type LogoCardProps = {
  src: string;
  i: number;
  onImgReady: () => void;
};

const LogoCard = memo(({ src, i, onImgReady }: LogoCardProps) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <li className="shrink-0">
      <div
        className="
          cursor-pointer h-16 w-44 sm:h-20 sm:w-56 md:h-24 md:w-64
          flex items-center justify-center
          rounded-2xl bg-white/80 dark:bg-white/10 backdrop-blur
          ring-1 ring-slate-200 dark:ring-white/10 shadow-sm
          transition hover:shadow-md hover:ring-slate-300 hover:bg-white dark:hover:bg-white/20
          grayscale opacity-80 hover:grayscale-0 hover:opacity-100
          [will-change:transform]
        "
        title={labelFromSrc(imgSrc)}
      >
        <Image
          src={imgSrc}
          alt={labelFromSrc(imgSrc)}
          width={256}
          height={96}
          className="h-10 sm:h-12 md:h-14 w-auto object-contain"
          priority={i < 4}
          onLoadingComplete={onImgReady}
          onError={() => {
            // fallback to a tiny inline SVG if an image fails
            setImgSrc(
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='256' height='96'%3E%3Crect width='100%25' height='100%25' fill='%23eef2f7'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' font-family='Arial' font-size='14' fill='%2399a1ab'%3ELogo%20Unavailable%3C/text%3E%3C/svg%3E"
            );
            onImgReady();
          }}
        />
      </div>
    </li>
  );
});
LogoCard.displayName = "LogoCard";

export default function Hero2() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const trackARef = useRef<HTMLUListElement>(null);
  const trackBRef = useRef<HTMLUListElement>(null);

  const widthRef = useRef(0);
  const x1 = useRef(0);
  const x2 = useRef(0);
  const raf = useRef<number>();
  const paused = useRef(false);

  const SPEED = 60; // px/sec
  const MAX_DT = 48; // clamp delta to avoid spikes after tab sleep

  const measure = () => {
    const a = trackARef.current;
    const b = trackBRef.current;
    if (!a || !b) return;

    // Measure one full track width (includes our spacer)
    const w = a.scrollWidth;
    widthRef.current = w;
    x1.current = 0;
    x2.current = w;

    a.style.transform = "translateX(0px)";
    b.style.transform = `translateX(${w}px)`;
  };

  const remeasureSoon = () => requestAnimationFrame(measure);

  useEffect(() => {
    const wrap = wrapRef.current;
    const a = trackARef.current;
    const b = trackBRef.current;
    if (!wrap || !a || !b) return;

    // First measure after layout
    requestAnimationFrame(measure);

    // Resize listener
    const onResize = () => measure();
    window.addEventListener("resize", onResize);

    // Pause on hover/touch
    const onEnter = () => (paused.current = true);
    const onLeave = () => (paused.current = false);
    wrap.addEventListener("mouseenter", onEnter);
    wrap.addEventListener("mouseleave", onLeave);
    wrap.addEventListener("touchstart", onEnter, { passive: true });
    wrap.addEventListener("touchend", onLeave);

    // Respect reduced motion
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (media.matches) paused.current = true;

    let last = performance.now();
    const tick = (now: number) => {
      const dt = Math.min(now - last, MAX_DT);
      last = now;

      if (!paused.current) {
        const w = widthRef.current;
        const dx = (SPEED * dt) / 1000;

        x1.current -= dx;
        x2.current -= dx;

        // Leapfrog tracks
        if (x1.current <= -w) x1.current = x2.current + w;
        if (x2.current <= -w) x2.current = x1.current + w;

        a.style.transform = `translateX(${x1.current}px)`;
        b.style.transform = `translateX(${x2.current}px)`;
      }

      raf.current = requestAnimationFrame(tick);
    };

    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("resize", onResize);
      wrap.removeEventListener("mouseenter", onEnter);
      wrap.removeEventListener("mouseleave", onLeave);
      wrap.removeEventListener("touchstart", onEnter);
      wrap.removeEventListener("touchend", onLeave);
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  const items = logos;

  // Spacer equals the gap between items so A|B boundary looks identical
  const Spacer = () => (
    <li
      aria-hidden
      className="shrink-0 w-8 sm:w-10 md:w-12"
      // matches gap-8 / gap-10 / gap-12 across breakpoints
    />
  );

  return (
    <section
      aria-label="Featured partners"
      className="bg-[#c5d1d8] mb-3 select-none cursor-pointer"
    >
      {/* Constrain and center for large screens */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Explicit height so absolute tracks are visible */}
        <div
          ref={wrapRef}
          className="relative overflow-hidden h-24 sm:h-28 md:h-32 rounded-2xl"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-20 bg-gradient-to-r from-[#c5d1d8] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-20 bg-gradient-to-l from-[#c5d1d8] to-transparent" />

          {/* Track container centers content vertically */}
          <div className="absolute inset-0 flex items-center">
            {/* Track A */}
            <ul
              ref={trackARef}
              className="absolute left-0 flex items-center gap-8 sm:gap-10 md:gap-12 py-2 min-w-max [will-change:transform]"
              aria-hidden="true"
            >
              {items.map((src, i) => (
                <LogoCard
                  key={`a-${i}`}
                  src={src}
                  i={i}
                  onImgReady={remeasureSoon}
                />
              ))}
              <Spacer />
            </ul>

            {/* Track B */}
            <ul
              ref={trackBRef}
              className="absolute left-0 flex items-center gap-8 sm:gap-10 md:gap-12 py-2 min-w-max [will-change:transform]"
              aria-hidden="true"
            >
              {items.map((src, i) => (
                <LogoCard
                  key={`b-${i}`}
                  src={src}
                  i={i}
                  onImgReady={remeasureSoon}
                />
              ))}
              <Spacer />
            </ul>
          </div>

          <span className="sr-only">Partner logos sliding horizontally</span>
        </div>
      </div>
    </section>
  );
}
