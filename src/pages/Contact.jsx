import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SocialLinks } from "../components/SocialLinks"

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
    <section className="h-[75vh] px-4 py-12 bg-gradient-to-br from-gray-50 to-blue-100 dark:from-black dark:to-zinc-900 flex items-center justify-center">
      <motion.div
        className="w-full max-w-sm bg-white/90 dark:bg-zinc-900/70 backdrop-blur-md rounded-3xl shadow-2xl+ py-5 md:py-5 px-8
        border border-gray-200 dark:border-zinc-800"
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl md:text-2xl font-bold text-center text-gray-900 dark:text-white mb-10 tracking-tight">
          Send a message
        </h2>
        <form ref={formRef} onSubmit={sendEmail} className="space-y-6">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            className="w-full p-2 rounded-lg border border-gray-300 dark:border-zinc-700 bg-gray-100 dark:bg-zinc-800 text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            required
          />
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-2 rounded-lg shadow-lg transition"
          >
            Send
          </motion.button>
        </form>

        {sent && (
          <p className="mt-6 text-center text-green-600 font-semibold">
            Message sent successfully!
          </p>
        )}
      </motion.div>
    </section>
  <SocialLinks/>
      </>

  );
}
