"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-[#052540] text-white py-10 px-6 md:px-12">
      <div className="text-center">
        <Link href="/">
          <Image src="/assets/logo/Author-Logo1.png" alt="Logo" width={120} height={40} className="mx-auto cursor-pointer" />
        </Link>
        <p className="mt-4 text-sm max-w-2xl mx-auto">
          Publish Digitally is a premier book marketing and publishing service committed to helping authors build global recognition. We specialize in powerful book presentation to ensure your book captures the spotlight. From visibility to virality we’re here to help you turn your manuscript into a bestseller.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 gap-4 mt-10 text-sm text-center">
        <Link href="/">Home</Link>
        <Link href="/ghostwriting">Ghostwriting</Link>
        <Link href="/book-promotion">Book Promotion</Link>
        <Link href="/book-publishing">Book Publishing</Link>
        <Link href="/book-editing">Book Editing</Link>
        <Link href="/author-website">Author Website</Link>
        <Link href="/audio-book">Audio Book</Link>
        <Link href="/book-video">Book Video</Link>
        <Link href="/book-cover-design">Book Cover Design</Link>
        <Link href="/illustration">Illustration</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/terms-conditions">Terms Conditions</Link>
        <Link href="/privacy-policy">Privacy Policy</Link>
      </div>

      <div className="mt-10 text-center space-y-2 text-sm">
        <p className="font-semibold">Call us now</p>
        <a href="tel:(855)620-8026" className="block">(855) 620-8026</a>
        <p className="font-semibold">Mail us at</p>
        <a href="mailto:publishdigitally@gmail.com" className="block">publishdigitally@gmail.com</a>
        <p className="font-semibold">Find us at</p>
        <address className="not-italic">11150 W Olympic Blvd, Los Angeles, CA 90064</address>
      </div>

      <div className="text-center text-xs text-white/60 mt-8">
        © {new Date().getFullYear()} Publish Digitally. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;