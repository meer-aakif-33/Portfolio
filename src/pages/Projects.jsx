import { motion } from "framer-motion";
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
    live_link: "https://aakif-movie-recommender-system.streamlit.app/",
  },
  {
    title: "Olympics Data Analysis and Visualization",
    desc: "Developed an interactive web application using Streamlit to analyze Olympic Games data. Features include medal tally insights, country and athlete-wise performance analysis, and trend visualizations using Pandas, Seaborn, and Plotly. Implemented data pre-processing for accurate insights and presented results through interactive charts and heatmaps.",
    image: "/projects/olympics.png",
    tags: ["Python", "Streamlit", "Pandas", "Seaborn", "Plotly"],
    link: "https://github.com/meer-aakif-33/Olympic-Data-Analysis-of-120-Years",
    live_link: "https://meer-aakif-33-olympic-data-analysis-of-120-years-app-z1l6wd.streamlit.app/",
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
          <h2 className="text-3xl font-extrabold mb-14 text-center text-gray-900 dark:text-white tracking-tight">
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
    
      <SocialLinks />
    </>
  );
}
