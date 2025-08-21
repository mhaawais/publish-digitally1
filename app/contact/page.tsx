"use client";

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import Hero3 from "@/components/hero3";
import Hero10 from "@/components/hero10";
import Hero11 from "@/components/hero11";
import Link from "next/link";
import Hero12 from "@/components/hero12";

const Contact = () => {
  const { openModal } = useModal();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    setLoading(true);
    setSuccess(false);

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
      .catch(() => alert("Connection error."))
      .finally(() => setLoading(false));
  };

  return (
    <>
      {/* ======================= Hero ======================= */}
      <section className="relative h-[46vh] min-h-[360px] bg-[url('/assets/images/contact-us.jpeg')] bg-cover bg-center overflow-hidden">
        <div className="absolute inset-0 bg-black/70" />
        {/* ambient blobs */}
        <div className="pointer-events-none absolute -top-20 -left-20 h-64 w-64 rounded-full bg-cyan-400/20 blur-3xl animate-float" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-blue-400/20 blur-3xl animate-float-delayed" />

        <div className="relative z-10 flex h-full items-center justify-center px-4 text-center">
          <div>
            <p className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs tracking-widest text-white/80 animate-fade-in">
              WE’RE HERE TO HELP
            </p>
            {/* <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold text-white drop-shadow-xl animate-typewriter"> */}
             <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-xl animate-typewriter">
              Contact <span className="text-cyan-300">Publish Digitally</span>
            </h1>
            {/* <p className="mt-4 max-w-2xl mx-auto text-white/90 text-base sm:text-lg leading-relaxed animate-fade-in-up"> */}
            <p className="mt-5 max-w-3xl mx-auto text-white/90 text-base sm:text-lg leading-relaxed animate-fade-in-up">
              Let’s discuss how our publishing, design, and marketing services
              can help you hit your goals—creatively and confidently.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={openModal}
                className="rounded-xl bg-white text-[#051a2e] px-6 py-3 font-semibold hover:bg-slate-100 transition-[background-color,transform,box-shadow] duration-300 hover:-translate-y-1 hover:shadow-lg animate-slide-up"
              >
                Get Free Plan
              </button>
              <Link
                href="tel:+12137841841"
                className="rounded-xl border border-white/40 px-6 py-3 font-semibold text-white transform-gpu transition-[transform,background-color,box-shadow] duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829] animate-slide-up"
              >
                Call Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= Contact Grid ======================= */}
      <section className="py-20 bg-blue-100 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start gap-14 lg:gap-20">
            {/* Info Column */}
            <div className="w-full lg:w-5/12">
              <h2 className="text-3xl sm:text-4xl font-bold text-[#014F86] animate-slide-in-left">
                Let’s Connect
              </h2>
              <p className="mt-3 text-slate-700 animate-fade-in-up">
                Prefer a quick chat or a detailed plan? Reach out however you like.
                Our team responds within 24 hours, Monday–Friday.
              </p>
              <div className="mt-5 h-[3px] w-20 bg-orange-400 rounded-full animate-fade-in" />

              <div className="mt-8 grid gap-4">
                {/* Phone */}
                <a
                  href="tel:+12137841841"
                  className="group flex items-start gap-3 rounded-xl bg-white p-4 shadow hover:shadow-lg hover-lift hover-glow transition animate-slide-up"
                >
                  <span className="mt-0.5 rounded-lg bg-orange-50 p-2 text-orange-500">
                    <MdPhone className="text-xl" />
                  </span>
                  <span>
                    <div className="text-sm font-bold text-[#014F86]">Phone</div>
                    <div className="text-slate-700 group-hover:text-orange-600 transition-colors">
                      +1 (213) 784 1841
                    </div>
                  </span>
                </a>

                {/* Email */}
                <a
                  href="mailto:info@publishdigitally.com"
                  className="group flex items-start gap-3 rounded-xl bg-white p-4 shadow hover:shadow-lg hover-lift hover-glow transition animate-slide-up"
                  style={{ animationDelay: "80ms" } as any}
                >
                  <span className="mt-0.5 rounded-lg bg-purple-50 p-2 text-purple-600">
                    <MdEmail className="text-xl" />
                  </span>
                  <span>
                    <div className="text-sm font-bold text-[#014F86]">Email</div>
                    <div className="text-slate-700 group-hover:text-purple-600 transition-colors">
                      info@publishdigitally.com
                    </div>
                  </span>
                </a>

                {/* Address */}
                <a
                  href="https://www.google.com/maps?q=5900+Balcones+Drive+STE+100,+Austin,+Texas,+78731"
                  target="_blank"
                  className="group flex items-start gap-3 rounded-xl bg-white p-4 shadow hover:shadow-lg hover-lift hover-glow transition animate-slide-up"
                  style={{ animationDelay: "160ms" } as any}
                >
                  <span className="mt-0.5 rounded-lg bg-green-50 p-2 text-green-600">
                    <MdLocationOn className="text-xl" />
                  </span>
                  <span>
                    <div className="text-sm font-bold text-[#014F86]">Address</div>
                    <div className="text-slate-700 group-hover:text-green-600 transition-colors">
                      5900 Balcones Drive STE 100, Austin, Texas, 78731
                    </div>
                  </span>
                </a>
              </div>

              {/* Office hours + promise */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-xl bg-white p-4 shadow animate-fade-in-up">
                  <div className="text-xs font-bold tracking-widest text-[#014F86]">
                    OFFICE HOURS
                  </div>
                  <div className="mt-2 text-slate-700">
                    Mon–Fri: 9:00 AM – 6:00 PM (CT)
                    <br /> Sat–Sun: By appointment
                  </div>
                </div>
                <div
                  className="rounded-xl bg-white p-4 shadow animate-fade-in-up"
                  style={{ animationDelay: "120ms" } as any}
                >
                  <div className="text-xs font-bold tracking-widest text-[#014F86]">
                    RESPONSE TIME
                  </div>
                  <div className="mt-2 text-slate-700">
                    We reply within 24 hours.
                    <br /> Urgent? Call us directly.
                  </div>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="w-full lg:w-7/12 bg-blue-50/80 backdrop-blur-sm p-8 md:p-10 rounded-2xl shadow-xl border border-blue-100 animate-slide-in-right">
              <h2 className="text-3xl font-extrabold text-[#014F86] text-center">
                Message Us
              </h2>
              <div className="w-16 h-1 bg-orange-400 mx-auto mt-3 mb-8 rounded-full" />

              {/* Success Banner */}
              {success && (
                <div className="mb-6 rounded-xl border border-green-200 bg-green-50 p-3 text-green-700 animate-fade-in">
                  Thanks! Your message has been sent. We’ll get back to you shortly.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name Split */}
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
                  inputProps={{ name: "phone", required: true }}
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
                  placeholder="Tell us about your project. What does success look like for you?"
                  required
                  className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
                />

                {/* Consent */}
                <label className="flex items-center gap-2 text-sm text-slate-700">
                  <input type="checkbox" name="consent" className="accent-[#014F86]" defaultChecked />
                  I agree to be contacted about my inquiry.
                </label>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className={[
                    "w-full rounded-md bg-gradient-to-r from-[#014F86] to-[#0263b1] text-white py-3 font-semibold",
                    "transition-[transform,background-color,box-shadow,opacity] duration-300",
                    "hover:from-[#013861] hover:to-[#014F86] hover:-translate-y-0.5 hover:shadow-lg",
                    loading ? "opacity-80 cursor-not-allowed" : "",
                  ].join(" ")}
                >
                  {loading ? "Sending..." : "Submit"}
                </button>

                {/* Honeypot (spam protection) */}
                <input type="text" name="_gotcha" className="hidden" tabIndex={-1} autoComplete="off" />
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ======================= Map + CTA strip ======================= */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 overflow-hidden rounded-2xl shadow animate-fade-in-up">
              <iframe
                title="Our Location"
                src="https://www.google.com/maps?q=5900+Balcones+Drive+STE+100,+Austin,+Texas,+78731&output=embed"
                className="w-full h-[320px] border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd] text-white p-6 shadow animate-slide-up">
              <h3 className="text-xl font-extrabold">Prefer a direct call?</h3>
              <p className="mt-2 text-white/90">
                Speak with a publishing specialist now or schedule a free discovery call.
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <a
                  href="tel:+12137841841"
                  className="flex-1 rounded-xl bg-white text-[#051a2e] px-5 py-3 font-semibold text-center transition-[transform,box-shadow] duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                >
                  Call +1 (213) 784 1841
                </a>
                <button
                  onClick={openModal}
                  className="flex-1 rounded-xl border border-white/40 px-5 py-3 font-semibold text-center transition-[transform,box-shadow,background-color] duration-300 hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-lg"
                >
                  Book Free Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Existing hero components & modal */}
      <Hero3 />
      <Hero10 />
      <Hero11 />
      <Hero12 />
      <ModalForm />
    </>
  );
};

export default Contact;

