// src/pages/Home.jsx
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SocialLinks } from "../components/SocialLinks";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaChartBar } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { FaJava } from "react-icons/fa";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDatabase,
  FaLayerGroup,
} from "react-icons/fa";

import {
  SiFastapi,
  SiTailwindcss,
  SiMongodb,
  SiPostman,
  SiJavascript,
  SiC,
  SiKotlin,
  SiMysql,
  SiGithub,
  SiRabbitmq,
  SiScikitlearn,
  SiNumpy,
  SiPandas,
  SiBootstrap,
  SiExpress,  
  SiFlask,
  SiDocker,
  SiPostgresql,
} from "react-icons/si";

import About from "./About";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.85, y: 20 },
  show: { 
    opacity: 1, 
    scale: 1, 
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
};

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
      { name: "Java", icon: <FaJava />, color: "text-red-500" },
      { name: "C", icon: <SiC />, color: "text-blue-600" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" },
      { name: "Kotlin", icon: <SiKotlin />, color: "text-purple-500" },
    ],
  },
  {
    title: "Web & App Development",
    skills: [
      { name: "ReactJS", icon: <FaReact />, color: "text-cyan-500" },
      { name: "NodeJS", icon: <FaNodeJs />, color: "text-green-600" },
      { name: "ExpressJS", icon: <SiExpress />, color: "text-gray-700" },
      { name: "Flask", icon: <SiFlask />, color: "text-gray-400" },
      { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-400" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-emerald-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
      { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-sky-500" },
    ],
  },
  {
    title: "Machine Learning / Data Science",
    skills: [
      { name: "Scikit-Learn", icon: <SiScikitlearn />, color: "text-orange-400" },
      { name: "Pandas", icon: <SiPandas />, color: "text-black dark:text-white" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-500" },
      { name: "Matplotlib", icon: <FaChartBar />, color: "text-indigo-500" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-800 dark:text-gray-200" },
      { name: "RabbitMQ", icon: <SiRabbitmq />, color: "text-rose-400" },
      { name: "Postman", icon: <SiPostman />, color: "text-pink-600" },
      { name: "Docker", icon: <SiDocker />, color: "text-blue-400" },
    ],
  },
];

export default function Home() {
  return (
    <>
      <style jsx>{`
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-12px) rotate(2deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3),
                        0 0 40px rgba(59, 130, 246, 0.2),
                        0 0 60px rgba(59, 130, 246, 0.1);
          }
          50% { 
            box-shadow: 0 0 30px rgba(59, 130, 246, 0.5),
                        0 0 60px rgba(59, 130, 246, 0.3),
                        0 0 90px rgba(59, 130, 246, 0.2);
          }
        }

        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }

        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 8s ease infinite;
        }

        .skill-card-hover {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
          position: relative;
        }

        .skill-card-hover::before {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 0.75rem;
          padding: 2px;
          background: linear-gradient(45deg, transparent, rgba(59, 130, 246, 0.5), transparent);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          opacity: 0;
          transition: opacity 0.4s ease;
        }

        .skill-card-hover:hover::before {
          opacity: 1;
        }

        .skill-card-hover:hover {
          transform: translateY(-12px) scale(1.08) rotate(-2deg);
          box-shadow: 0 20px 60px -10px rgba(59, 130, 246, 0.4),
                      0 10px 30px -5px rgba(139, 92, 246, 0.3);
        }

        .skill-card-hover:hover .skill-icon {
          transform: scale(1.2) rotate(10deg);
          filter: drop-shadow(0 0 12px currentColor);
        }

        .skill-icon {
          transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        .text-shimmer {
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
          animation: shimmer 3s linear infinite;
        }

        .button-glow {
          position: relative;
          overflow: hidden;
        }

        .button-glow::before {
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
        .typewriter-cursor {
          color: #3b82f6;
          text-shadow: 0 0 8px rgba(59, 130, 246, 0.9);
          font-weight: bold;
        }

        .button-glow:hover::before {
          width: 300px;
          height: 300px;
        }

        .profile-rings {
          position: absolute;
          inset: -4px;
          z-index: -1;
        }

        .profile-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid;
          animation: pulse-ring 3s ease-in-out infinite;
        }

        .profile-ring:nth-child(1) {
          border-color: rgba(59, 130, 246, 0.4);
          animation-delay: 0s;
        }

        .profile-ring:nth-child(2) {
          border-color: rgba(139, 92, 246, 0.4);
          animation-delay: 1s;
        }

        .profile-ring:nth-child(3) {
          border-color: rgba(236, 72, 153, 0.4);
          animation-delay: 2s;
        }

        @keyframes pulse-ring {
          0% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.15);
            opacity: 0;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative min-h-screen px-6 py-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
        <ParticlesBackground />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 text-center px-4"
        >
          {/* Profile Photo with Enhanced Effects */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center mb-6"
          >
            {/* Animated Gradient Ring */}
            <div className="absolute -inset-4 flex items-center justify-center -z-10">
              <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 
                    rounded-full bg-gradient-to-tr from-blue-500 via-purple-500 to-pink-500 
                    animate-spin-slow blur-2xl opacity-50">
              </div>
            </div>

            {/* Pulsing Rings */}
            <div className="profile-rings">
              <div className="profile-ring"></div>
              <div className="profile-ring"></div>
              <div className="profile-ring"></div>
            </div>

            {/* Profile Image */}
            <motion.img
              src="/web-app-manifest-512x512.png"
              alt="Aakif Ahmad Mir Profile Photo"
              className="relative w-40 h-40 sm:w-56 sm:h-56 md:w-60 md:h-60 rounded-full 
               border-4 border-blue-500 shadow-xl object-cover animate-pulse-glow
               transition-transform duration-500 hover:scale-110"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          <motion.h1 
className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-shimmer">Hi, I'm Aakif</span>
          </motion.h1>

<motion.p 
  className="text-lg sm:text-xl md:text-2xl font-semibold mb-8
             bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600
             text-transparent bg-clip-text gradient-shift
             tracking-wide"
>
            <Typewriter
              words={[
                    "Building Full Stack Applications",
                    "Developing AI & NLP Systems",
                    "Creating Real-Time Interview Platforms",
                    "Designing Distributed Backends",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1500}
            />
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 mt-6 w-full px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            {/* Skills Button */}
            <motion.a
              href="#skills"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="button-glow w-full sm:w-auto min-w-[180px] text-center inline-block relative font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl 
                      text-white bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 gradient-shift
                      shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)]
                      transition-all duration-300"
            >
              <span className="relative z-10">💡 Skills</span>
            </motion.a>

            {/* Projects Button */}
            <motion.div whileHover={{ scale: 1.08, y: -4 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/projects"
                className="button-glow w-full sm:w-auto min-w-[180px] text-center inline-block relative font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl 
                        text-blue-600 dark:text-cyan-400 
                        bg-white dark:bg-zinc-900 
                        border-2 border-blue-500 
                        hover:shadow-[0_0_30px_rgba(59,130,246,0.6),0_10px_40px_-10px_rgba(59,130,246,0.4)]
                        transform transition-all duration-300"
              >
                <span className="relative z-10">🚀 View Projects</span>
              </Link>
            </motion.div>

            {/* Let's Connect */}
            <motion.div whileHover={{ scale: 1.08, y: -4 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/contact"
                className="button-glow w-full sm:w-auto min-w-[180px] text-center inline-block relative font-semibold px-6 sm:px-8 py-2 sm:py-3 rounded-xl 
                        text-white bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-600 gradient-shift
                        shadow-lg hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.7)]
                        transition-all duration-300"
              >
                <span className="relative z-10">🤝 Let's Connect</span>
              </Link>
            </motion.div>
          </motion.div>

        </motion.div>
      </section>

      {/* About Section */}
      <About />

      {/* Skills Section */}
      <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-950" id="skills">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-bold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 gradient-shift">
            My Skills
          </h2>

          {skillGroups.map((group, idx) => (
            <div key={idx} className="mb-12">
              <h3 className="text-2xl font-semibold text-left sm:text-center text-gray-700 dark:text-gray-300 mb-6">
                {group.title}
              </h3>

              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                {group.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    variants={item}
                    className="skill-card-hover flex flex-col items-center justify-center gap-2 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-900/50 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-zinc-800"
                  >
                    <div className={`skill-icon text-3xl sm:text-4xl ${skill.color}`}>
                      {skill.icon}
                    </div>
                    {skill.name}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Social Links */}
      <SocialLinks />
    </>
  );
}