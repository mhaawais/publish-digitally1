"use client";

import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Modal from "react-modal";
import { useModal } from "@/app/context/ModalContext";

const ModalForm = () => {
  const { isModalOpen, closeModal } = useModal();
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    Modal.setAppElement("body"); // For screen readers
  }, []);

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
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      className="w-full max-w-lg bg-white rounded-lg p-6 md:p-8 shadow-xl mx-4 sm:mx-auto mt-24 focus:outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-y-auto"
    >
      <div className="w-full">
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl md:text-2xl font-bold text-[#012A4A]">
            Start Your Writing Journey
          </h2>
          <button
            onClick={closeModal}
            className="text-red-600 text-2xl font-bold leading-none"
          >
            &times;
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-[#012A4A]"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-[#012A4A]"
          />

          {/* Phone Number Field */}
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={setPhone}
            inputProps={{
              name: "phone",
              required: true,
              autoFocus: false,
            }}
            inputStyle={{
              width: "100%",
              height: "45px",
              paddingLeft: "48px",
              borderRadius: "8px",
              backgroundColor: "#dbeafe", // Tailwind blue-100
              border: "1px solid #ccc",
              fontSize: "16px",
            }}
            buttonStyle={{
              border: "none",
              backgroundColor: "#dbeafe",
              borderTopLeftRadius: "8px",
              borderBottomLeftRadius: "8px",
            }}
            containerStyle={{ width: "100%" }}
          />

          <textarea
            name="message"
            rows={4}
            placeholder="Enter Brief"
            required
            className="w-full p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-[#012A4A]"
          />

          <button
            type="submit"
            className="w-full bg-[#052540] hover:bg-[#03080c] text-white py-3 rounded-md transition-all duration-300"
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
    </Modal>
  );
};

export default ModalForm;
