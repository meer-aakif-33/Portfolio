import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export function SocialLinks() {
  const socialItems = [
    {
      href: "https://github.com/your-username",
      icon: <FaGithub />,
      label: "GitHub",
      color: "#181717",
    },
    {
      href: "https://linkedin.com/in/your-id",
      icon: <FaLinkedin />,
      label: "LinkedIn",
      color: "#0077B5",
    },
    {
      href: "mailto:you@example.com",
      icon: <FaEnvelope />,
      label: "Email",
      color: "#EA4335",
    },
    {
      href: "https://twitter.com/your-handle",
      icon: <FaTwitter />,
      label: "Twitter",
      color: "#1DA1F2",
    },
  ];

  return (
    <motion.footer
      className="w-full px-6 py-10 bg-white dark:bg-black border-t border-gray-200 dark:border-zinc-800 shadow-inner"
      initial={{ y: 60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 sm:gap-0">
        <div className="text-center sm:text-left">
          <p className="text-xl font-bold text-gray-800 dark:text-white">Let's Connect</p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Reach out to collaborate or just say hi!
          </p>
        </div>

        <div className="flex gap-6">
          {socialItems.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center justify-center gap-2 text-gray-700 dark:text-gray-300 transition text-2xl"
              aria-label={item.label}
            >
              <span
                className="transition-colors duration-300"
                style={{
                  color: "inherit",
                }}
              >
                <span
                  className="transition-colors duration-300 group-hover:text-current"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
              </span>
              <span className="hidden sm:inline text-sm font-medium">{item.label}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </motion.footer>
  );
}
