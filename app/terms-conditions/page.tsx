"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";

const Terms = () => {
  const { openModal } = useModal();

  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[url('/assets/images/terms.jpeg')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white drop-shadow-md font-serif">
            Terms and Conditions
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-gray-800 space-y-12 font-sans leading-relaxed text-lg">
          {[
            {
              title: "Terms and Conditions",
              text: "Placing an order, i.e., making a payment, constitutes your acknowledgment and acceptance of the following terms and conditions.",
            },
            {
              title: "Copyright & Personal Use",
              text: "All of the Products you receive are 100% original. You own all copyrights to them. You must not use these materials unlawfully. Violations may result in legal consequences.",
            },
            {
              title: "No Plagiarism",
              text: "We do not support plagiarism in any form. The company is not responsible for misuse of the content provided. The client is fully liable for any disciplinary action arising from misuse, including plagiarism, litigation, suspension, or academic penalties.",
            },
            {
              title: "Image Policy",
              text: "We do not use copyrighted images unless created in-house. We provide royalty-free image links. Clients may need to license images independently if copyrighted.",
            },
          ].map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold text-[#014F86] font-serif">
                {section.title}
              </h3>
              <div className="w-16 h-1 bg-yellow-400 my-3 rounded-full"></div>
              <p>{section.text}</p>
            </div>
          ))}

          <div>
            <h3 className="text-2xl font-semibold text-[#014F86] font-serif">
              Refund Policy
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3 rounded-full"></div>
            <p className="mb-2">
              Refunds are available under certain conditions:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Not valid for custom/personalized packages.</li>
              <li>Refunds void after 2 weeks of no response.</li>
              <li>
                Cancellation requests or change of mind are not refundable.
              </li>
              <li>Refund void after multiple rounds of revisions.</li>
              <li>Other company policies may apply.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#014F86] font-serif">
              Revision Limitations
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3 rounded-full"></div>
            <p>
              Revisions are made to correct errors. Additional requests after
              final approval may incur extra charges.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#014F86] font-serif">
              Privacy Policy
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3 rounded-full"></div>
            <p>
              We do not share your mobile or personal data with third parties.
              Opt-in data remains secure and confidential.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#014F86] font-serif">
              Amendments
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3 rounded-full"></div>
            <p>
              We reserve the right to amend these terms at any time. Please
              review this page periodically for updates.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#014F86] font-serif">
              Contacting Us
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3 rounded-full"></div>
            <p>
              If you have questions, email us at{" "}
              <a
                href="mailto:info@publishdigitally.com"
                className="text-blue-600 underline hover:text-blue-800 transition"
              >
                info@publishdigitally.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-[#014F86] font-serif">
              Disclaimer
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3 rounded-full"></div>
            <p>
              All logos and trademarks belong to their respective owners. Their
              inclusion does not imply any affiliation. This website provides
              general info and is not legal advice.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#014F86] py-12 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold font-serif">
              Reach us for an In-depth Consultation!
            </h2>
            <p className="mt-2 max-w-2xl mx-auto font-sans">
              For All-Inclusive Book Writing Assistance, Get in Touch Now!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* <button
              onClick={openModal}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#014F86] font-bold font-mono px-6 py-3 rounded shadow-md transition-all"
            >
              Get Started
            </button> */}

            <button
              aria-label="Open get started modal"
              onClick={openModal}
              className="
    group relative inline-flex items-center justify-center
    overflow-hidden rounded-2xl px-10 py-3.5
    font-semibold tracking-wide text-white
    bg-gradient-to-r from-[#0a6ebd] via-[#2aa8ff] to-[#00d4ff]
    shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]
    transition-[transform,box-shadow] duration-300 ease-out
    hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)]
    active:translate-y-0
    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]
    motion-reduce:transition-none motion-reduce:hover:transform-none
  "
            >
              {/* ambient glow (subtle, always on) */}
              <span
                className="
      pointer-events-none absolute inset-[-2px] rounded-2xl
      bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
          radial-gradient(140px_90px_at_80%_30%,rgba(42,168,255,.16),transparent)]
    "
              />

              {/* animated border glow on hover */}
              <span
                className="
      pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10
      group-hover:ring-cyan-200/40 transition-[box-shadow,opacity] duration-300
      shadow-[inset_0_0_0_0_rgba(0,0,0,0)] group-hover:shadow-[inset_0_0_18px_rgba(42,168,255,0.25)]
    "
              />

              {/* slow sliding gradient overlay (left → right) */}
              <span
                className="
      absolute inset-0 -translate-x-full group-hover:translate-x-4
      transition-transform duration-1000 ease-out
      bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd]
      opacity-90
    "
              />

              {/* glossy shine sweep */}
              <span
                className="
      pointer-events-none absolute -left-1/3 top-0 h-full w-1/3
      -skew-x-12 bg-white/18
      translate-x-[-120%] group-hover:translate-x-[320%]
      transition-transform duration-[2000ms] ease-out
      blur-[2px]
    "
              />

              {/* default text */}
              <span className="relative z-10 transition-all duration-200 group-hover:opacity-0">
                Get Started
              </span>

              {/* hover text */}
              <span
                className="
      absolute inset-0 z-10 flex items-center justify-center
      opacity-0 group-hover:opacity-100
      transition-opacity duration-200
    "
              >
                Get A Quote
              </span>
            </button>
          </div>
        </div>
      </section>

      <ModalForm />
      <Footer />
    </>
  );
};

export default Terms;
