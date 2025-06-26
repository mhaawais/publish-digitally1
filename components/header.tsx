"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaBars,
  FaTimes,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";
import { FiChevronDown } from "react-icons/fi";
import { useModal } from "@/app/context/ModalContext";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const { openModal } = useModal();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        servicesRef.current &&
        !(servicesRef.current as HTMLElement).contains(event.target as Node)
      ) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="bg-[#052540] text-white w-full fixed top-0 left-0 z-50 shadow-md">
      <div className="flex items-center justify-between px-4 py-2 lg:px-12 lg:py-1">
        <Link href="/">
          <Image
            src="/assets/logo/Author-Logo1.png"
            alt="Logo"
            width={110}
            height={32}
            className="cursor-pointer"
          />
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          <nav className="flex gap-6 items-center text-sm font-semibold">
            <div className="relative" ref={servicesRef}>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-gray-300 text-base font-semibold"
              >
                Services
                <FiChevronDown
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-3 bg-white text-[#052540] rounded-lg shadow-lg p-4 w-72 z-50 grid grid-cols-2 gap-3 text-sm">
                  <Link href="/services">📘 Book Editing</Link>
                  <Link href="/audio-book">🎧 Audio Book</Link>
                  <Link href="/book-cover">🎨 Cover Design</Link>
                  <Link href="/author-website">🌐 Website</Link>
                  <Link href="/book-video">🎥 Book Video</Link>
                  <Link href="/illustration">🖌️ Illustration</Link>
                </div>
              )}
            </div>
            <Link href="/book-publishing" className="hover:text-gray-300 text-base font-semibold">
              Book Publishing
            </Link>
            <Link href="/ghost-writing" className="hover:text-gray-300 text-base font-semibold">
              Ghostwriting
            </Link>
            <Link href="/book-promotions" className="hover:text-gray-300 text-base font-semibold">
              Book Promotions
            </Link>
            <Link href="/stories" className="hover:text-gray-300 text-base font-semibold">
              Stories
            </Link>
            <Link href="/blogs" className="hover:text-gray-300 text-base font-semibold">
              Blogs
            </Link>
          </nav>

          <button
            onClick={openModal}
            className="bg-[#c5d1d8] hover:bg-[#cdcdd3] text-black px-6 py-4 rounded-lg shadow hover:shadow-lg transition-all font-bold"
          >
            Get Started
          </button>
        </div>

        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-4/5 max-w-md h-full bg-[#052540] text-white p-6 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between mb-6">
          <Link href="/">
            <Image
              src="/assets/logo/Author-Logo1.png"
              alt="Logo"
              width={100}
              height={28}
              className="cursor-pointer"
            />
          </Link>
          <button onClick={() => setMenuOpen(false)} className="text-2xl">
            <FaTimes />
          </button>
        </div>

        <nav className="space-y-6 text-base font-semibold">
          <div>
            <div className="text-white mb-3 text-lg tracking-wide border-b border-white/20 pb-1">
              Services
            </div>
            <div className="grid grid-cols-2 gap-3 ml-2 text-sm">
              {["/services", "/audio-book", "/book-cover", "/author-website", "/book-video", "/illustration"].map((href, idx) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="block rounded-md px-3 py-2 bg-white/5 hover:bg-white/10 transition"
                >
                  {[
                    "📘 Book Editing",
                    "🎧 Audio Book",
                    "🎨 Cover Design",
                    "🌐 Website",
                    "🎥 Book Video",
                    "🖌️ Illustration",
                  ][idx]}
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-3 text-white">
            {["/book-publishing", "/ghost-writing", "/book-promotions", "/stories", "/blogs"].map((href, idx) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block w-full rounded-md px-4 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                {["📚 Book Publishing", "👻 Ghostwriting", "🚀 Book Promotions", "📖 Stories", "📰 Blogs"][idx]}
              </Link>
            ))}
          </div>
        </nav>

        <button
          onClick={() => {
            openModal();
            setMenuOpen(false);
          }}
          className="mt-6 w-full bg-[#c5d1d8] hover:bg-[#cdcdd3] text-black py-3 rounded-md font-bold"
        >
          Get Started
        </button>

        <hr className="my-6 border-white/30" />

        <div className="space-y-3 text-sm">
          <h4 className="text-white font-semibold mb-2">Contact Info</h4>
          <div className="flex items-center gap-2">
            <FaPhoneAlt /> <a href="tel:8556208026">(855) 620-8026</a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:publishdigitally@gmail.com">
              publishdigitally@gmail.com
            </a>
          </div>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt />
            <span>
              11150 W Olympic Blvd
              <br />
              Los Angeles, CA 90064
            </span>
          </div>

          <h4 className="text-white font-semibold mt-4">Social Media Links</h4>
          <div className="flex gap-4 mt-2 text-lg">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, idx) => (
              <a key={idx} href="#" className="hover:rotate-12 transition-transform">
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;


