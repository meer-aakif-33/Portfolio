// src/pages/Contact.jsx
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { SocialLinks } from "../components/SocialLinks";

export default function Contact() {
  const formRef = useRef();
  const [sent, setSent] = useState(false);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    
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
          setIsSending(false);
          formRef.current.reset();
          setTimeout(() => setSent(false), 5000);
        },
        (error) => {
          setIsSending(false);
          alert("Failed to send message: " + error.text);
        }
      );
  };

  return (
    <>
      <style jsx>{`
        @keyframes shimmer-bg {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.2),
                        0 0 40px rgba(139, 92, 246, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.4),
                        0 0 60px rgba(139, 92, 246, 0.3);
          }
        }

        @keyframes float-gentle {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        @keyframes gradient-rotate {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }

        .form-container {
          position: relative;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .form-container::before {
          content: '';
          position: absolute;
          inset: -3px;
          border-radius: 1.5rem;
          padding: 3px;
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #ec4899, #8b5cf6, #3b82f6);
          background-size: 300% 300%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
          animation: shimmer-bg 3s linear infinite;
        }

        .form-container:hover::before {
          opacity: 0.6;
        }

        .form-container:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 30px 70px -15px rgba(59, 130, 246, 0.4),
                      0 20px 50px -10px rgba(139, 92, 246, 0.3);
        }

        .input-field {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .input-field:focus {
          transform: scale(1.02);
          box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.2),
                      0 10px 30px -5px rgba(59, 130, 246, 0.3);
        }

        .button-primary {
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .button-primary::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }

        .button-primary:hover::before {
          width: 400px;
          height: 400px;
        }

        .button-primary:hover {
          transform: translateY(-4px) scale(1.05);
          box-shadow: 0 20px 50px -10px rgba(59, 130, 246, 0.6),
                      0 10px 30px -5px rgba(139, 92, 246, 0.5);
        }

        .button-primary:active {
          transform: translateY(-2px) scale(1.03);
        }

        .gradient-heading {
          background: linear-gradient(
            90deg,
            #3b82f6 0%,
            #8b5cf6 25%,
            #ec4899 50%,
            #8b5cf6 75%,
            #3b82f6 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          animation: shimmer-bg 3s linear infinite;
        }

        .success-message {
          animation: float-gentle 3s ease-in-out infinite;
        }

        .bg-decoration {
          animation: gradient-rotate 20s linear infinite;
        }
      `}</style>

      <section className="min-h-[80vh] px-4 py-16 bg-gradient-to-br from-gray-100 via-blue-50 to-indigo-100 dark:from-black dark:via-zinc-900 dark:to-zinc-950 flex items-center justify-center relative overflow-hidden">
        {/* Animated Background Decorations */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/20 dark:bg-blue-500/30 rounded-full blur-3xl bg-decoration" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-purple-500/20 dark:bg-purple-500/30 rounded-full blur-3xl bg-decoration" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 dark:bg-pink-500/20 rounded-full blur-3xl bg-decoration" style={{ animationDelay: '4s' }} />

        <motion.div
          className="form-container w-full max-w-md bg-white/90 dark:bg-zinc-900/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-gray-200/50 dark:border-zinc-800/50 p-8 relative z-10"
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Heading */}
          <motion.h2 
            className="text-3xl sm:text-4xl font-extrabold text-center mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-heading text-transparent">Let's Connect</span>
          </motion.h2>

          {/* Form */}
          <motion.form 
            ref={formRef} 
            onSubmit={sendEmail} 
            className="space-y-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.input
              type="text"
              name="user_name"
              placeholder="👤 Your Name"
              className="input-field w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            
            <motion.input
              type="email"
              name="user_email"
              placeholder="📧 Your Email"
              className="input-field w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />
            
            <motion.textarea
              name="message"
              rows="5"
              placeholder="💬 Your Message"
              className="input-field w-full px-4 py-3 rounded-xl border border-gray-300 dark:border-zinc-700 bg-gray-50 dark:bg-zinc-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
              whileFocus={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            />

            {/* Submit button */}
            <motion.button
              type="submit"
              disabled={isSending}
              className="button-primary w-full py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">
                {isSending ? "Sending... ⏳" : "🚀 Send Message"}
              </span>
            </motion.button>
          </motion.form>

          {/* Success Message */}
          {sent && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{ duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              className="success-message mt-6 p-4 rounded-xl bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 backdrop-blur-sm"
            >
              <p className="text-center text-green-600 dark:text-green-400 font-semibold flex items-center justify-center gap-2">
                <span className="text-2xl">✅</span>
                Message sent successfully!
              </p>
            </motion.div>
          )}

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-xl opacity-30 animate-pulse" />
          <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-pink-400 to-indigo-400 rounded-full blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
        </motion.div>
      </section>

      {/* Social Links */}
      <SocialLinks />
    </>
  );
}