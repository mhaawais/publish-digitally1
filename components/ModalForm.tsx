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

  // button visual state: idle | loading | success
  const [btnState, setBtnState] = useState<"idle" | "loading" | "success">("idle");

  useEffect(() => {
    Modal.setAppElement("body"); // for screen readers
  }, []);

  // Lock body scroll & interactions while modal is open (works on all screens)
  useEffect(() => {
    const body = document.body;
    if (isModalOpen) {
      const scrollY = window.scrollY;
      body.setAttribute("data-scroll-y", String(scrollY));
      body.style.position = "fixed";
      body.style.top = `-${scrollY}px`;
      body.style.left = "0";
      body.style.right = "0";
      body.style.width = "100%";
      body.style.overflow = "hidden";
      body.style.touchAction = "none";
    } else {
      const y = parseInt(body.getAttribute("data-scroll-y") || "0", 10);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      body.style.touchAction = "";
      body.removeAttribute("data-scroll-y");
      window.scrollTo(0, y);
    }
    return () => {
      // cleanup if unmounted while open
      const y = parseInt(body.getAttribute("data-scroll-y") || "0", 10);
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";
      body.style.touchAction = "";
      body.removeAttribute("data-scroll-y");
      if (y) window.scrollTo(0, y);
    };
  }, [isModalOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    // start button animation
    setBtnState("loading");

    fetch("https://formspree.io/f/movwknrn", {
      method: "POST",
      headers: { Accept: "application/json" },
      body: new FormData(form),
    })
      .then(async (res) => {
        if (res.ok) {
          form.reset();
          setPhone("");
          setSuccess(true);
          setBtnState("success"); // show tick
          // reset to idle after a moment (if page doesn't navigate)
          setTimeout(() => setBtnState("idle"), 1400);
        } else {
          alert("Submission failed.");
          setBtnState("idle");
        }
      })
      .catch(() => {
        alert("Connection error.");
        setBtnState("idle");
      });
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={closeModal}
      closeTimeoutMS={250} // enables beforeClose animation for overlay fade
      className="w-full max-w-lg bg-white rounded-lg p-6 md:p-8 shadow-xl mx-4 sm:mx-auto mt-24 focus:outline-none"
      overlayClassName={{
        // Always blur on ALL screens; fade in/out smoothly
        base:
          "fixed inset-0 z-[9999] flex items-start justify-center overflow-y-auto " +
          "bg-black/40 backdrop-blur-md opacity-0 transition-opacity duration-300",
        afterOpen: "opacity-100",
        beforeClose: "opacity-0",
      }}
      // Optional: prevent closing by clicking the backdrop
      // shouldCloseOnOverlayClick={false}
      // Optional: prevent ESC key close
      // shouldCloseOnEsc={false}
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
            onChange={(val) => setPhone(val)}
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

          {/* Tailwind-only animated submit button */}
          <button
            type="submit"
            aria-live="polite"
            disabled={btnState !== "idle"}
            className={[
              "group relative w-full overflow-hidden rounded-xl px-6 py-3",
              "font-semibold tracking-wide text-white",
              "bg-gradient-to-br from-[#051a2e] via-[#083b73] to-[#0a6ebd]",
              "shadow-[0_10px_25px_-10px_rgba(0,0,0,.6)]",
              "transition-[transform,box-shadow] duration-300 ease-out",
              "hover:-translate-y-0.5 hover:shadow-[0_18px_35px_-12px_rgba(10,110,189,.55)]",
              "active:translate-y-0",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#031829]",
              "disabled:opacity-90 disabled:cursor-not-allowed",
            ].join(" ")}
          >
            {/* Ambient glow (always on) */}
            <span
              className="
                pointer-events-none absolute inset-[-2px] rounded-xl
                bg-[radial-gradient(120px_80px_at_20%_20%,rgba(255,255,255,.10),transparent),
                    radial-gradient(140px_90px_at_80%_30%,rgba(42,168,255,.16),transparent)]
              "
            />

            {/* Scroller overlay: slides left→right when loading */}
            <span
              className={[
                "absolute inset-0",
                btnState === "loading" ? "translate-x-0" : "-translate-x-full",
                "transition-transform duration-[2000ms] ease-out",
                "bg-gradient-to-r from-white/10 via-white/20 to-white/10 opacity-90",
              ].join(" ")}
            />

            {/* Success ring pop */}
            <span
              className={[
                "pointer-events-none absolute inset-0 rounded-xl",
                "transition-all duration-300 ease-out",
                btnState === "success" ? "opacity-100 scale-100" : "opacity-0 scale-75",
                "ring-2 ring-emerald-400/60",
              ].join(" ")}
            />

            {/* Text layers */}
            <span className="relative z-10 flex items-center justify-center gap-2">
              {/* Idle text */}
              <span
                className={[
                  "transition-opacity duration-150",
                  btnState === "idle" ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                Submit
              </span>

              {/* Loading text + spinner */}
              <span
                className={[
                  "absolute inset-0 z-10 flex items-center justify-center gap-2",
                  "transition-opacity duration-150",
                  btnState === "loading" ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                <svg
                  className="h-5 w-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="9"
                    stroke="currentColor"
                    strokeOpacity="0.25"
                    strokeWidth="3"
                  />
                  <path
                    d="M21 12a9 9 0 0 0-9-9"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                </svg>
                Submitting…
              </span>

              {/* Success text + check */}
              <span
                className={[
                  "absolute inset-0 z-10 flex items-center justify-center gap-2",
                  "transition-opacity duration-150",
                  btnState === "success" ? "opacity-100" : "opacity-0",
                ].join(" ")}
              >
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  aria-hidden="true"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
                Submitted
              </span>
            </span>
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









// "use client";

// import React, { useState, useEffect } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import Modal from "react-modal";
// import { useModal } from "@/app/context/ModalContext";

// const ModalForm = () => {
//   const { isModalOpen, closeModal } = useModal();
//   const [phone, setPhone] = useState("");
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     Modal.setAppElement("body"); // For screen readers
//   }, []);

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
//     <Modal
//       isOpen={isModalOpen}
//       onRequestClose={closeModal}
//       className="w-full max-w-lg bg-white rounded-lg p-6 md:p-8 shadow-xl mx-4 sm:mx-auto mt-24 focus:outline-none"
//       overlayClassName="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center overflow-y-auto"
//     >
//       <div className="w-full">
//         <div className="flex justify-between items-center mb-5">
//           <h2 className="text-xl md:text-2xl font-bold text-[#012A4A]">
//             Start Your Writing Journey
//           </h2>
//           <button
//             onClick={closeModal}
//             className="text-red-600 text-2xl font-bold leading-none"
//           >
//             &times;
//           </button>
//         </div>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name"
//             required
//             className="w-full p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-[#012A4A]"
//           />
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email"
//             required
//             className="w-full p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-[#012A4A]"
//           />

//           {/* Phone Number Field */}
//           <PhoneInput
//             country={"us"}
//             value={phone}
//             onChange={setPhone}
//             inputProps={{
//               name: "phone",
//               required: true,
//               autoFocus: false,
//             }}
//             inputStyle={{
//               width: "100%",
//               height: "45px",
//               paddingLeft: "48px",
//               borderRadius: "8px",
//               backgroundColor: "#dbeafe", // Tailwind blue-100
//               border: "1px solid #ccc",
//               fontSize: "16px",
//             }}
//             buttonStyle={{
//               border: "none",
//               backgroundColor: "#dbeafe",
//               borderTopLeftRadius: "8px",
//               borderBottomLeftRadius: "8px",
//             }}
//             containerStyle={{ width: "100%" }}
//           />

//           <textarea
//             name="message"
//             rows={4}
//             placeholder="Enter Brief"
//             required
//             className="w-full p-3 rounded-md bg-blue-100 focus:outline-none focus:ring-2 focus:ring-[#012A4A]"
//           />

//           <button
//             type="submit"
//             className="w-full bg-[#052540] hover:bg-[#03080c] text-white py-3 rounded-md transition-all duration-300"
//           >
//             Submit
//           </button>




//           {success && (
//             <p className="text-green-600 text-sm mt-2 text-center">
//               Form submitted successfully!
//             </p>
//           )}
//         </form>
//       </div>
//     </Modal>
//   );
// };

// export default ModalForm;
