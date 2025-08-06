"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import React from "react";
import { useModal } from "@/app/context/ModalContext";
import ModalForm from "@/components/ModalForm";



const Privacy = () => {
  const { openModal } = useModal();

  return (
    <div>
      <Header />

      {/* Hero Section */}
      <section className="relative bg-[url('/assets/images/privacy.jpeg')] bg-cover bg-center h-[50vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl font-bold text-white drop-shadow-md font-serif">
            Privacy Policy
          </h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 text-gray-800 space-y-10 leading-relaxed font-serif">
          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              Calling Terms and Conditions
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes. Text messaging
              originator opt-in data and consent will not be shared with any
              third parties.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              SMS Terms and Conditions
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              <strong>Product Description:</strong> By providing your mobile
              phone number, you consent to receive SMS messages from Publish
              Digitally related to follow-ups with our clients.
            </p>
            <p className="text-sm lg:text-lg">
              <strong>Message Frequency:</strong> Message frequency may vary
              depending on your interaction with us.
            </p>
            <p className="text-sm lg:text-lg">
              <strong>Message and Data Rates:</strong> Standard message and data
              rates may apply, depending on your mobile carrier.
            </p>
            <p className="text-sm lg:text-lg">
              <strong>Opting Out:</strong> You may opt out at any time by
              replying “STOP.”
            </p>
            <p className="text-sm lg:text-lg">
              <strong>Help and Support:</strong> Reply “HELP” or contact our
              support team at{" "}
              <a href="tel:+12133010131" className="text-blue-600">
                +1-213-301-0131
              </a>
              .
            </p>
            <p className="text-sm lg:text-lg">
              <strong>Privacy Policy:</strong> Your phone number is handled in
              accordance with this Privacy Policy and never shared for
              solicitation purposes.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">Introduction</h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              At Publish Digitally, accessible from
              https://publishdigitally.com, your privacy is a top priority. This
              Privacy Policy outlines how we collect and use your data.
            </p>
            <p className="text-sm lg:text-lg">
              It applies only to our online activities and is valid for visitors
              to our website with regard to the information shared or collected.
              It does not apply to offline or other channels.
            </p>
            <p className="text-sm lg:text-lg">
              If you have questions, feel free to contact us at{" "}
              <a
                href="mailto:info@publishdigitally.com"
                className="text-blue-600 underline"
              >
                info@publishdigitally.com
              </a>
              .
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">Consent</h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              By using our website, you consent to this Privacy Policy.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              Information We Collect
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              We may collect your name, email, phone number, and any other info
              you provide when contacting us or registering for an account.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              How We Use Your Data
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <ul className="list-disc list-inside space-y-2 text-sm lg:text-lg">
              <li>Improve, personalize, and expand our website</li>
              <li>Send you emails and updates</li>
              <li>Understand how you use our services</li>
              <li>Provide customer support</li>
              <li>Detect and prevent fraud</li>
            </ul>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              Your Privacy Rights
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              You have the right to access, correct, delete, and restrict the
              use of your personal data. You can also opt out of marketing
              communications.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              Cookies and Log Files
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              We use cookies to store preferences and log files to monitor site
              activity. This helps us enhance user experience.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              Third-Party Services
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              Our website may link to external services. We are not responsible
              for their privacy practices. Please consult their respective
              policies.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">
              Children’s Privacy
            </h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              We do not knowingly collect data from children under 13. If you
              believe your child has provided information, please contact us
              immediately for removal.
            </p>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-[#014F86]">Disclaimer</h3>
            <div className="w-16 h-1 bg-yellow-400 my-3"></div>
            <p className="text-sm lg:text-lg">
              All logos and trademarks belong to their respective owners. Their
              inclusion does not imply affiliation. This site provides general
              information, not legal or financial advice.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="bg-[#014F86] py-12 relative overflow-hidden">
        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center text-white mb-8">
            <h2 className="text-3xl font-bold">
              Have Questions About Our Policy?
            </h2>
            <p className="mt-2 max-w-2xl mx-auto text-sm lg:text-lg">
              Contact us any time for clarification or support. We're here to
              help.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={openModal}
              className="bg-gray-500 text-white px-6 py-3 rounded font-semibold shadow hover:bg-gray-600 transition"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>

      <ModalForm />
      <Footer />
    </div>
  );
};

export default Privacy;
