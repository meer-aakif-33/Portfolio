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
<section className="min-h-screen px-6 py-24 bg-gray-100 dark:bg-gradient-to-br dark:from-zinc-900 dark:to-zinc-800 flex items-center justify-center">
  <motion.div
    className="max-w-3xl text-center"
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
  >
    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600 dark:from-cyan-400 dark:to-indigo-400 mb-6">
      About Me
    </h2>
    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide mb-6">
      I'm a passionate{" "}
      <span className="font-medium text-blue-600 dark:text-blue-400">
        Full Stack Developer
      </span>
      ,
      <span className="font-medium text-orange-500 dark:text-orange-200">
        {" "}
        MERN Stack Developer{" "}
      </span>
      and
      <span className="font-medium text-purple-600 dark:text-purple-400">
        {" "}
        Machine Learning enthusiast
      </span>
      . I love building sleek user interfaces and intelligent systems that
      solve real-world problems. My journey blends creativity, efficiency,
      and a drive to continuously learn and build things that matter.
    </p>

    <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
      From building AI-powered news platforms and video processing pipelines
      to real-time summarization tools and intelligent recommenders, I bring
      together full-stack expertise and machine learning to craft impactful,
      scalable solutions.
    </p>
  </motion.div>
</section>
  

        {/* Timeline Section */}
      <section className="px-6 py-24 bg-gray-100 dark:bg-zinc-900">
        <h2 className="text-4xl font-extrabold mb-16 text-center text-gray-900 dark:text-white">
          My Journey
        </h2>
      <VerticalTimeline lineColor={theme === "dark" ? "#3b82f6" : "#60a5fa"}   >
      <VerticalTimelineElement
        contentStyle={{ background: "#3b82f6", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #3b82f6" }}
        iconStyle={{ background: "#3b82f6", color: "#fff" }}
        icon={<FaGraduationCap />}
        date="Nov 2022 - Present"
      >
        <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
          B.Tech CSE
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-white/90">
          CBIT Hyderabad
        </h4>
        <p className="text-white/80">
          Specializing in AI, ML, and Full Stack Development, MERN Stack Development.
        </p>
      </VerticalTimelineElement>

      <VerticalTimelineElement
        contentStyle={{ background: "#14b8a6", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #14b8a6" }}
        iconStyle={{ background: "#14b8a6", color: "#fff" }}
        icon={<FaBriefcase />}
        date="Feb 2025 - Apr 2024"
      >
        <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
          Intern at <em>Null Classes</em>
        </h3>
        <h3 className="vertical-timeline-element-subtitle text-white/90">
          AI Developer Intern | Apr 2025 – June 2025
        </h3>
        <p className="text-white/90">
          Developed an interactive Customer Service Chatbot using Streamlit, LangChain, and Google Gemini API, enabling automated and context-aware question answering.        </p>
        <p className="text-white/90">
         Implemented a FAISS vector database with HuggingFace embeddings to support semantic search and efficient knowledge retrieval from structured CSV datasets.        </p>
        <p className="text-white/90">
         Built a real-time chat interface in Streamlit featuring chat history, styled user/bot message bubbles, and knowledge base
         auto-creation for scalable support automation.        </p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        contentStyle={{ background: "#4b6c8a", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #4b6c8a" }}
        iconStyle={{ background: "#4b6c8a", color: "#fff" }}
        icon={<FaBriefcase />}
        date="Apr 2025 - June 2025"
      >
        <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
          Intern at <em>Stack Junior India</em>
        </h3>
        <h3 className="vertical-timeline-element-subtitle text-white/90">
          Full Stack Developer Intern | Mar 2025 – Aug 2025
        </h3>
        <p className="text-white/90">
          Developed a Spaced Revision Platform using FastAPI, MySQL, and React with personalized question delivery, automated scheduling, and real-time analytics.
        </p>
        <p className="text-white/90">
          Integrated Gemini AI for PDF concept extraction, NCERT-style question generation, and auto-classification by concept, type, and difficulty, while building a responsive frontend dashboard for students and teachers.
        </p>
        <p className="text-white/90">
          Enhanced skills in Python, FastAPI, SQL, ReactJS, problem-solving, rapid prototyping, and cross-functional collaboration.        
        </p>
      </VerticalTimelineElement>

        </VerticalTimeline>
      </section>

      {/* Elegant SVG Section Separator */}
      <div className="relative -mt-16">
        <motion.svg
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
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
          <path
            fill={gradientFill}
            d="M0,96L60,101.3C120,107,240,117,360,117.3C480,117,600,107,720,90.7C840,75,960,53,1080,64C1200,75,1320,117,1380,138.7L1440,160L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
            fillOpacity="1"
          />
        </motion.svg>
      </div>

</>
  );
}


