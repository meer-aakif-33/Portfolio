import { useParams, Link } from "react-router-dom";
import { blogs } from "../data/blogs";
import { motion } from "framer-motion";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css"; // or any other theme

export default function BlogDetail() {
  const { id } = useParams();
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-red-500 text-xl">
        Blog not found
        <Link to="/blogs" className="text-blue-600 mt-2">← Go Back</Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen px-6 py-24 bg-gray-50 dark:bg-zinc-900 text-gray-800 dark:text-gray-100">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl mx-auto"
      >
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-64 md:h-[400px] object-fit object-center rounded-xl shadow mb-10"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-center text-blue-700 dark:text-blue-400">
          {blog.title}
        </h1>

        <article className="prose lg:prose-xl dark:prose-invert prose-code:bg-zinc-100 dark:prose-code:bg-zinc-800 prose-code:rounded-md prose-pre:p-4 max-w-none">
          <ReactMarkdown
            children={blog.content}
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
          />
        </article>

        <div className="mt-12 text-center">
          <Link
            to="/blogs"
            className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
          >
            ← Back to Blogs
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
