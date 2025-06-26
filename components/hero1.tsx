'use client';

import React from "react";
import { useModal } from "@/app/context/ModalContext";

const Hero1 = () => {
  const { openModal } = useModal();

  return (
    <section className="relative w-full h-screen overflow-hidden">
      {/* Top Image Wave */}
      <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
        <img
          src="/assets/images/top.webp"
          alt="top wave"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src="/assets/images/video.mp4"
        autoPlay
        loop
        muted
        playsInline
      ></video>

      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

      {/* Content */}
      <div className="relative z-30 flex flex-col justify-center items-start h-full px-6 md:px-16 max-w-4xl">
        <div className="bg-white/90 rounded-md p-6 md:p-10 shadow-lg backdrop-blur-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-[#012A4A] mb-4 leading-tight font-serif">
            <span className="block">Transforming Ideas into Published Masterpieces –</span>
            <span className="block">Expert Book Writing, Editing </span>
            <span className="block">Publishing Services</span>
          </h1>
          <button
            onClick={openModal}
            className="mt-4 bg-[#052540] hover:bg-[#03080c] text-white font-semibold px-6 py-3 rounded-md transition-all shadow-md"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Bottom Image Wave */}
      <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
        <img
          src="/assets/images/bottom.webp"
          alt="bottom wave"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default Hero1;








// 'use client';

// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Modal from "react-modal";

// const Hero1 = () => {
//   const [modalIsOpen, setModalIsOpen] = useState(false);
//   const [phone, setPhone] = useState("");
//   const [success, setSuccess] = useState(false);

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     const form = e.target as HTMLFormElement;

//     fetch("https://formspree.io/f/movwknrn", {
//       method: "POST",
//       headers: {
//         Accept: "application/json",
//       },
//       body: new FormData(form),
//     })
//       .then((response) => {
//         if (response.ok) {
//           form.reset();
//           setPhone("");
//           setSuccess(true);
//         } else {
//           alert("Submission failed. Please try again.");
//         }
//       })
//       .catch(() => {
//         alert("Submission failed. Please check your connection.");
//       });
//   };

//   return (
//     <section className="relative w-full h-screen overflow-hidden">
//       {/* Top Image Wave */}
//       <div className="absolute top-0 left-0 w-full z-20 pointer-events-none">
//         <img
//           src="/assets/images/top.webp"
//           alt="top wave"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover z-0"
//         src="/assets/images/video.mp4"
//         autoPlay
//         loop
//         muted
//         playsInline
//       ></video>

//       {/* Overlay */}
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40 z-10"></div>

//       {/* Content */}
//       <div className="relative z-30 flex flex-col justify-center items-start h-full px-6 md:px-16 max-w-4xl">
//         <div className="bg-white/90 rounded-md p-6 md:p-10 shadow-lg backdrop-blur-sm">
//           <h1 className="text-3xl md:text-4xl font-bold text-[#012A4A] mb-4 leading-tight font-serif">
//             <span className="block">Transforming Ideas into Published Masterpieces –</span>
//             <span className="block">Expert Book Writing, Editing </span>
//             <span className="block">Publishing Services</span>
//           </h1>
//           <button
//             onClick={() => {
//               setModalIsOpen(true);
//               setSuccess(false);
//             }}
//             className="mt-4 bg-[#052540] hover:bg-[#03080c] text-white px-6 py-3 rounded-md font-semibold transition-all shadow-md"
//           >
//             Get Started
//           </button>
//         </div>
//       </div>

//       {/* Bottom Image Wave */}
//       <div className="absolute bottom-0 left-0 w-full z-20 pointer-events-none">
//         <img
//           src="/assets/images/bottom.webp"
//           alt="bottom wave"
//           className="w-full h-auto object-cover"
//         />
//       </div>

//       {/* Modal Form */}
//       <Modal
//         isOpen={modalIsOpen}
//         onRequestClose={() => setModalIsOpen(false)}
//         className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-24 outline-none"
//         overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-start"
//       >
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-semibold text-[#012A4A]">
//             Start Your Writing Journey With Us
//           </h2>
//           <button
//             onClick={() => setModalIsOpen(false)}
//             className="text-red-600 text-xl font-bold"
//           >
//             &times;
//           </button>
//         </div>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full mb-3 p-3 rounded-md bg-[#bce1dc] placeholder:text-gray-700"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full mb-3 p-3 rounded-md bg-[#bce1dc] placeholder:text-gray-700"
//           />
//           <PhoneInput
//             country={"us"}
//             value={phone}
//             onChange={setPhone}
//             inputProps={{
//               name: "phone",
//               required: true,
//             }}
//             inputStyle={{
//               width: "100%",
//               padding: "14px",
//               borderRadius: "8px",
//               backgroundColor: "#bce1dc",
//               marginBottom: "12px",
//               border: "1px solid #ccc",
//               fontSize: "16px",
//             }}
//             containerStyle={{
//               marginBottom: "1rem",
//             }}
//             buttonStyle={{
//               border: "none",
//               borderRadius: "8px 0 0 8px",
//               backgroundColor: "#bce1dc",
//             }}
//           />
//           <textarea
//             name="message"
//             placeholder="Enter Brief"
//             rows={4}
//             required
//             className="w-full mb-3 p-3 rounded-md bg-[#bce1dc] placeholder:text-gray-700"
//           />
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-[#0077b6] to-[#00b4d8] text-white py-3 rounded-md font-semibold shadow-md"
//           >
//             Submit
//           </button>
//           {success && (
//             <p className="text-green-600 text-sm mt-3 text-center">
//               Form submitted successfully!
//             </p>
//           )}
//         </form>
//       </Modal>
//     </section>
//   );
// };

// export default Hero1;

