"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative text-white overflow-hidden">
      {/* Torn Paper Image at the Top */}
      <div className="relative w-full z-10">
        <Image
          src="/assets/images/top.webp"
          alt="Torn Paper"
          width={1920}
          height={100}
          className="w-full object-cover"
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/bg-image.jpeg"
          alt="Footer Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="brightness-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-[#052540]/90 z-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-9">
        {/* Top: Logo & Description */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Link href="/">
            <Image
              src="/assets/logo/Author-Logo1.png"
              alt="Logo"
              width={140}
              height={40}
              className="mx-auto mb-4 hover:opacity-80 transition"
            />
          </Link>
          <p className="text-sm sm:text-base text-white/90 leading-relaxed">
            <strong>Publish Digitally</strong> is a premier book marketing and
            publishing service committed to helping authors build global
            recognition. We specialize in powerful book presentation to ensure
            your book captures the spotlight. From visibility to virality —
            we’re here to help you turn your manuscript into a bestseller.
          </p>
        </div>

        {/* Middle: Navigation Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 text-sm text-white/90 text-center mb-12 hover:text-gray-300">
          {[
            ["Home", "/"],
            ["Ghostwriting", "/ghostwriting"],
            ["Book Promotion", "/book-promotions"],
            ["Book Publishing", "/book-publishing"],
            ["Book Editing", "/book-editing"],
            ["Author Website", "/author-website"],
            ["Audio Book", "/audio-book"],
            ["Book Video", "/book-video"],
            ["Book Cover Design", "/cover-design"],
            ["Illustration", "/illustration"],
            ["About-US", "/about"],
            ["Contact-US", "/contact"],
            ["Terms & Conditions", "/terms-conditions"],
            ["Privacy Policy", "/privacy-policy"],
          ].map(([label, href], i) => (
            <Link
              key={i}
              href={href}
              className="hover:underline hover:text-white transition"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center text-center gap-6 text-sm text-white/80 mt-8">
          {/* Contact Info */}
          <div className="space-y-4">
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Call us now</p>
              <a
                href="tel:+12137841841"
                className="flex items-center gap-2 hover:text-white hover:underline transition"
              >
                <FaPhoneAlt /> +1 (213) 784 1841
              </a>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Mail us at</p>
              <a
                href="mailto:info@publishdigitally.com"
                className="flex items-center gap-2 hover:text-white transition hover:underline"
              >
                <FaEnvelope /> info@publishdigitally.com
              </a>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="font-semibold">Find us at</p>
              <p className="flex items-center gap-2 text-center hover:underline cursor-pointer hover:text-white">
                <FaMapMarkerAlt />
                5900 Balcones Drive STE 100, Austin, Texas, 78731
              </p>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center gap-4 text-lg text-white mt-4">
            <p className="font-medium text-sm">Follow us at:</p>

            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform hover:text-blue-400"
            >
              <FaFacebookF />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform hover:text-pink-600"
            >
              <FaInstagram />
            </a>

            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform hover:text-blue-500"
            >
              <FaTwitter />
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform hover:text-blue-600"
            >
              <FaLinkedinIn />
            </a>
          </div>

          <div className="mt-5 flex flex-col lg:flex-row lg:justify-between lg:items-center gap-6">
            <Image
              src="/assets/images/footer-1.webp"
              alt="security-options"
              height={200}
              width={200}
            />

            <Image
              src="/assets/images/footer-4.jpg"
              alt="2nd-security-options"
              height={200}
              width={200}
            />
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center text-xs text-white/60 mt-10 border-t border-white/10 pt-4">
          © {new Date().getFullYear()} Publish Digitally. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
