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
    const handleClickOutsideMenu = (event: MouseEvent) => {
      if (menuOpen && !(event.target as HTMLElement).closest(".mobile-menu")) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutsideMenu);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [menuOpen]);

  return (
    <header className="bg-[#052540] text-white w-full fixed top-0 left-0 z-50 shadow-md">
      {/* <header className="bg-[#052540] text-white w-full fixed lg:static top-0 left-0 z-50 shadow-md"> */}

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
                className="flex items-center gap-1 hover:text-gray-300 text-base font-semibold group"
              >
                Services
                <span className="block h-[2px] w-0 bg-white transition-all duration-300 group-hover:w-full"></span>
                <FiChevronDown
                  className={`transition-transform ${
                    servicesOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {servicesOpen && (
                <div className="absolute top-full mt-3 bg-white text-[#052540] rounded-lg shadow-lg p-4 w-72 z-50 grid grid-cols-2 gap-3 text-sm animate-fadeIn">
                  <Link href="/book-editing">📘 Book Editing</Link>
                  <Link href="/audio-book">🎧 Audio Book</Link>
                  <Link href="/cover-design">🎨 Cover Design</Link>
                  <Link href="/author-website">🌐 Website</Link>
                  <Link href="/book-video">🎥 Book Video</Link>
                  <Link href="/illustration">🖌️ Illustration</Link>
                </div>
              )}
            </div>
            <Link
              href="/book-publishing"
              className="relative text-base font-semibold hover:text-gray-300 group"
            >
              Book Publishing
              {/* <span className="block h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full"></span> */}
              <span className="block h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full origin-center mx-auto"></span>
            </Link>

            <Link
              href="/ghostwriting"
              className="relative text-base font-semibold hover:text-gray-300 group"
            >
              Ghostwriting
              <span className="block h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full origin-center mx-auto"></span>
            </Link>

            <Link
              href="/book-promotions"
              className="relative text-base font-semibold hover:text-gray-300 group"
            >
              Book Promotions
              <span className="block h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full origin-center mx-auto"></span>
            </Link>

            <Link
              href="/about"
              className="relative text-base font-semibold hover:text-gray-300 group"
            >
              About-US
              <span className="block h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full origin-center mx-auto"></span>
            </Link>

            <Link
              href="/contact"
              className="relative text-base font-semibold hover:text-gray-300 group"
            >
              Contact-US
              <span className="block h-[2px] w-0 bg-white transition-all duration-500 group-hover:w-full origin-center mx-auto"></span>
            </Link>
          </nav>

          <button
            onClick={openModal}
            className="bg-[#c5d1d8] hover:bg-[#cdcdd3] text-black px-6 py-4 rounded-lg shadow hover:shadow-lg transition-all font-bold"
          >
            Get Started
          </button>
        </div>

        <button
          className="lg:hidden text-2xl"
          onClick={() => setMenuOpen(true)}
        >
          <FaBars />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 right-0 w-4/5 max-w-md h-full bg-[#052540] text-white p-6 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out mobile-menu ${
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
              <Link
                href="/book-editing"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                📘 Book Editing
              </Link>
              <Link
                href="/audio-book"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                🎧 Audio Book
              </Link>
              <Link
                href="/cover-design"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                🎨 Cover Design
              </Link>
              <Link
                href="/author-website"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                🌐 Website
              </Link>
              <Link
                href="/book-video"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                🎥 Book Video
              </Link>
              <Link
                href="/illustration"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 bg-white/5 hover:bg-white/10 transition"
              >
                🖌️ Illustration
              </Link>
            </div>
          </div>

          <div className="space-y-3 text-white">
            <Link
              href="/book-publishing"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-md px-4 py-2 bg-white/5 hover:bg-white/10 transition"
            >
              📚 Book Publishing
            </Link>
            <Link
              href="/ghostwriting"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-md px-4 py-2 bg-white/5 hover:bg-white/10 transition"
            >
              👻 Ghostwriting
            </Link>
            <Link
              href="/book-promotions"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-md px-4 py-2 bg-white/5 hover:bg-white/10 transition"
            >
              🚀 Book Promotions
            </Link>
            <Link
              href="/about"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-md px-4 py-2 bg-white/5 hover:bg-white/10 transition"
            >
              📖 About-US
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="block w-full rounded-md px-4 py-2 bg-white/5 hover:bg-white/10 transition"
            >
              📰 Contact-US
            </Link>
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
            <FaPhoneAlt /> <a href="tel:+12137841841">+1 (213) 784 1841</a>
          </div>
          <div className="flex items-center gap-2">
            <FaEnvelope />
            <a href="mailto:info@publishdigitally.com">
              info@publishdigitally.com
            </a>
          </div>
          <div className="flex items-start gap-2">
            <FaMapMarkerAlt />
            <span>
              5900 Balcones Drive STE 100,
              <br />
              Austin, Texas, 78731
            </span>
          </div>

          <h4 className="text-white font-semibold mt-4">Social Media Links</h4>

          <div className="flex gap-4 mt-2 text-lg">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform"
            >
              <FaTwitter />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:rotate-12 transition-transform"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
