// src/pages/About.jsx
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiFastapi, SiTailwindcss, SiMongodb, SiPostman } from "react-icons/si";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { useTheme } from "next-themes";

export default function About() {
    const { theme } = useTheme();
    const gradientFill = theme === "dark" ? "url(#darkGradient)" : "url(#lightGradient)";

  return (
    <>
      <style jsx>{`
        @keyframes text-shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes float-up-down {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }

        @keyframes gradient-flow {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes glow-pulse {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
                        0 0 40px rgba(139, 92, 246, 0.2);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5),
                        0 0 60px rgba(139, 92, 246, 0.4);
          }
        }

        .text-gradient-shimmer {
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
          animation: text-shimmer 3s linear infinite;
        }

        .gradient-bg-flow {
          background-size: 200% 200%;
          animation: gradient-flow 8s ease infinite;
        }

        .timeline-card-glow {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .timeline-card-glow::before {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: inherit;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(255, 255, 255, 0.3), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .timeline-card-glow:hover::before {
          opacity: 1;
        }

        .timeline-card-glow:hover {
          transform: scale(1.02) translateY(-5px);
          box-shadow: 0 20px 60px -10px rgba(59, 130, 246, 0.4),
                      0 10px 30px -5px rgba(139, 92, 246, 0.3);
        }

        .about-text-highlight {
          position: relative;
          display: inline-block;
          transition: all 0.3s ease;
        }

        .about-text-highlight:hover {
          transform: scale(1.05);
          text-shadow: 0 0 20px currentColor;
        }
      `}</style>

      <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-gray-100 to-blue-50 dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
        <motion.div
          className="max-w-3xl text-center relative"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Animated background decoration */}
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="text-gradient-shimmer">About Me</span>
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
  I specialize in designing{" "}
  <span className="about-text-highlight font-medium text-indigo-600 dark:text-indigo-400">
    scalable full-stack systems
  </span>{" "}
  with clean architecture, real-time communication, and production-ready APIs.
  I enjoy working close to the system level – handling authentication, streaming,
  async pipelines, message queues, and performance-sensitive workflows.
          </motion.p>

          <motion.p 
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
  My work spans{" "}
  <span className="about-text-highlight font-medium text-blue-600 dark:text-blue-400">
    real-time interview systems using WebRTC and AI agents
  </span>
  , distributed video processing with RabbitMQ and WebSockets, and AI-driven
  platforms powered by NLP, LLMs, and recommendation engines. I focus on writing
  code that is not only functional, but{" "}
  <span className="about-text-highlight font-medium text-purple-600 dark:text-purple-400">
    maintainable, testable, and production-ready
  </span>
  .
          </motion.p>
        </motion.div>
      </section>

      {/* Timeline Section */}
      <section className="px-6 py-24 bg-gray-100 dark:bg-zinc-900 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-3xl" />

        <motion.h2 
          className="text-4xl font-extrabold mb-16 text-center relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 gradient-bg-flow">
            My Journey
          </span>
        </motion.h2>

        <VerticalTimeline lineColor={theme === "dark" ? "#3b82f6" : "#60a5fa"}>
          <VerticalTimelineElement
            contentStyle={{ 
              background: "#3b82f6", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #3b82f6" }}
            iconStyle={{ 
              background: "#3b82f6", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(59, 130, 246, 0.2), 0 0 20px rgba(59, 130, 246, 0.4)"
            }}
            icon={<FaGraduationCap />}
            date="Nov 2022 - Present"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
                B.Tech CSE
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 mt-2">
                CBIT Hyderabad
              </h4>
              <p className="text-white/80 mt-3">
                Persuing Batchelors of Engineering in Computer Science and Engineering.
              </p>
            </motion.div>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            contentStyle={{ 
              background: "#14b8a6", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(20, 184, 166, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #14b8a6" }}
            iconStyle={{ 
              background: "#14b8a6", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(20, 184, 166, 0.2), 0 0 20px rgba(20, 184, 166, 0.4)"
            }}
            icon={<FaBriefcase />}
            date="Apr 2025 – June 2025"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
                Intern at <em>Null Classes</em>
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 mt-2">
                AI Developer Intern | Apr 2025 – June 2025
              </h4>
              <p className="text-white/90 mt-3">
                Developed an interactive Customer Service Chatbot using Streamlit, LangChain, and Google Gemini API, enabling automated and context-aware question answering.
              </p>
              <p className="text-white/90 mt-2">
                Implemented a FAISS vector database with HuggingFace embeddings to support semantic search and efficient knowledge retrieval from structured CSV datasets.
              </p>
              <p className="text-white/90 mt-2">
                Built a real-time chat interface in Streamlit featuring chat history, styled user/bot message bubbles, and knowledge base auto-creation for scalable support automation.
              </p>
            </motion.div>
          </VerticalTimelineElement>
          
          <VerticalTimelineElement
            contentStyle={{ 
              background: "#4b6c8a", 
              color: "#fff",
              boxShadow: "0 10px 40px -10px rgba(75, 108, 138, 0.5)"
            }}
            contentArrowStyle={{ borderRight: "7px solid #4b6c8a" }}
            iconStyle={{ 
              background: "#4b6c8a", 
              color: "#fff",
              boxShadow: "0 0 0 4px rgba(75, 108, 138, 0.2), 0 0 20px rgba(75, 108, 138, 0.4)"
            }}
            icon={<FaBriefcase />}
            date="Mar 2025 – Aug 2025"
            className="timeline-card-glow"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
                Intern at <em>Stack Junior India</em>
              </h3>
              <h4 className="vertical-timeline-element-subtitle text-white/90 mt-2">
                Full Stack Developer Intern | Mar 2025 – Aug 2025
              </h4>
              <p className="text-white/90 mt-3">
                Developed a Spaced Revision Platform using FastAPI, MySQL, and React with personalized question delivery, automated scheduling, and real-time analytics.
              </p>
              <p className="text-white/90 mt-2">
                Integrated Gemini AI for PDF concept extraction, NCERT-style question generation, and auto-classification by concept, type, and difficulty, while building a responsive frontend dashboard for students and teachers.
              </p>
              <p className="text-white/90 mt-2">
                Enhanced skills in Python, FastAPI, SQL, ReactJS, problem-solving, rapid prototyping, and cross-functional collaboration.        
              </p>
            </motion.div>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </section>

      {/* Elegant SVG Section Separator */}
      <div className="relative -mt-16">
        <motion.svg
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="w-full"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="lightGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#e0e7ff" />
              <stop offset="100%" stopColor="#c7d2fe" />
            </linearGradient>
            <linearGradient id="darkGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1e293b" />
              <stop offset="100%" stopColor="#0f172a" />
            </linearGradient>
          </defs>
          <motion.path
            fill={gradientFill}
            d="M0,96L60,101.3C120,107,240,117,360,117.3C480,117,600,107,720,90.7C840,75,960,53,1080,64C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fillOpacity="1"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </motion.svg>
      </div>
    </>
  );
}