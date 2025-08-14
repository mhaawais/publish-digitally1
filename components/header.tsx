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

function NavItem({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="flex items-center gap-2 rounded-lg px-3 py-2 transition
                 hover:bg-slate-100 hover:text-[#0a6ebd] focus-visible:outline-none
                 focus-visible:ring-2 focus-visible:ring-cyan-300"
      role="menuitem"
    >
      {children}
    </Link>
  );
}

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  // const servicesRef = useRef(null);
  const servicesRef = useRef<HTMLDivElement | null>(null);
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

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setServicesOpen(false);
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("mousedown", handleClickOutsideMenu);
    document.addEventListener("keydown", handleEsc);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("mousedown", handleClickOutsideMenu);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [menuOpen]);

  return (
    <header id="site-header" className="bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd] text-white w-full fixed top-0 left-0 z-50 shadow-md">
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
                onClick={() => setServicesOpen((o) => !o)}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                className="group inline-flex items-center gap-2 text-base font-semibold tracking-wide
               text-white/90 hover:text-white focus-visible:outline-none
               focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]"
              >
                <span className="relative">
                  Services
                  {/* underline grow on hover */}
                  <span className="absolute -bottom-1 left-0 block h-[2px] w-0 bg-white/80 transition-all duration-500 group-hover:w-full" />
                </span>

                <FiChevronDown
                  className={`transition-transform duration-300 ${
                    servicesOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>

              {/* Dropdown (kept mounted for smooth close). Animates opacity + translate + scaleY */}
              <div
                id="services-menu"
                role="menu"
                className={[
                  "absolute top-full mt-3 z-50 w-80 origin-top transform-gpu",
                  "rounded-xl border border-white/60 bg-[#c2dee9] backdrop-blur-md",
                  "shadow-2xl ring-1 ring-black/5 p-4 grid grid-cols-2 gap-2 text-sm font-medium text-[#052540]",
                  "transition-[opacity,transform] duration-500 ease-out",
                  servicesOpen
                    ? "opacity-100 translate-y-0 scale-y-100 pointer-events-auto"
                    : "opacity-0 -translate-y-2 scale-y-95 pointer-events-none",
                  // triangle pointer
                  "before:content-[''] before:absolute before:-top-2 before:left-8 before:h-4 before:w-4 before:rotate-45",
                  "before:bg-white/90 before:backdrop-blur-md before:border-l before:border-t before:border-white/60",
                ].join(" ")}
              >
                <NavItem href="/book-editing">📘 Book Editing</NavItem>
                <NavItem href="/audio-book">🎧 Audio Book</NavItem>
                <NavItem href="/cover-design">🎨 Cover Design</NavItem>
                <NavItem href="/author-website">🌐 Website</NavItem>
                <NavItem href="/book-video">🎥 Book Video</NavItem>
                <NavItem href="/illustration">🖌️ Illustration</NavItem>
              </div>
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

          {/* <button
            onClick={openModal}
            className="bg-[#c5d1d8] hover:bg-[#cdcdd3] text-black px-6 py-4 rounded-lg shadow hover:shadow-lg transition-all font-bold"
          >
            Get Started
          </button> */}

          <button
            type="button"
            onClick={openModal}
            className="
    group relative inline-flex items-center justify-center
    rounded-2xl px-6 py-3.5 font-semibold tracking-wide
    text-white overflow-hidden
    bg-gradient-to-br from-[#0b6b6b] via-[#0aa4a6] to-[#12c2c9]
    shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]
    transition-[transform,box-shadow] duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(18,194,201,.45)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]
  "
            aria-label="Get Started"
          >
            {/* ambient depth */}
            <span
              className="
      pointer-events-none absolute inset-[-2px] rounded-2xl
      bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
          radial-gradient(140px_90px_at_80%_30%,rgba(255,255,255,.18),transparent)]
    "
            />

            {/* slow gradient sweep on hover */}
            <span
              className="
      absolute inset-0 -translate-x-full group-hover:translate-x-0
      transition-transform duration-[1200ms] ease-out
      bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-90
    "
            />

            {/* glossy shine pass */}
            <span
              className="
      pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
      -skew-x-12 bg-white/18
      translate-x-[-120%] group-hover:translate-x-[320%]
      transition-transform duration-[1400ms] ease-out blur-[2px]
    "
            />

            {/* content with arrow visible initially */}
            <span className="relative z-10 flex items-center gap-2">
              <span>Get Started</span>
              <svg
                className="h-5 w-5 translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="M13 5l7 7-7 7" />
              </svg>
            </span>
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
        className={`fixed top-0 right-0 w-4/5 max-w-md h-full bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd] text-white p-6 overflow-y-auto z-50 transform transition-transform duration-300 ease-in-out mobile-menu ${
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

        {/* <button
          onClick={() => {
            openModal();
            setMenuOpen(false);
          }}
          className="mt-6 w-full bg-[#c5d1d8] hover:bg-[#cdcdd3] text-black py-3 rounded-md font-bold"
        >
          Get Started
        </button> */}

        <button
          type="button"
          onClick={() => {
            openModal();
            setMenuOpen(false);
          }}
          className="
    group relative mt-6 w-full inline-flex items-center justify-center
    overflow-hidden rounded-xl px-6 py-3 font-semibold tracking-wide
    text-white
    bg-gradient-to-br from-[#0b6b6b] via-[#0aa4a6] to-[#12c2c9]
    shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]
    transition-[transform,box-shadow] duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(18,194,201,.45)]
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300
    focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]
  "
          aria-label="Get Started"
        >
          {/* ambient depth */}
          <span
            className="
      pointer-events-none absolute inset-[-2px] rounded-xl
      bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
          radial-gradient(140px_90px_at_80%_30%,rgba(255,255,255,.18),transparent)]
    "
          />

          {/* slow gradient sweep on hover */}
          <span
            className="
      absolute inset-0 -translate-x-full group-hover:translate-x-0
      transition-transform duration-[1200ms] ease-out
      bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-90
    "
          />

          {/* glossy shine pass */}
          <span
            className="
      pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
      -skew-x-12 bg-white/18
      translate-x-[-120%] group-hover:translate-x-[320%]
      transition-transform duration-[1400ms] ease-out blur-[2px]
    "
          />

          {/* content with arrow visible initially */}
          <span className="relative z-10 flex items-center gap-2">
            <span>Get Started</span>
            <svg
              className="h-5 w-5 translate-x-0 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </span>
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
