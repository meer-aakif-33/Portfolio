import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { motion } from "framer-motion";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Blogs() {
  return (
    <section className="min-h-screen px-6 py-20 bg-gradient-to-br from-gray-50 to-gray-200 dark:from-zinc-900 dark:to-zinc-800">
      <div className="max-w-6xl mx-auto">
        {/* Animated Heading */}
        <motion.h2
          className="text-3xl font-bold mb-14 text-center text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          📚 Blog Articles
        </motion.h2>

        {/* Blog Cards with smooth & staggered animation */}
        <motion.div
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {blogs.map((blog) => (
            <motion.div
              key={blog.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02, y: -5 }}
              className="bg-white/70 dark:bg-zinc-800/70 backdrop-blur-lg border border-gray-200 dark:border-zinc-700 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <Link to={`/blogs/${blog.id}`}>
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-48 object-fit object-center w-full h-40 sm:h-48 object-fit"
                />
                <div className="p-5">
                  <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {blog.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3">
                    {blog.summary}
                  </p>
                  <span className="text-blue-600 dark:text-blue-400 font-medium mt-4 inline-block">
                    Read more →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
