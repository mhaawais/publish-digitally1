"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";



const Terms = () => {
  const { openModal } = useModal();

  return (
    <div>
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
            <button
              onClick={openModal}
              className="bg-yellow-400 hover:bg-yellow-500 text-[#014F86] font-bold font-mono px-6 py-3 rounded shadow-md transition-all"
            >
              Get Started
            </button>
          </div>
        </div>
      </section>

      <ModalForm />
      <Footer />
    </div>
  );
};

export default Terms;
