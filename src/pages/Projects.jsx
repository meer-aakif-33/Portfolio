"use client";

import { motion } from "framer-motion";
import { SocialLinks } from "../components/SocialLinks";
import { useTheme } from "next-themes";
import "react-vertical-timeline-component/style.min.css";
import { useState } from "react";

const projects = [
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
    title: "AI-Powered Real-Time Interview Practice Platform",
    desc: "Built a real-time, voice-based AI interview platform that simulates technical coding interviews using streaming audio, LLM reasoning, and text-to-speech. The system handles live session orchestration, low-latency speech recognition, intelligent response generation, and real-time audio playback. It follows a distributed, event-driven architecture with separate signaling, media transport, and intelligence layers, enabling scalable and interactive interview experiences with contextual code understanding.",
    image: "/projects/interview-platform.png",
    tags: ["Node.js", "Python", "LiveKit", "WebRTC", "LLM", "Deepgram", "Cartesia", "Real-Time Systems"],
    link: "https://github.com/meer-aakif-33/Interview-practice-platform",
  },
  {
    title: "Sweet Shop Management System (TDD)",
    desc: "Built a full-stack Sweet Shop Management System using FastAPI, React, and TypeScript by strictly following Test-Driven Development (Red–Green–Refactor). Implemented JWT-based authentication, role-based authorization (USER/ADMIN), and inventory management with backend-enforced security. Designed comprehensive unit and integration tests covering auth, CRUD, inventory workflows, and search, ensuring reliable behavior and production-style API contracts.",
    image: "/projects/sweets-shop.png",
    tags: ["FastAPI", "Python", "React", "TypeScript", "JWT", "TDD", "Pytest"],
    link: "https://github.com/meer-aakif-33/sweet-shop-system",
  },
  {
    title: "Place Review REST API",
    desc: "Developed a production-grade REST API using Node.js, Express, Prisma, and PostgreSQL to manage authenticated place reviews. Implemented JWT-based authentication, strict relational constraints, and transaction-safe review creation. Designed advanced search with exact/partial matching and rating filters, along with aggregated place statistics. Followed clean, feature-based architecture with strong focus on security, maintainability, and real-world backend trade-offs.",
    image: "/projects/place-review.png",
    tags: ["Node.js", "Express", "PostgreSQL", "Prisma", "JWT", "REST API"],
    link: "https://github.com/meer-aakif-33/Place-Review-API",
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
    tags: ["JavaScript", "Frontend"],
    link: "https://github.com/meer-aakif-33/Amazon.com-with-vanilla-JS",
    live_link: "http://meer-aakif-33.github.io/Amazon.com-with-vanilla-JS/",
  },
];

export default function ProjectsPage() {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(null);

  return (
    <>
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer-flow {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        @keyframes float-subtle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }

        .project-card {
          transition: all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
          // overflow: hidden;
        }

        .project-card::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 1rem;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.6), transparent);
          background-size: 200% 200%;
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.5s ease;
          animation: shimmer-flow 3s linear infinite;
          pointer-events: none;   /* 🔥 This fixes Read More */

        }

        .project-card:hover::before {
          opacity: 1;
        }

        .project-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 25px 60px -15px rgba(59, 130, 246, 0.5),
                      0 15px 40px -10px rgba(139, 92, 246, 0.4);
        }

        .project-card:hover .project-image {
          transform: scale(1.1);
        }

        .project-image {
          transition: transform 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .tag-item {
          transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .tag-item::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 9999px;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .tag-item:hover::before {
          opacity: 1;
        }

        .tag-item:hover {
          transform: scale(1.15) translateY(-2px);
          box-shadow: 0 4px 12px rgba(99, 102, 241, 0.4);
        }

        .gradient-text {
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
          animation: shimmer-flow 3s linear infinite;
        }

        .link-hover {
          position: relative;
          transition: all 0.3s ease;
        }

        .link-hover::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: currentColor;
          transition: width 0.3s ease;
        }

        .link-hover:hover::after {
          width: 100%;
        }

        .link-hover:hover {
          transform: translateX(4px);
        }
      `}</style>

      {/* Projects Section */}
      <section className="min-h-screen px-6 py-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-zinc-900 dark:via-zinc-900 dark:to-zinc-800 transition-colors duration-500 relative overflow-hidden">
        {/* Animated background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/10 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-6xl mx-auto relative z-10"
        >
          <motion.h2 
            className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-14 text-center tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <span className="gradient-text text-transparent">My Projects</span>
          </motion.h2>

          <div className="grid gap-12 md:grid-cols-2">
            {projects.map((p, i) => {
              const isOpen = expanded === i;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className="project-card bg-white dark:bg-zinc-900 text-gray-800 dark:text-white border border-gray-200 dark:border-zinc-700 rounded-2xl shadow-lg"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="project-image w-full h-52 object-cover object-top"
                    />
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent">
                      {p.title}
                    </h3>

<div className="relative">
  <motion.p
    initial={false}
    animate={{
      maxHeight: isOpen ? 500 : 72,   // px values work smoother than tailwind strings
      opacity: isOpen ? 1 : 0.85,
    }}
transition={{
  type: "spring",
  stiffness: 65,
  damping: 26,
  mass: 1.3,
}}

    className="text-gray-600 dark:text-gray-300 mb-3 leading-relaxed overflow-hidden"
  >
    {p.desc}
  </motion.p>

  {!isOpen && (
    <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white dark:from-zinc-900 to-transparent pointer-events-none" />
  )}
</div>

<button
  type="button"
  onClick={() => setExpanded(prev => (prev === i ? null : i))}
  className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 focus:outline-none mb-4 transition-all duration-300 hover:underline cursor-pointer"
>
  {isOpen ? "Show less ↑" : "Read more →"}
</button>

                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="tag-item px-3 py-1.5 text-sm bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-700 dark:text-indigo-300 rounded-full shadow-sm font-medium cursor-default"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-6">
                      {p.live_link && (
                        <a
                          href={p.live_link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="link-hover text-green-600 dark:text-green-400 font-semibold inline-flex items-center gap-1"
                        >
                          Live Demo →
                        </a>
                      )}
                      <a
                        href={p.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-hover text-indigo-600 dark:text-indigo-400 font-semibold inline-flex items-center gap-1"
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