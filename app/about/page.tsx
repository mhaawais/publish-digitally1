"use client";

import Image from "next/image";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import React, { useState } from "react";
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
      <Header />

      {/* About Banner */}

      <section className="relative bg-[url('/assets/images/about-us.jpg')] bg-cover bg-center min-h-[60vh] flex items-center justify-center">
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/70 z-0" />

        {/* Centered content */}
        <div className="relative z-10 text-center px-6 sm:px-8">
          <h1 className="text-5xl font-bold text-blue-300 capitalize drop-shadow-xl animate-fadeIn">
            About Us
          </h1>
          <p className="text-white mt-6 max-w-3xl mx-auto animate-fadeIn delay-100 text-lg leading-relaxed">
            <span className="block">
              Publish Digitally is more than a publishing agency—we are your
              creative partner.
            </span>
            <span className="block mt-2">
              We guide authors, entrepreneurs, and visionaries from idea to
              published success.
            </span>
          </p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-blue-100">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <h5 className="text-blue-600 text-sm font-semibold">WHO WE ARE</h5>
            <h2 className="text-3xl font-bold mb-4">
              Empowering Authors With Elite Publishing Solutions
            </h2>
            <div className="w-16 h-1 bg-blue-600 mb-6"></div>
            <p className="mb-4 text-sm sm:text-lg">
              Our mission is simple: make publishing accessible, professional,
              and impactful. Whether you're a first-time writer or a seasoned
              thought leader, we help bring your stories to life—beautifully and
              effectively.
            </p>
            <p className="mb-4 text-sm sm:text-lg">
              We blend creativity with strategy to deliver high-quality books,
              powerful branding, and seamless digital experiences. Our clients
              include business professionals, speakers, influencers, and
              visionaries worldwide.
            </p>
            <p className="mb-4 text-sm sm:text-lg">
              From stunning book covers to impactful marketing campaigns, we’re
              here to amplify your voice—because your story deserves to be
              heard.
            </p>
            <p className="font-semibold">
              Let us handle the publishing… so you can focus on your message.
            </p>
          </div>
          <div className="text-center">
            <Image
              src="/assets/images/about-1.jpg"
              alt="About Publish Digitally"
              width={400}
              height={400}
              className="mx-auto rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-2">Our Services</h2>
          <p className="mb-6 text-gray-600 max-w-2xl mx-auto">
            End-to-end solutions tailored for modern authors. We handle every
            stage—from concept to bestseller—with creativity, precision, and
            digital excellence.
          </p>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-10"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left">
            {[
              {
                title: "Book Editing",
                src: "/assets/images/editing.webp",
                href: "/book-editing",
                desc: "Polish your manuscript with professional grammar, structure, and stylistic editing tailored to your voice.",
              },
              {
                title: "Audio Book",
                src: "/assets/images/audio-editing.webp",
                href: "/audio-book",
                desc: "Transform your book into a professional audiobook with voice talent and high-quality production.",
              },
              {
                title: "Cover Design",
                src: "/assets/images/book-cover.webp",
                href: "/cover-design",
                desc: "Custom cover designs that captivate readers and reflect your book’s essence—digitally and in print.",
              },
              {
                title: "Website for Authors",
                src: "/assets/images/author-website.webp",
                href: "/author-website",
                desc: "Showcase your author brand with a sleek, mobile-friendly website integrated with lead capture and e-commerce.",
              },
              {
                title: "Book Video Trailers",
                src: "/assets/images/book-video.webp",
                href: "/book-video",
                desc: "Engage your audience with cinematic book trailers designed for social media, ads, and landing pages.",
              },
              {
                title: "Illustration Services",
                src: "/assets/images/illustration.webp",
                href: "/illustration",
                desc: "Bring your stories to life with bespoke illustrations—perfect for children’s books, branding, and more.",
              },
              {
                title: "Book Publishing",
                src: "/assets/images/publishing (1).webp",
                href: "/book-publishing",
                desc: "From ISBN to distribution—we publish your book across major platforms like Amazon, Apple, and B&N.",
              },
              {
                title: "Ghostwriting",
                src: "/assets/images/book-writing.webp",
                href: "/ghostwriting",
                desc: "Collaborate with our elite ghostwriters to craft your book in your voice and vision.",
              },
              {
                title: "Book Promotions",
                src: "/assets/images/content.webp",
                href: "/book-marketing",
                desc: "Drive sales and visibility with customized digital marketing campaigns, email funnels, and launch strategy.",
              },
            ].map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className="block bg-white p-5 rounded-xl shadow-md hover:shadow-xl transition-transform duration-300 hover:-translate-y-1 group"
              >
                <Image
                  src={service.src}
                  alt={service.title}
                  width={500}
                  height={300}
                  className="rounded-lg mb-4 group-hover:scale-105 transition duration-300"
                />
                <h4 className="text-xl font-semibold mb-2 group-hover:text-blue-700">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Hero4 />
      <Hero9 />
      <Hero11 />
      <Hero12 />
      <ModalForm />
      <Footer />
    </>
  );
};

export default About;
