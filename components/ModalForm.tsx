'use client';

import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Modal from "react-modal";
import { useModal } from "@/app/context/ModalContext";

const ModalForm = () => {
  const { isOpen, closeModal } = useModal();
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
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-24 outline-none"
      overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start"
    >
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#012A4A]">Start Your Writing Journey</h2>
        <button onClick={closeModal} className="text-red-600 text-xl font-bold">&times;</button>
      </div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Your Name" required className="w-full mb-3 p-3 rounded-md bg-[#bce1dc]" />
        <input type="email" name="email" placeholder="Your Email" required className="w-full mb-3 p-3 rounded-md bg-[#bce1dc]" />
        <PhoneInput
          country={"us"}
          value={phone}
          onChange={setPhone}
          inputProps={{ name: "phone", required: true }}
          inputStyle={{ width: "100%", padding: "14px", borderRadius: "8px", backgroundColor: "#bce1dc" }}
        />
        <textarea name="message" rows={4} placeholder="Enter Brief" required className="w-full mb-3 p-3 rounded-md bg-[#bce1dc]" />
        <button type="submit" className="w-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white py-3 rounded-md">Submit</button>
        {success && <p className="text-green-600 text-sm mt-3 text-center">Form submitted successfully!</p>}
      </form>
    </Modal>
  );
};

export default ModalForm;
