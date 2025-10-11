// src/components/ScrollProgress.jsx
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);


  return (
    <div className="fixed top-0 left-0 w-full h-[2px] z-[9999] bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-sky-500 dark:via-blue-400 dark:to-cyan-400"
        style={{ width: `${scrollPercent}%` }}
        />

    </div>
  );
}


