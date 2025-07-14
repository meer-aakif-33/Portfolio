import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { SocialLinks } from "../components/SocialLinks";
import ParticlesBackground from "../components/ParticlesBackground";
import { FaChartBar } from "react-icons/fa";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaJava,
  FaDatabase,
  FaLayerGroup
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
} from "react-icons/si";

import About from "./About";
const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "C", icon: <SiC />, color: "text-blue-600" },
      { name: "Python", icon: <FaPython />, color: "text-yellow-500" },
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "Kotlin", icon: <SiKotlin />, color: "text-purple-500" },
      { name: "SQL", icon: <FaDatabase />, color: "text-blue-400" },
    ],
  },
  {
    title: "Tech Stack",
    skills: [
      { name: "MERN", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Machine Learning", icon: <SiScikitlearn />, color: "text-orange-400" },
      { name: "Full Stack", icon: <FaLayerGroup />, color: "text-purple-500" }
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-emerald-500" },
      { name: "MySQL", icon: <SiMysql />, color: "text-blue-500" },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
      { name: "GitHub", icon: <SiGithub />, color: "text-gray-800" },
      { name: "RabbitMQ", icon: <SiRabbitmq />, color: "text-rose-400" },
      { name: "Postman", icon: <SiPostman />, color: "text-pink-600" },
    ],
  },
  {
    title: "Libraries / Frameworks",
    skills: [
      { name: "Scikit-Learn", icon: <SiScikitlearn />, color: "text-orange-400" },
      { name: "Matplotlib", icon: <FaChartBar  />, color: "text-indigo-500" },
      { name: "Pandas", icon: <SiPandas />, color: "text-black" },
      { name: "NumPy", icon: <SiNumpy />, color: "text-blue-500" },
      { name: "Bootstrap", icon: <SiBootstrap />, color: "text-purple-600" },
      { name: "NodeJS", icon: <FaNodeJs />, color: "text-green-600" },
      { name: "ExpressJS", icon: <SiExpress />, color: "text-gray-700" },
      { name: "ReactJS", icon: <FaReact />, color: "text-cyan-500" },
      { name: "Tailwind", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Flask", icon: <SiFlask />, color: "text-gray-400" },
      { name: "FastAPI", icon: <SiFastapi />, color: "text-teal-400" },
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen px-6 py-20 flex items-center justify-center bg-gradient-to-br from-gray-50 to-blue-100 dark:from-zinc-900 dark:to-zinc-800 overflow-hidden">
        <ParticlesBackground />

<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.2, ease: "easeOut" }}
  className="relative z-10 text-center px-4"
>
  <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-cyan-400 dark:to-violet-500 mb-4">
    Hi, I'm Aakif
  </h1>
  <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-6 font-medium">
    <Typewriter
      words={[
        "Full Stack Developer",
        "Machine Learning Developer",
        "MERN Stack Developer",
      ]}
      loop
      cursor
      cursorStyle="|"
      typeSpeed={60}
      deleteSpeed={40}
      delaySpeed={1200}
    />
  </p>
  <motion.a
    href="/Aakif's Resume.pdf"
    download
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="inline-block bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-7 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
  >
    Download Resume
  </motion.a>
      </motion.div>
            </section>

            {/* About Section */}
            <About/>
            {/* Skills Section */}
            <section className="px-6 py-20 bg-gray-50 dark:bg-zinc-950">
              <motion.div
                className="max-w-6xl mx-auto text-center"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-4xl font-bold mb-12 text-gray-800 dark:text-white">
                  My Skills
                </h2>

                {skillGroups.map((group, idx) => (
                  <div key={idx} className="mb-12">
                    <h3 className="text-2xl font-semibold text-left sm:text-center text-gray-700 dark:text-gray-300 mb-6">
                      {group.title}
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                      {group.skills.map((skill, index) => (
                        <motion.div
                          key={index}
                          whileHover={{ scale: 1.1, rotate: -1 }}
                          className="flex flex-col items-center justify-center gap-2 text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-zinc-900/50 rounded-xl p-4 shadow-sm border border-gray-200 dark:border-zinc-800 transition-all"
                        >
                          <div className={`text-3xl sm:text-4xl ${skill.color}`}>{skill.icon}</div>
                          {skill.name}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </motion.div>
      </section>
      {/* Social Links */}
      <SocialLinks />
    </>
  );
}