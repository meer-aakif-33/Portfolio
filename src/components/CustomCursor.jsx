import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    let x = 0,
      y = 0;
    let targetX = 0,
      targetY = 0;

    const speed = 1;

    const animate = () => {
      x += (targetX - x) * speed;
      y += (targetY - y) * speed;

      if (cursor) {
        cursor.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }

      requestAnimationFrame(animate);
    };
    animate();

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (cursor) cursor.style.opacity = hovered ? "0.6" : "0.4";
    };

    const handleTouchMove = (e) => {
      if (e.touches.length > 0) {
        targetX = e.touches[0].clientX;
        targetY = e.touches[0].clientY;
        if (cursor) cursor.style.opacity = hovered ? "0.6" : "0.4";
      }
    };

    const handleTouchStart = (e) => {
      handleTouchMove(e);
    };

    const handleTouchEnd = () => {
      if (cursor) cursor.style.opacity = "0";
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", handleTouchEnd);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [hovered]);

  useEffect(() => {
    const hoverables = document.querySelectorAll("a, button, .cursor-hover");

    const onEnter = () => setHovered(true);
    const onLeave = () => setHovered(false);

    hoverables.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      hoverables.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <div className="pointer-events-none fixed top-0 left-0 z-[9999]">
      <div
        ref={cursorRef}
        className={`rounded-full ${
          hovered
            ? "w-8 h-8 bg-blue-500 opacity-60"
            : "w-4 h-4 bg-gray-700 opacity-40"
        }`}
        style={{
          transition: "background-color 0.2s, width 0.2s, height 0.2s, opacity 0.2s",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      />
    </div>
  );
}
