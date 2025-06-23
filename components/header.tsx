"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  FaBars, FaTimes, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,
  FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn
} from 'react-icons/fa';
import { FiChevronDown } from 'react-icons/fi';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !(servicesRef.current as HTMLElement).contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-[#052540] text-white w-full fixed top-0 left-0 z-50">
      <div className="flex items-center justify-between px-4 py-1 lg:px-12 lg:py-1.5 min-h-[42px]">
        <Link href="/">
          <Image src="/assets/logo/Author-Logo1.png" alt="Logo" width={100} height={28} className="cursor-pointer" />
        </Link>
        <button className="lg:hidden text-2xl" onClick={() => setMenuOpen(true)}>
          <FaBars />
        </button>
        <nav className="hidden lg:flex gap-6 items-center text-sm font-medium">
          <div className="relative" ref={servicesRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1 hover:text-gray-300"
            >
              Services <FiChevronDown className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
            </button>
            {servicesOpen && (
              <div className="absolute top-full mt-2 bg-[#052540] border border-white/10 shadow-lg grid grid-cols-2 gap-2 p-4 text-xs z-50 w-64">
                <div>📘 Book Editing</div>
                <div>🎧 Audio Book</div>
                <div>🎨 Book Cover Design</div>
                <div>🌐 Author Website</div>
                <div>🎥 Book Video</div>
                <div>🖌️ Illustration</div>
              </div>
            )}
          </div>
          <div className="hover:text-gray-300 cursor-pointer">Book Publishing</div>
          <div className="hover:text-gray-300 cursor-pointer">Ghostwriting</div>
          <div className="hover:text-gray-300 cursor-pointer">Book Promotions</div>
          <div className="hover:text-gray-300 cursor-pointer">Stories</div>
          <div className="hover:text-gray-300 cursor-pointer">Blogs</div>
        </nav>
      </div>

      {menuOpen && (
        <div className="fixed top-0 right-0 w-4/5 max-w-md h-full bg-[#052540] text-white p-6 overflow-y-auto z-50 transition-transform">
          <div className="flex items-center justify-between mb-6">
            <Link href="/">
              <Image src="/assets/logo/Author-Logo1.png" alt="Logo" width={100} height={28} className="cursor-pointer" />
            </Link>
            <button onClick={() => setMenuOpen(false)} className="text-2xl">
              <FaTimes />
            </button>
          </div>

          <nav className="space-y-4">
            <div>
              <div className="flex items-center justify-between cursor-pointer">
                <span className="font-semibold">Services</span>
                <FiChevronDown className="transform rotate-180 text-xl" />
              </div>
              <div className="grid grid-cols-2 gap-2 mt-2 ml-4 text-sm">
                <div>📘 Book Editing</div>
                <div>🎧 Audio Book</div>
                <div>🎨 Book Cover Design</div>
                <div>🌐 Author Website</div>
                <div>🎥 Book Video</div>
                <div>🖌️ Illustration</div>
              </div>
            </div>
            <div>Book Publishing</div>
            <div>Ghostwriting</div>
            <div>Book Promotions</div>
            <div>Stories</div>
            <div>Blogs</div>
          </nav>

          <hr className="my-6 border-white/30" />

          <div className="space-y-2 text-sm">
            <h4 className="text-white font-semibold mb-2">Contact Info</h4>
            <div className="flex items-center gap-2">
              <FaPhoneAlt /> <a href="tel:8556208026">(855) 620-8026</a>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope /> <a href="mailto:publishdigitally@gmail.com">publishdigitally@gmail.com</a>
            </div>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt />
              <span>11150 W Olympic Blvd<br />Los Angeles, CA 90064</span>
            </div>

            <h4 className="text-white font-semibold mt-4">Social Media Links</h4>
            <div className="flex gap-4 mt-2 text-lg">
              <a href="#" className="hover:rotate-12 transition-transform"><FaFacebookF /></a>
              <a href="#" className="hover:rotate-12 transition-transform"><FaInstagram /></a>
              <a href="#" className="hover:rotate-12 transition-transform"><FaTwitter /></a>
              <a href="#" className="hover:rotate-12 transition-transform"><FaLinkedinIn /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;