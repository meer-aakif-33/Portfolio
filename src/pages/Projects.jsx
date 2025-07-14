import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaPython, FaGitAlt, FaGraduationCap, FaBriefcase } from "react-icons/fa";
import { SiFastapi, SiTailwindcss, SiMongodb, SiPostman } from "react-icons/si";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { SocialLinks } from "../components/SocialLinks";
import { useTheme } from "next-themes";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
const projects = [
  {
    title: "Distributed Event-Driven Video Processing Pipeline",
    desc: "Built a distributed video processing pipeline using FastAPI and React (Vite), supporting real-time video upload, enhancement, and metadata extraction. Integrated RabbitMQ for task queuing and WebSockets for instant status updates, reducing processing response time by 40%. Implemented an intuitive UI with smooth upload and download experience, achieving user satisfaction in testing.",
    image: "/projects/video-processor.png",
    tags: ["FastAPI", "React", "RabbitMQ", "WebSocket"],
    link: "https://github.com/meer-aakif-33/Distributed-Event-Driven-Video-Processing-Pipeline",
  },
  {
    title: "YouTube Video Summarizer & Caption Extractor",
    desc: "Developed a Flask-based YouTube Video Summarizer that extracts captions and generates AI-powered summaries using NLP models. Extracts captions even for non-caption videos. Integrated OpenAI Whisper for speech-to-text transcription and Facebook's BART model for summarization. Built a user-friendly web interface with support for GPU acceleration.",
    image: "/projects/youtube-summarizer.png",
    tags: ["Flask", "Whisper", "BART", "NLP"],
    link: "https://github.com/meer-aakif-33/YouTube-Video-summarizer-and-caption-extractor",
  },
  {
    title: "Movie Recommender System",
    desc: "Developed a content-based movie recommender system using Python, Streamlit, and TMDb API. Implemented similarity-based recommendations using precomputed similarity matrices. Deployed the application on Streamlit for seamless accessibility and real-time recommendations.",
    image: "/projects/movie-recommender.png",
    tags: ["Python", "Streamlit", "TMDb API"],
    link: "https://github.com/meer-aakif-33/Movie-Recommender-System",
  },
  {
    title: "Olympics Data Analysis and Visualization",
    desc: "Developed an interactive web application using Streamlit to analyze Olympic Games data. Features include medal tally insights, country and athlete-wise performance analysis, and trend visualizations using Pandas, Seaborn, and Plotly. Implemented data pre-processing for accurate insights and presented results through interactive charts and heatmaps.",
    image: "/projects/olympics.png",
    tags: ["Python", "Streamlit", "Pandas", "Seaborn", "Plotly"],
    link: "https://github.com/meer-aakif-33/Olympic-Data-Analysis-of-120-Years",
  },
  {
    title: "Customizable News Aggregator with Summarizer",
    desc: "Built a full-stack news aggregator using React (Vite), Node.js/Express, and Python NLP to deliver personalized, summarized, and recommended content. Integrated JWT-based authentication, real-time web scraping, and intelligent summarization and recommendation using Transformers and Sklearn. Designed a clean, responsive UI with preference-based feeds, increasing user engagement and reducing average read time by 60% through AI-generated summaries.",
    image: "/projects/news-aggregator.png",
    tags: ["React", "Node.js", "NLP", "Sklearn", "Transformers"],
    link: "https://github.com/Arcane-WD/Customizable-News-Aggregator",
  },
];

export default function ProjectsPage() {
  const { theme } = useTheme();
  const gradientFill = theme === "dark" ? "url(#darkGradient)" : "url(#lightGradient)";

  return (
    <>
      {/* Projects Section */}
      <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-zinc-900 dark:to-zinc-800 transition-colors duration-500">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-4xl font-extrabold mb-14 text-center text-gray-900 dark:text-white tracking-tight">
            My Projects
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
        {projects.map((p, i) => {
          const [expanded, setExpanded] = useState(null);
          const isOpen = expanded === i;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03, rotate: 0.3 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-zinc-900 text-gray-800 dark:text-white border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-md hover:shadow-xl overflow-hidden transform transition-transform"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-52 object-cover object-top transition duration-300 hover:scale-105"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{p.title}</h3>

                <p className={`text-gray-600 dark:text-gray-300 mb-2 leading-relaxed transition-all duration-300 ease-in-out ${
                  isOpen ? '' : 'line-clamp-3'
                }`}>
                  {p.desc}
                </p>

                <button
                  onClick={() => setExpanded(isOpen ? null : i)}
                  className="text-blue-600 dark:text-blue-400 font-medium hover:underline focus:outline-none mb-4"
                >
                  {isOpen ? "Show less" : "Read more"}
                </button>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 text-sm bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-white rounded-full shadow-sm hover:scale-105 transition-transform"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 font-semibold inline-flex items-center gap-1 hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          );
        })}
          </div>
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
          Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-white/90">
          Nullclass
        </h4>
        <p className="text-white/80">
          Built an AI-powered Q&A chatbot using LangChain and Gemini API.
        </p>
      </VerticalTimelineElement>
      
      <VerticalTimelineElement
        contentStyle={{ background: "#4b6c8a", color: "#fff" }}
        contentArrowStyle={{ borderRight: "7px solid #4b6c8a" }}
        iconStyle={{ background: "#4b6c8a", color: "#fff" }}
        icon={<FaBriefcase />}
        date="Apr 2025 - Present"
      >
        <h3 className="vertical-timeline-element-title text-white font-semibold text-xl">
          Intern
        </h3>
        <h4 className="vertical-timeline-element-subtitle text-white/90">
          Tenth Plus
        </h4>
        <p className="text-white/80">
          Building Spaced Revision App.
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

      <SocialLinks />
    </>
  );
}
