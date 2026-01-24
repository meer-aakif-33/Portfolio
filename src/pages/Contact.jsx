// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SocialLinks } from "../components/SocialLinks";

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_sw8re1c",
        "template_z8694yn",
        formRef.current,
        "gLZnaa_6YCjweKPSb"
      )
      .then(
        () => {
          setSent(true);
          formRef.current.reset();
        },
        (error) => {
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <>
      <section className="min-h-[80vh] px-4 py-16 bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 dark:from-black dark:via-zinc-900 dark:to-zinc-950 flex items-center justify-center">
        <motion.div
          className="w-full max-w-md bg-white/80 dark:bg-zinc-900/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200 dark:border-zinc-800 p-8"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
        >
          {/* Heading */}
          <h2 className="text-3xl font-extrabold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent tracking-tight">
            Let’s Connect
          </h2>

          {/* Form */}
          <form ref={formRef} onSubmit={sendEmail} className="space-y-5">
            <input
              type="text"
              name="user_name"
              placeholder="👤 Your Name"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
            <input
              type="email"
              name="user_email"
              placeholder="📧 Your Email"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />
            <textarea
              name="message"
              rows="5"
              placeholder="💬 Your Message"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
              required
            />

            {/* Submit button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 shadow-lg hover:shadow-blue-500/40 transition"
            >
              🚀 Send Message
            </motion.button>
          </form>

          {/* Success Message */}
          {sent && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-center text-green-500 font-semibold"
            >
              ✅ Message sent successfully!
            </motion.p>
          )}
        </motion.div>
      </section>

      {/* Social Links */}
      <SocialLinks />
    </>
  );
}
