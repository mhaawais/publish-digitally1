"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";
import Hero4 from "@/components/hero4";
import Hero9 from "@/components/hero9";
import Hero11 from "@/components/hero11";
import Hero12 from "@/components/hero12";

const About = () => {
  const { openModal } = useModal();

  return (
    <>
      {/* ======================= Banner ======================= */}
      <section className="relative min-h-[55vh] flex items-center justify-center overflow-hidden bg-[url('/assets/images/about-us.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
        {/* Ambient blobs */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-float-delayed" />

        <div className="relative z-10 text-center px-6 sm:px-8">
          <p className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-widest text-white/80 animate-fade-in">
            YOUR PUBLISHING PARTNER
          </p>
          <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl animate-typewriter">
            About <span className="text-cyan-300">Publish Digitally</span>
          </h1>
          <p className="mt-5 max-w-3xl mx-auto text-white/90 text-base sm:text-lg leading-relaxed animate-fade-in-up">
            We believe every story deserves to be told—and told well. We’re more
            than a publishing agency; we’re your strategic partner in bringing
            ideas to life with compelling writing, stunning design, and
            launch-ready strategy.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              aria-label="Open get started modal"
              onClick={openModal}
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-2xl px-10 py-3.5 font-semibold tracking-wide text-white bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd] shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829] motion-reduce:transition-none motion-reduce:hover:transform-none"
            >
              <span className="pointer-events-none absolute inset-[-2px] rounded-2xl bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),radial-gradient(140px_90px_at_80%_30%,rgba(42,168,255,.16),transparent)]" />
              <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-cyan-200/40 transition-[box-shadow,opacity] duration-300 shadow-[inset_0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_18px_rgba(42,168,255,0.25)]" />
              <span className="absolute inset-0 -translate-x-full group-hover:translate-x-4 transition-transform duration-1000 ease-out bg-gradient-to-r from-[#0a6ebd] via-[#2aa8ff] to-[#00d4ff] opacity-90" />
              <span className="pointer-events-none absolute -left-1/3 top-0 h-full w-1/3 -skew-x-12 bg-white/18 translate-x-[-120%] group-hover:translate-x-[320%] transition-transform duration-[2000ms] ease-out blur-[2px]" />
              <span className="relative z-10 transition-all duration-200 group-hover:opacity-0">
                Talk To Us
              </span>
              <span className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                Start Your Book
              </span>
            </button>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 px-6 py-3 font-semibold text-white
             transform-gpu will-change-[transform,box-shadow]
             transition-[transform,background-color,box-shadow] duration-300 ease-out
             hover:-translate-y-1 hover:bg-[#051a2e] hover:shadow-lg
             focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]"
            >
              Talk to an Expert
            </Link>
          </div>
        </div>
      </section>

      {/* ======================= Who We Are ======================= */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-slide-in-left">
            <h5 className="text-blue-700 text-xs font-bold tracking-widest">
              WHO WE ARE
            </h5>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#052540]">
              Empowering Authors with Elite Publishing Solutions
            </h2>
            <div className="mt-4 h-[3px] w-20 bg-blue-600 rounded-full" />

            <div className="mt-6 space-y-4 text-slate-700 text-base sm:text-lg leading-relaxed">
              <p>
                From first-time authors to seasoned entrepreneurs, we guide you
                through every step of the publishing journey—crafting compelling
                narratives, designing eye-catching covers, and promoting your
                work to the right audience.
              </p>
              <p>
                Our mission is simple: transform your vision into a polished,
                impactful book that stands out in today’s competitive market.
                With a team of experienced ghostwriters, editors, designers, and
                marketing experts, we combine creativity with strategy to
                deliver results that go beyond the printed page.
              </p>
              <p>
                Whether your goal is to inspire, educate, or entertain, we help
                you make a lasting impression on your readers—locally and
                globally.{" "}
                <strong>
                  Your words have power. We help you share them with the world.
                </strong>
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {/* Stats */}
              <div className="rounded-xl bg-white p-4 shadow hover-glow hover:bg-blue-200 hover-lift animate-fade-in-up cursor-pointer">
                <div className="text-2xl font-extrabold text-[#0a6ebd]">
                  200+
                </div>
                <div className="text-xs text-slate-600">Projects Delivered</div>
              </div>
              <div
                className="rounded-xl bg-white p-4 shadow hover-glow hover:bg-blue-200 hover-lift animate-fade-in-up cursor-pointer"
                style={{ animationDelay: "80ms" } as any}
              >
                <div className="text-2xl font-extrabold text-[#0a6ebd]">
                  30+
                </div>
                <div className="text-xs text-slate-600">Industries Served</div>
              </div>
              <div
                className="rounded-xl bg-white p-4 shadow hover-glow hover:bg-blue-200 hover-lift animate-fade-in-up cursor-pointer"
                style={{ animationDelay: "160ms" } as any}
              >
                <div className="text-2xl font-extrabold text-[#0a6ebd]">25</div>
                <div className="text-xs text-slate-600">Countries Reached</div>
              </div>
              <div
                className="rounded-xl bg-white p-4 shadow hover-glow hover:bg-blue-200 hover-lift animate-fade-in-up cursor-pointer"
                style={{ animationDelay: "240ms" } as any}
              >
                <div className="text-2xl font-extrabold text-[#0a6ebd]">
                  4.9/5
                </div>
                <div className="text-xs text-slate-600">Avg. Client Rating</div>
              </div>
            </div>
          </div>

          {/* Image collage */}
          <div className="order-1 lg:order-2 relative grid gap-4 animate-slide-in-right">
            {/* <div className="relative">
              <Image
                src="/assets/images/about-1.jpg"
                alt="Publish Digitally team at work"
                width={520}
                height={300}
                className="w-full rounded-2xl shadow-lg hover:scale-[1.02] transition"
                priority
              />
              <span className="absolute -bottom-4 -right-4 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#052540] shadow animate-bounce-slow">
                Strategy + Creativity
              </span>
            </div> */}
            <div className="relative mx-auto max-w-[360px] sm:max-w-[420px] md:max-w-[480px]">
              <Image
                src="/assets/images/about-1.jpg"
                alt="Publish Digitally team at work"
                width={480}
                height={320}
                className="w-full h-auto rounded-2xl shadow-lg hover:scale-[1.02] transition"
                priority
              />
              <span className="absolute -bottom-3 -right-3 rounded-lg bg-white px-3 py-1.5 text-xs sm:text-sm font-semibold text-[#052540] shadow animate-bounce-slow">
                Strategy + Creativity
              </span>
            </div>

            {/* <div className="grid grid-cols-2 gap-4">
              <Image
                src="/assets/images/editing.webp"
                alt="Editing excellence"
                width={320}
                height={220}
                className="rounded-xl shadow hover:scale-[1.03] transition"
              />
              <Image
                src="/assets/images/book-cover.webp"
                alt="Cover design craft"
                width={320}
                height={220}
                className="rounded-xl shadow hover:scale-[1.03] transition"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* ======================= Why Choose Us ======================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052540]">
              Why Choose{" "}
              <span className="text-[#0a6ebd]">Publish Digitally</span>
            </h2>
            <p className="mt-4 text-slate-700 animate-fade-in-up">
              We blend storytelling, design, and data-driven marketing to build
              books that sell and brands that last.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "End-to-End Expertise",
                desc: "From idea development to global distribution—we handle it all with one integrated team.",
              },
              {
                title: "Genre-Matched Writers",
                desc: "Work with writers and editors experienced in your niche for authentic tone and credibility.",
              },
              {
                title: "Design that Sells",
                desc: "Covers and interiors crafted for clicks, conversions, and wow-factor on every platform.",
              },
              {
                title: "Audio & Video Ready",
                desc: "Audiobooks and trailers produced with studio-grade quality for modern, multi-format launches.",
              },
              {
                title: "Marketing that Works",
                desc: "Launch plans, sales funnels, ads, and email—to get your book seen and sold.",
              },
              {
                title: "Transparent & Collaborative",
                desc: "Clear timelines, milestone reviews, and unlimited feedback rounds where needed.",
              },
            ].map((c, i) => (
              <div
                key={c.title}
                className="rounded-2xl border border-slate-100 bg-gradient-to-br from-white to-slate-50 p-6 shadow hover:shadow-lg hover-lift hover-glow transition animate-slide-up"
                style={{ animationDelay: `${i * 60}ms` } as any}
              >
                <div className="text-2xl">✨</div>
                <h4 className="mt-3 text-xl font-bold text-[#052540]">
                  {c.title}
                </h4>
                <p className="mt-2 text-slate-600">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= Our Services ======================= */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-extrabold text-[#052540]">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 max-w-2xl mx-auto animate-fade-in-up">
            End-to-end publishing solutions designed for today’s authors and
            visionaries. From the first spark to a professionally published and
            marketed book, we handle every stage with creativity, precision, and
            excellence.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mt-6 mb-10 rounded-full" />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Book Editing",
                src: "/assets/images/editing.webp",
                href: "/book-editing",
                desc: "Perfect your words, preserve your voice. Refine grammar, structure, and flow—without losing your tone.",
              },
              {
                title: "Audiobook Production",
                src: "/assets/images/audio-editing.webp",
                href: "/audio-book",
                desc: "Your story, beautifully voiced. Professional narration with studio-grade production.",
              },
              {
                title: "Cover Design",
                src: "/assets/images/book-cover.webp",
                href: "/cover-design",
                desc: "First impressions that last. Custom covers that captivate in print and digital.",
              },
              {
                title: "Author Website",
                src: "/assets/images/author-website.webp",
                href: "/author-website",
                desc: "Your brand, your digital home. Sleek, mobile-friendly sites with lead capture & e-commerce.",
              },
              {
                title: "Book Video Trailers",
                src: "/assets/images/book-video.webp",
                href: "/book-video",
                desc: "Your story in motion. Cinematic trailers built for socials, ads, and landing pages.",
              },
              {
                title: "Illustration Services",
                src: "/assets/images/illustration.webp",
                href: "/illustration",
                desc: "Bring your words to life. Bespoke illustrations perfect for children’s books & branding.",
              },
              {
                title: "Book Publishing",
                src: "/assets/images/publishing (1).webp",
                href: "/book-publishing",
                desc: "From manuscript to marketplace—ISBN, formatting, and distribution to Amazon, Apple, B&N.",
              },
              {
                title: "Ghostwriting",
                src: "/assets/images/book-writing.webp",
                href: "/ghostwriting",
                desc: "Your ideas, our words. A compelling manuscript in your voice and style.",
              },
              {
                title: "Book Promotions",
                src: "/assets/images/content.webp",
                href: "/book-marketing",
                desc: "Get your book seen and sold. Funnels, ads, email, and launch strategy tailored to you.",
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="group block rounded-2xl bg-white p-5 shadow-md hover:shadow-xl transition duration-300 hover:-translate-y-1 hover-glow animate-fade-in-up"
                style={{ animationDelay: `${80 + idx * 45}ms` } as any}
              >
                <Image
                  src={service.src}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 group-hover:scale-105 transition duration-300"
                />
                <h4 className="text-xl font-bold mb-2 group-hover:text-[#0a6ebd]">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </Link>
            ))}
          </div>

          <div className="mt-10">
            <button
              onClick={openModal}
              className="inline-flex items-center gap-2 rounded-xl bg-[#0a6ebd] px-6 py-3 font-semibold text-white shadow hover:shadow-lg hover:-translate-y-0.5 transition animate-slide-up"
            >
              Get a Free Publishing Plan <span>→</span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================= Our Process ======================= */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052540]">
              A Clear, Collaborative Process
            </h2>
            <p className="mt-3 text-slate-700 animate-fade-in-up">
              Transparent milestones, creative checkpoints, and on-time
              delivery.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery",
                desc: "We understand your goals, audience, and outcomes.",
              },
              {
                step: "02",
                title: "Outline & Plan",
                desc: "Strategy, scope, and timelines—kept crystal clear.",
              },
              {
                step: "03",
                title: "Writing & Editing",
                desc: "Drafts, revisions, and alignment with your voice.",
              },
              {
                step: "04",
                title: "Design",
                desc: "Cover and interior layouts engineered to convert.",
              },
              {
                step: "05",
                title: "Production",
                desc: "Formatting, audiobook, and trailer—multi-format ready.",
              },
              {
                step: "06",
                title: "Launch & Promote",
                desc: "Distribution, funnels, ads, email, and analytics.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                className="relative rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-sm hover:shadow-md hover-lift transition animate-slide-up"
                style={{ animationDelay: `${i * 70}ms` } as any}
              >
                <div className="absolute -top-3 left-6 rounded-full bg-white px-3 py-1 text-xs font-bold text-[#0a6ebd] shadow">
                  Step {s.step}
                </div>
                <h4 className="mt-2 text-xl font-bold text-[#052540]">
                  {s.title}
                </h4>
                <p className="mt-2 text-slate-600">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= Testimonials (short + clean) ======================= */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052540]">
              Authors Love Working With Us
            </h2>
            <p className="mt-3 text-slate-700">
              Real people, real outcomes—creative partnership that respects your
              voice.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {[
              {
                quote:
                  "Publish Digitally turned my scattered ideas into a powerful, polished book. Seamless experience from strategy to launch.",
                name: "Samantha G.",
                role: "Entrepreneur & Speaker",
              },
              {
                quote:
                  "Beautiful design, clear timelines, and a launch plan that actually worked. I felt guided at every step.",
                name: "Charles M.",
                role: "Author",
              },
            ].map((t, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white p-6 shadow hover:shadow-lg hover-lift transition animate-fade-in-up"
                style={{ animationDelay: `${i * 100}ms` } as any}
              >
                <div className="text-3xl">“</div>
                <p className="mt-2 text-slate-700">{t.quote}</p>
                <div className="mt-4 text-sm font-semibold text-[#052540]">
                  {t.name}{" "}
                  <span className="text-slate-500 font-normal">• {t.role}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ======================= CTA ======================= */}
      <section className="relative py-16">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd] p-8 sm:p-12 text-white shadow-lg">
            <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float" />
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 blur-2xl animate-float-delayed" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl sm:text-3xl font-extrabold">
                  Ready to Publish with Confidence?
                </h3>
                <p className="mt-3 text-white/90">
                  Let’s map your journey—from concept to bestseller. Get a free
                  custom plan for your book.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={openModal}
                  className="rounded-xl bg-white text-[#051a2e] px-6 py-3 font-semibold hover:bg-slate-100 transition animate-slide-up"
                >
                  Get Free Plan
                </button>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/50 px-6 py-3 font-semibold hover:bg-white/10 transition animate-slide-up"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reuse your hero sections + modal (kept at the end for continuity) */}
      <Hero4 />
      <Hero9 />
      <Hero11 />
      <Hero12 />
      <ModalForm />
    </>
  );
};

export default About;
