"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Hero3 from "@/components/hero3";
import Hero10 from "@/components/hero10";
import Hero11 from "@/components/hero11";

const Contact = () => {
  const { openModal } = useModal();
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    fetch("https://formspree.io/f/movwknrn", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
      .then((res) => {
        if (res.ok) {
          form.reset();
          setPhone("");
          setSuccess(true);
        } else {
          alert("Submission failed.");
        }
      })
      .catch(() => alert("Connection error."));
  };

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[url('/assets/images/contact-us.jpeg')] bg-cover bg-center h-[60vh]">
        <div className="absolute inset-0 bg-black/70"></div>

        {/* Centered content container */}
        <div className="relative z-10 flex items-center justify-center h-full">
          <div className="text-center px-4">
            <h1 className="text-5xl font-bold text-blue-300 capitalize drop-shadow-xl animate-fadeIn">
              Contact Us
            </h1>
            <p className="text-white mt-4 max-w-xl mx-auto animate-fadeIn delay-100 text-lg">
              Let’s discuss how our book writing services can help you achieve
              your publishing goals.
            </p>
          </div>
        </div>

      </section>

      {/* Contact Section */}
      <section className="py-20 bg-blue-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
            {/* Contact Info */}
            <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
              <h2 className="text-4xl font-bold text-[#014F86] mb-2">
                Contact Details
              </h2>
              <div className="w-16 h-1 bg-yellow-400 mb-8 rounded-full"></div>

              {/* Phone */}
              <div className="mb-6">
                <h4 className="text-lg text-[#014F86] font-semibold flex items-center gap-2 justify-center lg:justify-start">
                  <MdPhone className="text-xl text-orange-500 group-hover:scale-110 transition" />
                  Phone
                </h4>
                <a
                  href="tel:+12137841841"
                  className="text-gray-700 mt-1 inline-block border-b border-orange-400 pb-1 hover:text-orange-500 hover:scale-[1.03] transition duration-200"
                >
                  +1 (213) 784 1841
                </a>
              </div>

              {/* Email */}
              <div className="mb-6">
                <h4 className="text-lg text-[#014F86] font-semibold flex items-center gap-2 justify-center lg:justify-start">
                  <MdEmail className="text-xl text-purple-500 group-hover:scale-110 transition" />
                  Email
                </h4>
                <a
                  href="mailto:info@publishdigitally.com"
                  className="text-gray-700 mt-1 inline-block border-b border-purple-400 pb-1 hover:text-purple-500 hover:scale-[1.03] transition duration-200"
                >
                  info@publishdigitally.com
                </a>
              </div>

              {/* Address */}
              <div>
                <h4 className="text-lg text-[#014F86] font-semibold flex items-center gap-2 justify-center lg:justify-start">
                  <MdLocationOn className="text-xl text-green-500 group-hover:scale-110 transition" />
                  Address
                </h4>
                <a
                  // href="https://www.google.com/maps?q=5900+Balcones+Drive+STE+100,+Austin,+Texas,+78731"
                  href="/"
                  className="text-gray-700 mt-1 inline-block border-b border-green-400 pb-1 hover:text-green-600 hover:scale-[1.03] transition duration-200"
                >
                  5900 Balcones Drive STE 100, Austin, Texas, 78731
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="w-full lg:w-1/2 bg-blue-50 p-10 rounded-xl shadow-xl border border-gray-200">
              <h2 className="text-3xl font-bold text-[#014F86] mb-2 text-center">
                Message Us
              </h2>
              <div className="w-16 h-1 bg-orange-400 mx-auto mb-8 rounded-full"></div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Split Name */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    required
                    className="flex-1 p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    required
                    className="flex-1 p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
                  />
                </div>

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  required
                  className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
                />

                {/* Phone */}
                <PhoneInput
                  country={"us"}
                  value={phone}
                  onChange={setPhone}
                  inputProps={{
                    name: "phone",
                    required: true,
                  }}
                  inputStyle={{
                    width: "100%",
                    height: "45px",
                    paddingLeft: "48px",
                    borderRadius: "8px",
                    backgroundColor: "#f3f4f6",
                    border: "1px solid #d1d5db",
                    fontSize: "16px",
                  }}
                  buttonStyle={{
                    border: "none",
                    backgroundColor: "#f3f4f6",
                    borderTopLeftRadius: "8px",
                    borderBottomLeftRadius: "8px",
                  }}
                  containerStyle={{ width: "100%" }}
                />

                {/* Message */}
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Enter Message"
                  required
                  className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
                />

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#014F86] to-[#0263b1] hover:from-[#013861] hover:to-[#014F86] text-white py-3 rounded-md transition-all duration-300 font-semibold text-lg"
                >
                  Submit
                </button>
                {success && (
                  <p className="text-green-600 text-sm mt-2 text-center">
                    Form submitted successfully!
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      <Hero3 />
      <Hero10 />
      <Hero11 />
      <ModalForm />
      <Footer />
    </>
  );
};

export default Contact;
