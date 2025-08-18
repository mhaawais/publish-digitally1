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

      {/* ======================= FAQs ======================= */}
      {/* <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#052540]">
              Frequently Asked Questions
            </h2>
            <p className="mt-3 text-slate-700">
              Quick answers to common questions. Need more details? Just ask.
            </p>
            <div className="mt-4 h-[3px] w-20 bg-blue-600 rounded-full mx-auto" />
          </div>

          <div className="mt-10 space-y-3">
            {[
              {
                q: "How soon will I hear back after I submit the form?",
                a: "We respond within 24 hours on business days. If it’s urgent, call us directly for the fastest support.",
              },
              {
                q: "Can you help if I only have an idea (not a full draft)?",
                a: "Absolutely. We’ll help articulate your goals, build an outline, and match you with a ghostwriter or editor to bring it to life.",
              },
              {
                q: "Do you work with my specific genre?",
                a: "Yes. We match you with specialists across fiction, nonfiction, business, children’s books, and more.",
              },
              {
                q: "How does pricing work?",
                a: "Pricing depends on scope and complexity. Share your goals and budget; we’ll tailor a plan that fits.",
              },
            ].map((item, i) => (
              <details
                key={item.q}
                className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition animate-fade-in-up"
                style={{ animationDelay: `${i * 80}ms` } as any}
              >
                <summary className="marker:content-[''] cursor-pointer list-none">
                  <div className="flex items-center justify-between">
                    <h4 className="text-left text-lg font-semibold text-[#052540]">
                      {item.q}
                    </h4>
                    <span className="ml-3 inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-transform group-open:rotate-45">
                      +
                    </span>
                  </div>
                </summary>
                <p className="mt-3 text-slate-700">{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section> */}

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












// "use client";

// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { useModal } from "@/app/context/ModalContext";
// import ModalForm from "@/components/ModalForm";
// import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
// import Hero3 from "@/components/hero3";
// import Hero10 from "@/components/hero10";
// import Hero11 from "@/components/hero11";

// const Contact = () => {
//   const { openModal } = useModal();
//   const [phone, setPhone] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;

//     fetch("https://formspree.io/f/movwknrn", {
//       method: "POST",
//       headers: { Accept: "application/json" },
//       body: new FormData(form),
//     })
//       .then((res) => {
//         if (res.ok) {
//           form.reset();
//           setPhone("");
//           setSuccess(true);
//         } else {
//           alert("Submission failed.");
//         }
//       })
//       .catch(() => alert("Connection error."));
//   };

//   return (
//     <>

//       {/* Hero Section */}
//       <section className="relative bg-[url('/assets/images/contact-us.jpeg')] bg-cover bg-center h-[40vh]">
//         <div className="absolute inset-0 bg-black/70"></div>

//         {/* Centered content container */}
//         <div className="relative z-10 flex items-center justify-center h-full">
//           <div className="text-center px-4">
//             <h1 className="text-5xl font-bold text-blue-300 capitalize drop-shadow-xl">
//               Contact Us
//             </h1>
//             <p className="text-white mt-4 max-w-xl mx-auto animate-slide-up delay-100 text-lg animate-fade-in-up">
//               Let’s discuss how our book writing services can help you achieve
//               your publishing goals.
//             </p>
//           </div>
//         </div>

//       </section>

//       {/* Contact Section */}
//       <section className="py-20 bg-blue-100 relative z-10">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-24">
//             {/* Contact Info */}
//             <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
//               <h2 className="text-4xl font-bold text-[#014F86] mb-2">
//                 Contact Details
//               </h2>
//               <div className="w-16 h-1 bg-yellow-400 mb-8 rounded-full"></div>

//               {/* Phone */}
//               <div className="mb-6">
//                 <h4 className="text-lg text-[#014F86] font-semibold flex items-center gap-2 justify-center lg:justify-start">
//                   <MdPhone className="text-xl text-orange-500 group-hover:scale-110 transition" />
//                   Phone
//                 </h4>
//                 <a
//                   href="tel:+12137841841"
//                   className="text-gray-700 mt-1 inline-block border-b border-orange-400 pb-1 hover:text-orange-500 hover:scale-[1.03] transition duration-200"
//                 >
//                   +1 (213) 784 1841
//                 </a>
//               </div>

//               {/* Email */}
//               <div className="mb-6">
//                 <h4 className="text-lg text-[#014F86] font-semibold flex items-center gap-2 justify-center lg:justify-start">
//                   <MdEmail className="text-xl text-purple-500 group-hover:scale-110 transition" />
//                   Email
//                 </h4>
//                 <a
//                   href="mailto:info@publishdigitally.com"
//                   className="text-gray-700 mt-1 inline-block border-b border-purple-400 pb-1 hover:text-purple-500 hover:scale-[1.03] transition duration-200"
//                 >
//                   info@publishdigitally.com
//                 </a>
//               </div>

//               {/* Address */}
//               <div>
//                 <h4 className="text-lg text-[#014F86] font-semibold flex items-center gap-2 justify-center lg:justify-start">
//                   <MdLocationOn className="text-xl text-green-500 group-hover:scale-110 transition" />
//                   Address
//                 </h4>
//                 <a
//                   // href="https://www.google.com/maps?q=5900+Balcones+Drive+STE+100,+Austin,+Texas,+78731"
//                   href="/"
//                   className="text-gray-700 mt-1 inline-block border-b border-green-400 pb-1 hover:text-green-600 hover:scale-[1.03] transition duration-200"
//                 >
//                   5900 Balcones Drive STE 100, Austin, Texas, 78731
//                 </a>
//               </div>
//             </div>

//             {/* Contact Form */}
//             <div className="w-full lg:w-1/2 bg-blue-50 p-10 rounded-xl shadow-xl border border-gray-200">
//               <h2 className="text-3xl font-bold text-[#014F86] mb-2 text-center">
//                 Message Us
//               </h2>
//               <div className="w-16 h-1 bg-orange-400 mx-auto mb-8 rounded-full"></div>

//               <form onSubmit={handleSubmit} className="space-y-5">
//                 {/* Split Name */}
//                 <div className="flex flex-col sm:flex-row gap-4">
//                   <input
//                     type="text"
//                     name="firstName"
//                     placeholder="First Name"
//                     required
//                     className="flex-1 p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
//                   />
//                   <input
//                     type="text"
//                     name="lastName"
//                     placeholder="Last Name"
//                     required
//                     className="flex-1 p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
//                   />
//                 </div>

//                 {/* Email */}
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email address"
//                   required
//                   className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
//                 />

//                 {/* Phone */}
//                 <PhoneInput
//                   country={"us"}
//                   value={phone}
//                   onChange={setPhone}
//                   inputProps={{
//                     name: "phone",
//                     required: true,
//                   }}
//                   inputStyle={{
//                     width: "100%",
//                     height: "45px",
//                     paddingLeft: "48px",
//                     borderRadius: "8px",
//                     backgroundColor: "#f3f4f6",
//                     border: "1px solid #d1d5db",
//                     fontSize: "16px",
//                   }}
//                   buttonStyle={{
//                     border: "none",
//                     backgroundColor: "#f3f4f6",
//                     borderTopLeftRadius: "8px",
//                     borderBottomLeftRadius: "8px",
//                   }}
//                   containerStyle={{ width: "100%" }}
//                 />

//                 {/* Message */}
//                 <textarea
//                   name="message"
//                   rows={4}
//                   placeholder="Enter Message"
//                   required
//                   className="w-full p-3 rounded-md bg-gray-100 border border-gray-300 placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-[#014F86]"
//                 />

//                 {/* Submit */}
//                 <button
//                   type="submit"
//                   className="w-full bg-gradient-to-r from-[#014F86] to-[#0263b1] hover:from-[#013861] hover:to-[#014F86] text-white py-3 rounded-md transition-all duration-300 font-semibold text-lg"
//                 >
//                   Submit
//                 </button>
//                 {success && (
//                   <p className="text-green-600 text-sm mt-2 text-center">
//                     Form submitted successfully!
//                   </p>
//                 )}
//               </form>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Hero3 />
//       <Hero10 />
//       <Hero11 />
//       <ModalForm />
//     </>
//   );
// };

// export default Contact;
