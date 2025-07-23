import { motion } from "framer-motion";

export default function About() {
  return (
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
        <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed tracking-wide">
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
      </motion.div>
    </section>
  );
}
