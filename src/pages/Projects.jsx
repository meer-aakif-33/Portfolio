import { motion } from "framer-motion";
import { SocialLinks } from "../components/SocialLinks";
import { useTheme } from "next-themes";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";
const projects = [
  // {
  //   title: "Trustribe - Community Engagement Platform",
  //   desc: "Collaborated on a Community Engagement platform with real-time chat via Socket.io, incident reporting, and event management using MongoDB. Implemented user authentication, session management with express-session, and email notifications for incidents and complaints. Designed a dynamic event calendar with seamless updates and secure user interactions, including group chat and access control.",
  //   image: "/projects/trustribe.png",
  //   tags: ["Node.js", "Express", "MongoDB", "Socket.io"],
  //   link: "https://github.com/mrranger939/Community-Engagement",
  //   live_link: "https://community-engagement.onrender.com",
  // },
  {
    title: "News Aggregator with Personalized Recommendations and Summaries",
    desc: "Built a full-stack news aggregator using React, Node.js/Express, PostgreSQL, and Python NLP to deliver personalized, summarized, and recommended content. Implemented JWT-based authentication with secure signup/login flows, automatic preference persistence, and seamless retrieval of user preferences on login. Integrated real-time web scraping, intelligent summarization (Transformers), and a recommendation system (Scikit-learn) to enhance personalization. Designed a responsive, preference-driven UI, improving engagement and reducing average read time by 60% through AI-generated summaries.",
    image: "/projects/news-aggregator.png",
    tags: ["React", "Node.js", "PostgreSQL", "NLP", "Transformers", "Sklearn"],
    link: "https://github.com/meer-aakif-33/News-Aggregator-with-Personlised-Recommendations-and-Summaries",
    live_link: "https://aakif-mir-ml-news-aggregator.netlify.app",
  },
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
    title: "Place Review REST API",
    desc: "Developed a production-grade REST API using Node.js, Express, Prisma, and PostgreSQL to manage authenticated place reviews. Implemented JWT-based authentication, strict relational constraints, and transaction-safe review creation. Designed advanced search with exact/partial matching and rating filters, along with aggregated place statistics. Followed clean, feature-based architecture with strong focus on security, maintainability, and real-world backend trade-offs.",
    image: "/projects/place-review-api.png",
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "REST API"],
    link: "https://github.com/meer-aakif-33/place-review-rest-api",
  },
  {
    title: "Chef Recipe Generator",
    desc: "Built a React-based AI-powered Recipe Generator that suggests recipes based on user-provided ingredients. Implemented real-time ingredient management, duplicate prevention, and smooth UI animations. Deployed the application with dynamic recipe fetching and automatic scrolling for an enhanced user experience.",
    image: "/projects/chef-claude.png",
    tags: ["React", "AI", "Frontend"],
    link: "https://github.com/meer-aakif-33/Chef-Claude-Recipe-Generator",
    live_link: "https://aakif-chef-claude-recipe-generator.netlify.app",
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
    title: "Movie Recommender System",
    desc: "Developed a content-based movie recommender system using Python, Streamlit, and TMDb API. Implemented similarity-based recommendations using precomputed similarity matrices. Deployed the application on Streamlit for seamless accessibility and real-time recommendations.",
    image: "/projects/movie-recommender.png",
    tags: ["Python", "Streamlit", "TMDb API"],
    link: "https://github.com/meer-aakif-33/Movie-Recommender-System",
    live_link: "https://aakif-movie-recommender-system.streamlit.app/",
  },
  {
    title: "Amazon.com Clone with Vanilla JS",
    desc: "Designed and developed a user-friendly Amazon.com clone using Vanilla JavaScript. Features include fetching data from the backend, adding/removing items from the cart.",
    image: "/projects/amazon-dot-com.png",
    tags: ["JavaScript", "Frontend",],
    link: "https://github.com/meer-aakif-33/Amazon.com-with-vanilla-JS",
    live_link: "http://meer-aakif-33.github.io/Amazon.com-with-vanilla-JS/",
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

        <p
          className={`text-gray-600 dark:text-gray-300 mb-2 leading-relaxed transition-all duration-300 ease-in-out ${
            isOpen ? "" : "line-clamp-3"
          }`}
        >
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

        <div className="flex gap-4">
          {p.live_link && (
            <a
              href={p.live_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 dark:text-green-400 font-semibold inline-flex items-center gap-1 hover:underline"
            >
              Live Demo →
            </a>
          )}
          <a
            href={p.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 dark:text-indigo-400 font-semibold inline-flex items-center gap-1 hover:underline"
          >
            View Project →
          </a>
        </div>
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
